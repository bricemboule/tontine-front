import "admin-lte/plugins/jquery/jquery"
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle"
import "admin-lte/dist/js/adminlte"

import { Link} from "react-router-dom"
import { useContext } from "react"
import RoleContext from "../../Context/RoleContext"


export default function Content(){

    const {Deconnecter} = useContext(RoleContext);



    return(

        
             
            <aside className="control-sidebar control-sidebar-dark">

                <div className="card bg-dark">
                        <div className="card-body bg-dark box-profile">
                            <div className="text-center ">
                                <img className="profile-user-img img-fluid img-circle" src="" alt="User profile picture"/>
                            </div>
                            <h3 className="profile-username text-center ellipsis">Nina Mcintire</h3>
                            <p className="text-muted text-center">Software Engineer</p>
                            
                            <ul className="list-group bg-dark mb-3">
                                <li className="list-group-item d-flex">
                                    <i className="fa fa-lock p-2 text-left">
                                    </i>
                                    <Link to={''} className="align-items-center p-1 text-decoration-none">
                                                <p> Mot de passe</p>
                                    </Link>
                                </li>
                                <li className="list-group-item d-flex">
                                    <i className="fa fa-user p-2">
                                    </i>
                                <Link to={''} className=" align-items-center p-1 text-decoration-none">
                                       
                                                <p> Mon profil</p>
                                       
                                    </Link>
                                </li>
                                
                            </ul>
                            
                            <button onClick={()=>Deconnecter()} className="btn btn-primary btn-block"><b>Se Déconnecter</b></button>

                        </div>
                </div>
            </aside>



    )
}