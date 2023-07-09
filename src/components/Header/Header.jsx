import { useContext } from "react"
import { ToggleContext } from "../../context/ToggleContext"
import { NavLink, Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { Categories } from "../Categories"

const Header = () => {
  const { toggle, setToggle } = useContext(ToggleContext)
  const { setCartOpen, cartItems } = useCart()
  
  return (
    <div>
      <div className={`ctr py-8 px-0 mx-8 xl:mx-auto flex justify-between items-center border-b border-[#2c2c2c] relative z-[999]`}>
        <div onClick={() => setToggle(!toggle)} className={`lg:hidden ${toggle ? 'mr-2' : 'mr-4'}`}>
          { toggle ? 
            (<svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-168-88-88 224-224-224-224 88-88 224 224 224-224 88 88-224 224 224 224-88 88-224-224-224 224Z"/></svg>) 
            :
            (<img src="/assets/shared/tablet/icon-hamburger.svg" alt="Navigation Toggle" />)
          }
            
        </div>
        <Link to="/" className='mr-auto'>
                <img src="/assets/shared/desktop/logo.svg" alt="Logo" />
        </Link>
        <nav id="xl-nav" className="lg:flex hidden justify-center items-center md:gap-x-[34px] mr-auto">
            <NavLink to="/" className="text-white text-[13px] font-bold hover:text-cBrown">HOME</NavLink>   
            <NavLink to="/headphones" className="text-white text-[13px] font-bold hover:text-cBrown">HEADPHONES</NavLink>   
            <NavLink to="/speakers" className="text-white text-[13px] font-bold hover:text-cBrown">SPEAKERS</NavLink>   
            <NavLink to="/earphones" className="text-white text-[13px] font-bold hover:text-cBrown">EARPHONES</NavLink>   
        </nav>
        <div className="relative" onClick={() => setCartOpen(true)}>
            <img src="/assets/shared/desktop/icon-cart.svg" alt="Chart" />
            {cartItems.length > 0 && (
              <div className="bg-cBrown rounded-[50%] h-4 w-4 flex justify-center items-center absolute right-0 top-0 translate-x-[50%] translate-y-[-50%]">
                <p className="text-[8px] text-white font-bold text-center">{cartItems.length}</p>
              </div>
            )}
        </div>
      </div>
      { toggle && (
        <nav id="sm-nav" className="absolute inset-0 h-full z-50">
          <div onClick={() => setToggle(!toggle)} className="bg-white pt-24 pb-16 mt-[5.70rem] rounded-b-lg">
            <Categories />
          </div>
        </nav>
      )}
    </div>
  )
}

export default Header