import { Link } from "react-router-dom"
export default function Home(){

    return (
        <div>
            <h1> Home page </h1>
            <Link to="/login"> Login</Link>
            <Link to="/register"> Creation</Link>
            <Link to="/admin">Dashboard</Link>
        </div>
    )
}