import "admin-lte/plugins/jquery/jquery"
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle"
import "admin-lte/dist/js/adminlte"
import "/public/css/home.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Header(){


    return (
        <div >
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars"></i></Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                       
                    </ul>

                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item dropdown">
                            <Link className="nav-link" data-toggle="dropdown" href="#">
                            <FontAwesomeIcon icon="fas fa-bell" />
                                <span className="badge badge-warning navbar-badge">4</span>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider"></div>
                            <Link href="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2"></i> 4 new messages
                                <span className="float-right text-muted text-sm">3 mins</span>
                            </Link>
                            
                            <div className="dropdown-divider"></div>
                                <Link href="#" className="dropdown-item dropdown-footer">See All Notifications</Link>
                            </div>
                        </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                                    <i className="fas fa-th-large"></i>
                            </Link>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}