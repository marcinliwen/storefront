import React, { useRef, useEffect } from "react"
import ReactDOM from "react-dom"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { useCart } from "../../../hooks/use-cart"
import { navigate } from "gatsby"
import { formatPrice } from "../../../utils/format-price"

const CLIENT_ID =
  "Af2U3hIwnqTfpZKBhySt7GM2RGUpWvK58Ln_o1gv4QqPf_zmnGv_IVXw_C1T2L3S7eO1D6AtPJMllmDJ"

/* const initialOptions = {
  "client-id":
    "Af2U3hIwnqTfpZKBhySt7GM2RGUpWvK58Ln_o1gv4QqPf_zmnGv_IVXw_C1T2L3S7eO1D6AtPJMllmDJ",
  currency: "EUR",
  intent: "capture",
  "data-client-token": "abc123xyz==",
} */

/* export default function PaypalPayment() {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <Helmet>
        <script
          defer
          src={`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`}
        ></script>
      </Helmet>
      <PayPalButtons style={{ layout: "horizontal" }} />
      <h2>PayPal</h2>
    </PayPalScriptProvider>
  )
} */

function PaypalPayment() {
  //const paypal =window.paypal;

  //var PayPalButton

  const {
    cart,
    actions: { completeCart, setPaymentSession },
  } = useCart()

  const completeOrder = async () => {
    const cart = await setPaymentSession("paypal")

    if (!cart) {
      //setProcessing(false)
      return
    }

    const order = await completeCart(cart.id)
    
    if (!order) {
      //setProcessing(false)
      return
    }

    //setProcessing(false)
    navigate("/order-confirmed", { state: { order } })
  }

 
  useEffect(() => {
    const PayPalButton = window.paypal.Buttons.driver("react", {
      React,
      ReactDOM,
    })

    /*  window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: "0.01",
                      },
                    },
                  ],
                });
              },
            onApprove: async (data, actions) => {
               const order = await actions.order.capture();
               console.log("Order success:" + order)
              },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)  */
  }, [])
  /* const createOrder = (data, actions) => {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: "0.01",
            },
          },
        ],
      });
    };
    const onApprove = (data, actions) => {
      return actions.order.capture();
    }; */
    const initialOptions = {
      "client-id": CLIENT_ID,
      currency: "EUR",
  };

  console.log(((cart.payment_session.data.amount / 100) * 1).toFixed(2))
  return (
    <div className="my-12">
      <div className="payment-title"><h3>PayPal</h3></div>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code:'EUR',
                    value: parseFloat(((cart.payment_session.data.amount / 100) * 1).toFixed(2)),
                  },
                },
              ],
            })
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(details => {
              const name = details.payer.name.given_name
              alert(`Transaction completed by ${name}`)
              completeOrder();
            })
          }}
        />
      </PayPalScriptProvider>
    </div>
  )
}
export default PaypalPayment
