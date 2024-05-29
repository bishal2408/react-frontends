import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="font-sans">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout