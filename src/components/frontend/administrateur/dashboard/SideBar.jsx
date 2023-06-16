import "admin-lte/plugins/jquery/jquery"
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle"
import "admin-lte/dist/js/adminlte"
import "/public/css/home.css"

import {Image} from 'react-bootstrap'
import { Link, Outlet } from "react-router-dom"
import { RoleProvider } from "../../Context/RoleContext"

export default function sidebar(){

    return(

        <div >
            <aside className="main-sidebar sidebar-dark-primary elevation-4">

                <div className="sidebar">

                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <Image src="/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
                        </div>
                     
                    </div>

                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item menu-open">
                                    <Link to="/admin" className="nav-link active">
                                        <i className="nav-icon fas fa-home"></i>
                                        <p>
                                            Dashboard
                                          
                                        </p>
                                    </Link>
                                </li>
                            <li className="nav-item menu-open">
                                <Link to="/admin" className="nav-link active">
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
                                    <li className="nav-item">
                                        <Link to="/admin/utilisateur/modifier" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Modifier</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin/utilisateur/supprimer" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Supprimer</p>
                                        </Link>
                                    </li>
                            </ul>
                            
                            </li>

                            <li className="nav-item ">
                                    <a href="#" className="nav-link active">
                                        <i className="nav-icon fas fa-user-plus"></i>
                                        <p>
                                            Roles et Permissions
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
                                        <li className="nav-item">
                                            <Link to="roles/modifier" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Modifier</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="roles/supprimer" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Supprimer</p>
                                            </Link>
                                        </li>
                                    </ul>
                            </li>
                    

                        </ul>
                    </nav>
                </div>
            </aside>
        </div> 
    )
}