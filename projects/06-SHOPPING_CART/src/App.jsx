import { products as initialProducts } from "./assets/mocks/products.json"
import { Products } from "./assets/components/Products"
import { Header } from "./assets/components/Header"
import { useState } from "react"
import { Footer } from "./assets/components/Footer"
import { useFilters } from "./assets/hooks/useFilters.js"
import { Cart } from "./assets/components/Cart.jsx"
import { CartProvider } from "./assets/context/cart.jsx"


function App() {
  const [products] = useState(initialProducts)
  const {filterProducts} = useFilters()
  const filtredProducts = filterProducts(products)

  return (
    <CartProvider>
    <Header/>
    <Cart/>
    <Products products={filtredProducts}/>
    <Footer/>
    </CartProvider>
    
    
  )

}

export default App
