
import Header from "./Header"
import SideBar from "./SideBar"
import Footer from "./Footer"
import Content from "./Content"
import { Outlet } from "react-router-dom"
export default function Dashboard(){

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