import { useContext } from "react"
import RoleContext from "../../Context/RoleContext"
import { Link} from "react-router-dom"


export default function Content(){
    const {Deconnecter} = useContext(RoleContext);

    return(

        <aside className="control-sidebar control-sidebar-dark">

            <div className="card bg-dark">
                <div className="card-body bg-dark box-profile">
                    <div className="text-center ">
                            <img className="profile-user-img img-fluid img-circle" src="../../dist/img/user4-128x128.jpg" alt="User profile picture"/>
                    </div>
                    <h3 className="profile-username text-center ellipsis">Nina Mcintire</h3>
                    <p className="text-muted text-center">Software Engineer</p>
                        
                    <ul className="list-group bg-dark mb-3">
                            <li className="list-group-item ">
                                <Link to={''} className="align-items-center">
                                    <i className="fa fa-lock pr-2 text-left">
                                            <p> Mot de passe</p>
                                    </i>
                                </Link>
                            </li>
                            <li className="list-group-item">
                            <Link to={''} className=" align-items-center">
                                    <i className="fa fa-user pr-2">
                                            <p> Mon profil</p>
                                    </i>
                                </Link>
                            </li>
                            
                    </ul>
                        
                    <button onClick={()=>Deconnecter()} className="btn btn-primary btn-block">
                        <b>Se Déconnecter</b>
                    </button>

                </div>
            </div>
        </aside>

    )
}