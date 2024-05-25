import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="font-sans">
        <Navbar />
        <Outlet />
    </div>
  )
}

export default MainLayout