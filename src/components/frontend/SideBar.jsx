import "admin-lte/plugins/jquery/jquery"
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle"
import "admin-lte/dist/js/adminlte"
import "./css/home.css"
import { Link } from "react-router-dom"

export default function sidebar(){

    return(

        <div >
            <aside className="main-sidebar sidebar-dark-primary elevation-4">

                <Link href="index3.html" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
                    <span className="brand-text font-weight-light">TONTINE</span>
                </Link>

                <div className="sidebar">

                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
                        </div>
                        <div className="info">
                            <Link href="#" className="d-block">Brice Mboule</Link>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item menu-open">
                                <Link to="/admin" className="nav-link active">
                                    <i className="nav-icon fas fa-users"></i>
                                    <p>
                                        Dashboard
                                        <i className="right fas fa-angle-left"></i>
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
                            </ul>
                            
                            </li>

                            <li className="nav-item ">
                                    <a href="#" className="nav-link active">
                                        <i className="nav-icon fas fa-users"></i>
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