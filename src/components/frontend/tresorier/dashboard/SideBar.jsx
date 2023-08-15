
import {Image} from 'react-bootstrap'
import { Link} from "react-router-dom"

export default function Sidebar(){

    return(

        <div >
            <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{position:"fixed", height:"100vh"}}>

                <div className="sidebar">

                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <Image src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
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
                                    <Link to="/secretaire" className="nav-link active">
                                        <i className="nav-icon fas fa-home"></i>
                                        <p>
                                            Dashboard
                                          
                                        </p>
                                    </Link>
                                </li>

                                <li className="nav-item menu-open">
                                <div className="nav-link active">
                                    <i className="nav-icon fas fa-users"></i>
                                    <p>
                                      Cotisation
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </div>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="cotisation/ajouter" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Ajouter</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="cotisation/lister" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Lister</p>
                                        </Link>
                                    </li>
                                  
                                </ul>
                            
                            </li>

                            <li className="nav-item menu-open">
                                <div className="nav-link active">
                                    <i className="nav-icon fas fa-users"></i>
                                    <p>
                                     Type Retrait
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </div>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="type_retrait/ajouter" className="nav-link">
                                        {/* <Link to="retrait/ajouter" className="nav-link" onClick={()=>{console.log("Bonjour")}}> */}
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Ajouter</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="type_retrait/lister" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Lister</p>
                                        </Link>
                                    </li>
                                  
                                </ul>
                            
                            </li>
                      
                            <li className="nav-item menu-open">
                                <div className="nav-link active">
                                    <i className="nav-icon fas fa-users"></i>
                                    <p>
                                      Retrait
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </div>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="retrait/ajouter" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Ajouter</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="retrait/lister" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Lister</p>
                                        </Link>
                                    </li>
                                  
                                </ul>
                            
                            </li>

                            <li className="nav-item menu-open">
                                <div className="nav-link active">
                                    <i className="nav-icon fas fa-users"></i>
                                    <p>
                                      Depenses
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </div>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="depense/ajouter" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Ajouter</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="depense/lister" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Lister</p>
                                        </Link>
                                    </li>
                                  
                                </ul>
                            
                            </li>

                            <li className="nav-item menu-open">
                                <div className="nav-link active">
                                    <i className="nav-icon fas fa-users"></i>
                                    <p>
                                      Prêts
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </div>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="pret/ajouter" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Ajouter</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="pret/lister" className="nav-link">
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
        </div> 
    )
}