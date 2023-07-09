import { Routes, Route } from "react-router-dom"
import { useScrollToTop } from "./hook"
import { useCart } from "./context/CartContext"
import { ToggleProvider } from "./context/ToggleContext"
import { AlertProvider } from "./context/AlertContext"
import products from "./data/products"
import { 
  Products, 
  ProductDetail, 
  Checkout, 
  Home 
} from "./pages"

const App = () => {
  const { cartItems } = useCart()
  useScrollToTop()

  return (
    <ToggleProvider>
      <AlertProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<Products />} />
          <Route path="/speakers" element={<Products />} />
          <Route path="/earphones" element={<Products />} />
          { cartItems.length > 0 && 
          <Route path="/checkout" element={<Checkout />} /> 
          }
          {products.map((product) => (
            <Route key={product.slug} path={`/${product.category}/${product.slug}`} element={<ProductDetail />} />
          ))}
        </Routes>
      </AlertProvider>
    </ToggleProvider>
  )
}

export default App