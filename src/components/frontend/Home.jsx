import { Link } from "react-router-dom"
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'
export default function Home(){

    return (
        <div>
            <Header/>
            <SideBar/>
            <Content/>
            <Footer/>
        </div>
    )
}