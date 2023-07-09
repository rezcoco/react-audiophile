import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import shortedName from "../../utilities/shortedName"
import priceConverter from "../../utilities/priceConverter"
import './Confirmation.css'

const Confirmation = () => {
  const { cartItems, getTotalPrice } = useCart()
  const [showAll, setShowAll] = useState(false)

  return (
    <div className="fixed bg-black bg-opacity-40 w-screen h-screen z-[9999]">
      <div className="mx-auto absolute top-1/2 -translate-y-1/2 flex flex-col lg:max-w-[33.75rem] md:max-w-[48rem] h-min p-10 bg-white rounded-lg inset-x-8 xl:inset-x-0">
        <div className="w-16 h-16">
            <img src="/assets/checkout/icon-order-confirmation.svg" alt="Order Confirmation" />
        </div>
        <h1 className="text-2xl md:text-[2rem] font-bold mt-6 mb-4 md:mt-8 md:mb-6 leading-[2.25rem]">THANK YOU<br />FOR YOUR ORDER</h1>
        <p className="text-[15px] text-cDarkGray font-medium">You will receive an email confirmation shortly.</p>
        <div className="grid md:grid-cols-[3fr_2fr] w-full my-6 md:mt-8 md:mb-[2.87rem]">
            <div className="flex flex-col justify-center bg-cGray p-6 Confirmation__left">
              <div className="flex flex-col gap-4 border-b-[1px] border-black border-opacity-[0.07] pb-4">
                {cartItems.map((item, index) => (
                  <div key={item.id} className={`flex items-center gap-[27px] ${(index > 0 && !showAll) && 'hidden'}`}>
                    <img className="w-[1.75rem] h-8" src={`/assets/cart/image-${item.slug}.jpg`} alt={item.name} />
                    <div className="flex flex-col gap-1">
                      <p 
                      className="text-[15px] font-bold uppercase">{shortedName(item.name)}
                      </p>
                      <p 
                      className="text-sm text-cDarkGray font-bold"
                      >{priceConverter(item.price * item.quantity)}</p>
                    </div>
                    <p 
                    className="text-[15px] text-cDarkGray font-bold ml-auto"
                    >{`x${item.quantity}`}</p>
                  </div>
                ))}
              </div>
              {cartItems.length > 1 && (
                <button className="text-cDarkGray text-xs mt-6 font-bold hover:text-cBrown" onClick={() => setShowAll(!showAll)}>{showAll ? 'View less' : `and ${cartItems.length - 1} other item${cartItems.length > 1 && '(s)' }` }</button>
              )}
            </div>
            <div className={`bg-cDark flex flex-col ${showAll ? 'justify-end' : 'justify-center'} gap-2 p-6 w-full Confirmation__right`}>
              <p className="text-[15px] text-cDarkGray font-medium">GRAND TOTAL</p>
              <p className="text-lg text-white font-bold">{priceConverter(getTotalPrice())}</p>
            </div>
        </div>
        <Link to="/" className="py-[1.1em] px-[2.5em] bg-cBrown hover:bg-cLightBrown text-center text-white text-[13px] font-bold">BACK TO HOME</Link>
      </div>
    </div>
  )
}

export default Confirmation