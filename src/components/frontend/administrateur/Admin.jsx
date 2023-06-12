import Header from "./dashboard/Header"
import Footer from "./dashboard/Footer"
import SideBar from "./dashboard/SideBar"
import { Outlet } from "react-router-dom"
export default function Dashboard(){

    return (

        <div>
            <Header/>
            <SideBar/>
         
            
                <Outlet/>
                <Footer/>
        </div>
    )
}