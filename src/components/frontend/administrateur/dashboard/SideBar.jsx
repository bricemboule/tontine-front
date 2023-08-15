
import {Image} from 'react-bootstrap'
import { Link} from "react-router-dom"

export default function sidebar(){

    return(

        
            <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{position:"fixed", height:"100vh"}}>

                <div className="sidebar">

                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <Image src="" className="img-circle elevation-2" alt="User Image"/>
                        </div>
                     
                    </div>

                

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item menu-open">
                                    <Link to="/admin" className="nav-link active text-decoration-none">
                                        <i className="nav-icon fas fa-home"></i>
                                        <p>
                                            Dashboard
                                          
                                        </p>
                                    </Link>
                                </li>
                            <li className="nav-item menu-open">
                                <Link to="/admin" className="nav-link active text-decoration-none">
                                    <i className="nav-icon fas fa-users"></i>
                                    <p>
                                        Utilisateurs
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="utilisateur/ajouter" className="nav-link active">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Ajouter</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin/utilisateur/lister" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Lister</p>
                                        </Link>
                                    </li>
                                  
                            </ul>
                            
                            </li>

                            <li className="nav-item ">
                                    <a href="#" className="nav-link active">
                                        <i className="nav-icon fas fa-user-plus"></i>
                                        <p>
                                            Roles
                                            <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </a>

                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="roles/ajouter" className="nav-link active">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Ajouter</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="roles/lister" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Lister</p>
                                            </Link>
                                        </li>
                                       
                                      
                                    </ul>
                            </li>
                    

                        </ul>
                    </nav>
                </div>
            </aside>
       
    )
}