import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"
import NotFoundPage from "./pages/NotFoundPage"
import ShopPage from "./pages/ShopPage"
import ShoppingCartPage from "./pages/ShoppingCartPage"
import CheckoutPage from "./pages/CheckoutPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import AboutUsPage from "./pages/AboutUsPage"
import BlogPage from "./pages/BlogPage"
import ContactPage from "./pages/ContactPage"


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Route>

    )
  )

  return <RouterProvider router={router} />
}

export default App