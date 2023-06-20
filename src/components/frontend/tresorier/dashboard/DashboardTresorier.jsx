import Content from "./Content"
import Header from "./Header"
import SideBar from "./SideBar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export default function DashboardTresorier(){

    return (

        <div>
            <Header/>
            <SideBar/>
            <Outlet/> 
           <Content/> 
            <Footer/>
        </div>
    )
}