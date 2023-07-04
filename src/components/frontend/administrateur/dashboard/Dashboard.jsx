
import Header from "./Header"
import SideBar from "./SideBar"
import Footer from "./Footer"
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