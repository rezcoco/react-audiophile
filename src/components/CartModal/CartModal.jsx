import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import shortedName from "../../utilities/shortedName"
import priceConverter from "../../utilities/priceConverter"

const CartModal = () => {
  const { 
    editCart, 
    cartItems,
    removeOneitem, 
    removeAllItems, 
    getTotalPrice, 
    cartOpen, 
    setCartOpen
  } = useCart()

  return (cartOpen &&
    (<div onClick={() => setCartOpen(false)} className="fixed top-0 bottom-0 bg-black bg-opacity-40 w-screen h-screen">
      <div className="p-8 bg-white w-[20.5rem] md:w-[23.5626rem] rounded-lg fixed mx-auto top-[8rem] inset-x-0 md:left-[unset] md:right-[8rem] z-[999]">
        { cartItems.length > 0 ? <div onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between">
            <p className="text-lg font-bold">{`CHART (${cartItems.length})`}</p>
            <button onClick={() => removeAllItems()} className="text-[15px] text-cDarkGray hover:text-cLightBrown font-medium">Remove All</button>
          </div>
          <div className={`${cartItems.length > 3 && 'overflow-y-scroll max-h-[256px]'}`}>
            {cartItems.map((item) => {
              return (<div key={item.id} className={`flex items-center gap-4 my-8 ${cartItems.length > 3 && 'pr-4'}`}>
                <div>
                  <img className="rounded-lg w-16 h-16" src={`/assets/cart/image-${item.slug}.jpg`} alt={item.name} />
                </div>
                <div>
                  <p className="text-[15px] font-bold">{shortedName(item.name)}</p>
                  <p className="text-sm text-cDarkGray font-bold">{
                    priceConverter(item.price * item.quantity)
                  }</p>
                </div>
                <div className="flex gap-4 items-center ml-auto py-[.2em] px-[1em] bg-cGray">
                  <button onClick={() => item.quantity === 1 ? removeOneitem(item.id) : editCart(item, item.quantity - 1)} className="text-[13px] text-cDarkGray hover:text-cBrown">-</button>
                  <p className="text-[13px] font-bold">{item.quantity}</p>
                  <button onClick={() => editCart(item, item.quantity + 1)} className="text-[13px] text-cDarkGray hover:text-cBrown">+</button>
                </div>
              </div>)
            })}
          </div>
          <div className="flex justify-between mb-6">
            <p className="text-[15px] text-cDarkGray font-medium">TOTAL</p>
            <p className="text-lg font-bold">{ priceConverter(getTotalPrice()) }</p>
          </div>
          <Link to="/checkout" onClick={() => setCartOpen(false)} className="btn inline-block text-center bg-cBrown hover:bg-cLightBrown text-[13px] text-white w-full font-bold">CHECKOUT</Link>
        </div> : <h1 className="text-lg text-center">Your cart is empty</h1>}
      </div>
    </div>)
  )
}

export default CartModal 