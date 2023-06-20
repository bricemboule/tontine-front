import { Link } from "react-router-dom"

export default function Home(){

    return (
        <div>
            <nav>
                    <Link to ='/login'> Login</Link>
                    <Link to ='/register'> Creer un compte</Link>
            </nav>
        </div>
    )
}