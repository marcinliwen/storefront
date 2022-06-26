import { Disclosure } from "@headlessui/react"
import React from "react"

const faqData={questions:[
  {
    q: "Wie kann ich mein Tier für einen Termin anmelden?",
    a: "Wir haben zwei bis drei Mal die Woche geöffnet. Sie können sich nur telefonisch für einen Termin anmelden. Wir versuchen immer, unsere Anreise nach Zasieki Ihren Bedürfnissen anzupassen.",
  },
  {
    q: "Wie kann ich mein Tier für einen Termin anmelden?",
    a: "Sie können sich nur telefonisch für einen Termin anmelden",
  },
  {
    q: "Wie kann ich mein Tier für einen Termin anmelden?",
    a: "Sie können sich nur telefonisch für einen Termin anmelden",
  },
]}

const FaqExpandable = ({ q, a }) => {
    return (
      <Disclosure
        as="div"
        key={q}
        className="border-t last:border-b border-ui-medium py-6"
      >
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                <span className="font-medium text-gray-900 text-left">{q}</span>
                <span className="ml-6 flex items-center">
                  {open ? <span>—</span> : <span>+</span>}
                </span>
              </Disclosure.Button>
            </h3>
            <Disclosure.Panel className="pt-6">
              <div className="space-y-4 text-ui-dark text-sm">{a}</div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
  }

const Faq = () =>{
    console.log(faqData)
    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Fragen und Antworten</h2>
        {faqData.questions.map(item=>(<FaqExpandable q={item.q} a={item.a}/>))}
        </div>
      
    )
}
export default Faq;


