/* eslint-disable react-hooks/rules-of-hooks */
import { useLocation, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import products from '../../data/products'
import { Information } from "./Information"
import { Gallery } from "./Gallery"
import { About, Categories, Footer, Header } from "../../components"
import { Recommendation } from "./Recommendation"
import { useCart } from "../../context/CartContext"
import { AlertContext } from "../../context/AlertContext"

const ProductDetail = () => {
  const { alert, setAlert } = useContext(AlertContext)
  const [total, useTotal] = useState(1)
  const { pathname } = useLocation()
  const { editCart } = useCart()
  const navigate = useNavigate()
  const productPath = pathname.split('/')[2]
  const product = products.find((product) => product.slug === productPath)

  function addToChart() {
    editCart(product, total)
    setAlert(!alert)

    setTimeout(() => {
      setAlert(false)
    }, 1500);
  }

  return (
    <>
    <header className="bg-cDark">
      <Header />
    </header>
    <main className="flex flex-col lg:gap-40 md:gap-[7.5rem] gap-[5.5rem] lg:mt-[4.94rem] lg:mb-[10rem] md:mt-8 mt-4 mb-[7.5rem]">
      <section className="ctr">
        <button onClick={() => navigate(-1)} className="text-[15px] text-cDarkGray font-medium hover:underline lg:mb-14 mb-6">Go Back</button>
        <div className="flex flex-col md:flex-row items-center lg:gap-[7.75rem] md:gap-[4.34rem] gap-8">
          <picture>
            <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
            <source media="(min-width: 768px)" srcSet={product.image.tablet} />
            <img className="rounded-md" src={product.image.mobile} alt={product.name} />
          </picture>
          <div className="md:max-w-[21.18rem] lg:max-w-full">
            {product.new && (<p className="text-sm text-cBrown uppercase tracking-[10px] mb-6 md:mb-4">New Product</p>)}
            <h1 className="uppercase lg:text-[40px] text-[28px] font-bold md:mb-8 mb-6">{product.name}</h1>
            <p className="md:text-[15px] text-cDarkGray font-medium md:mb-8 mb-6">{product.description}</p>
            <p className="text-lg font-bold md:mb-[3.8rem] mb-8">{product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            <div className="flex gap-4 items-center">
              <div className="flex justify-between items-center gap-5 bg-cGray h-[3rem] px-6">
                <span className="text-cDarkGray hover:text-cBrown cursor-pointer" onClick={() => total > 1 ? useTotal(total - 1) : useTotal(1)}>-</span>
                <p className="text-[13px] font-bold">{total}</p>
                <span className="text-cDarkGray hover:text-cBrown cursor-pointer" onClick={() => useTotal(total + 1)}>+</span>
              </div>
              <button onClick={addToChart} className="btn text-white text-[13px] font-bold bg-cBrown hover:bg-cLightBrown" type="button">ADD TO CHART</button>
            </div>
          </div>
        </div>
      </section>
      <Information description={product.description} includes={product.includes} />
      <Gallery images={product.gallery} alt={product.name} />
      <Recommendation others={product.others} />
      <Categories className="mt-10" />
      <About />
    </main>
    <Footer />
    </>
  )
}

export default ProductDetail