import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import SearchEngineOptimization from "../components/utility/seo"

const Kontakt = () => {
  return (
    <div className="layout-base">
      <SearchEngineOptimization title="Kontakt" />
      <div className="border-b border-ui-medium mb-8 pb-8">
        <h1 className="mb-2">Kontakt</h1>
      </div>

      <div className="">
        <div className="w-full mb-12 md:pr-8 flex flex-col md:flex-row justify-center text-center gap-12">
          <div className="mb-4">
            <h2 className="mb-4">ADDRESSE</h2>
            <p className="mb-2">+48 506 109 445</p>
            <p className="mb-2">animalvet@gmail.com</p>
            <p className="mb-2">Zasieki 75 <br />,68-343 Zasieki</p>
            <a
              className="mt-4 block btn-ui btn-second md:w-[200px]"
              href="https://goo.gl/maps/5vwZ1Veo9Y9zDGsC9"
              target="_blank"
            >
              Navigieren
            </a>
          </div>
          <div className="mb-4 md:w-[250px]">
            <h2 className="mb-4">ÖFFNUNGSZEITEN</h2>
            <p className="mb-2">Montag - Freitag</p>
            <p className="text-sm font-bold">
              Termin nur nach telefonischer Terminvereinbarung
            </p>
          </div>
          <div className="mb-4">
            <h2 className="mb-4">TERMINE</h2>

            <div className="flex flex-col">
              <a
                className="mt-4  btn-ui btn-second md:w-[200px] "
                href="tel:48506109445"
                target="_blank"
              >
                Anrufen
              </a>
              <a
                className="mt-4  btn-ui btn-second md:w-[200px]"
                href="http://wa.me/48506109445/?text=Dzień dobry, chciałbym umówić się na wizytę"
                target="_blank"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.910924119633!2d14.66634631613796!3d51.75295237967615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47087f0fbc487c15%3A0x6c16bb3c74513e0c!2sZasieki%2075%2C%2068-343!5e0!3m2!1spl!2spl!4v1654376835356!5m2!1spl!2spl"
            className="w-full"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
export default Kontakt
