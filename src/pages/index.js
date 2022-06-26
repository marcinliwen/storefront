import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import CollectionPreview from "../components/categories/collection-preview"
import ProductListItem from "../components/products/product-list-item"
import Faq from "../components/faq"
import Grid from "../components/utility/grid"
import SearchEngineOptimization from "../components/utility/seo"
import { useCollections } from "../hooks/use-collections"

const IndexPage = ({ data }) => {
  const { products, collections } = data
  const prods = data.products.edges.map(edge => edge.node)
  const collectionPreviews = useCollections(collections, products)

  return (
    <div>
      <SearchEngineOptimization title="Home" />
      <div className="bg-ui-light pb-12 lg:pb-0 w-full px-4 sm:px-6 lg:px-12 bg-gradient">
        <div className="flex flex-col lg:flex-row items-center max-w-screen-2xl mx-auto">
          <StaticImage
            src="../images/dog-hero.png"
            alt="Brown dog"
            placeholder="tracedSVG"
            className="w-full lg:w-1/2 h-auto"
            objectFit="contain"
          />
          <div>
            <h1 className="logo-text-ui"> Kleintierpraxis</h1>
            <p className="mt-2 text-lg font-normal">Tierarzt</p>
            <p className="mt-0 text-4xl font-normal">Kalina Adamkiewicz</p>
            <Link
              to="/kontakt"
              className="btn-ui mt-4 min-w-full lg:min-w-0 inline-block"
            >
              Termin Buchen
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-ui-red">
        <div className="container">
          <div className="grid grid-col-1 md:grid-cols-4 justify-center gap-8 flex-wrap text-white  text-xl ">
            {/*  <div className="w-[350px] text-center ">
            <Link to="/kontakt">
            <StaticImage 
              src="../images/hotline.png"
              alt="Telefon"
              placeholder="tracedSVG"
              objectFit="contain"
              className="w-16 mb-4"
              />
              <p>Termin nur nach telefonischer Terminvereinbarung</p>
              </Link>
          </div> */}
            <div className="w-[350px] max-w-full text-center">
              <Link to="/kontakt">
                <StaticImage
                  src="../images/profilaktyka.png"
                  alt="profilaktyka"
                  placeholder="tracedSVG"
                  objectFit="contain"
                  className="w-16 mb-4"
                />
                <p>Verhütung</p>
              </Link>
            </div>
            {/*  <div className="w-[350px] text-center">
          <Link to="/kontakt">
          <StaticImage 
              src="../images/location.png"
              alt="Lokalizacja"
              placeholder="tracedSVG"
              objectFit="contain"
              className="w-16 mb-4"
              />
            <p>Neue Adresse: <br />Zasieki 75</p>
            </Link>
          </div> */}
            <div className="w-[350px] max-w-full text-center">
              <StaticImage
                src="../images/medical-report.png"
                alt="Untersuchung"
                placeholder="tracedSVG"
                objectFit="contain"
                className="w-16 mb-4"
              />
              <p>Untersuchung</p>
            </div>
            <div className="w-[350px] max-w-full text-center">
              <StaticImage
                src="../images/scalpel.png"
                alt="Chirurgie"
                placeholder="tracedSVG"
                objectFit="contain"
                className="w-16 mb-4"
              />
              <p>Chirurgie</p>
            </div>
            <div className="w-[350px] max-w-full text-center">
              <StaticImage
                src="../images/medicine.png"
                alt="Medicine"
                placeholder="tracedSVG"
                objectFit="contain"
                className="w-16 mb-4"
              />
              <p>Medikamenten</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="">
          <div className="bg-ui-red w-24 h-24 rounded-full mx-auto p-4">
            <StaticImage
              src="../images/vet-calender.png"
              alt="Medicine"
              placeholder="tracedSVG"
              objectFit="contain"
              className="w-16"
            />
          </div>
          <h2 className="text-3xl">Termin</h2>
          <p>Montag bis Freitag.</p>
          <p>
            Termin nur nach telefonischer Terminvereinbarung. 
          </p>
        </div>
        <div className="">
          <div className="bg-ui-red w-24 h-24 rounded-full mx-auto p-4">
            <StaticImage
              src="../images/location.png"
              alt="Medicine"
              placeholder="tracedSVG"
              objectFit="contain"
              className="w-16"
            />
          </div>
          <h2 className="text-3xl">Neue Adresse</h2>
          <p>Zasieki 75</p>
        </div>
        <div className="">
          <div className="bg-ui-red w-24 h-24 rounded-full mx-auto p-4">
            <StaticImage
              src="../images/pet-shop.png"
              alt="pet shop"
              placeholder="tracedSVG"
              objectFit="contain"
              className="w-16"
            />
          </div>

          <h2 className="text-3xl">Online Shop</h2>
          <p><b>Medikamente</b> nur für Praxispatienten</p>
          <p><b>Haustierprodukte</b></p>
          <p><b>Zahlung</b> per Karte oder Nachnahme</p>
          <p><b>Abholung</b> in der Praxis oder Apotheke</p>
        </div>
        </div>
      </div>
      <div className="layout-base my-12 min-h-0">
        <Grid
          title={"Bestseller"}
          cta={{ to: "/products", text: "Alle Produkte" }}
        >
          {prods.slice(0, 4).map(p => {
            return <ProductListItem product={p} key={p.handle} />
          })}
        </Grid>
        <div className="mt-12">
          <Grid
            title="Kategorien"
            cta={{ to: "/collections", text: "Alle Kategorien" }}
          >
            {collectionPreviews.slice(0, 4).map(collection => {
              return (
                <CollectionPreview
                  key={collection.id}
                  collection={collection}
                />
              )
            })}
          </Grid>
        </div>
      </div>
      <div className="">
        <div className="container">
          <Faq/>
        </div>
      </div>
      
    </div>
  )
}
export const query = graphql`
  query {
    products: allMedusaProducts {
      edges {
        node {
          handle
          title
          collection_id
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
          variants {
            prices {
              amount
              currency_code
            }
          }
        }
      }
    }
    collections: allMedusaCollections {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
`

export default IndexPage
