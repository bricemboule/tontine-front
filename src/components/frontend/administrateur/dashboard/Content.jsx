import "admin-lte/plugins/jquery/jquery"
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle"
import "admin-lte/dist/js/adminlte"

import { Link} from "react-router-dom"
import { Button } from "bootstrap"
import { useContext } from "react"
import RoleContext from "../../Context/RoleContext"


export default function Content(){

    const {Deconnecter} = useContext(RoleContext);



    return(

        <div >
             
        <div className="content-wrapper">
               <div className="content-header">
                   <div className="container-fluid">
                       <div className="row mb-2">
                           <div className="col-sm-6">
                               <h1 className="m-0">Page d accueil</h1>
                           </div>
                           <div className="col-sm-6">
                               <ol className="breadcrumb float-sm-right">
                                   <li className="breadcrumb-item"><a href="#">Home</a></li>
                                   <li className="breadcrumb-item active">Page d accueil</li>
                               </ol>
                           </div>
                       </div>
                   </div>
               </div>

               <div className="content">
                   <div className="container-fluid">
                       <div className="row">

                       <div className="col-lg-3 col-6">

                           <div className="small-box bg-info">
                               <div className="inner">
                                   <h3>150</h3>
                                   <p>New Orders</p>
                               </div>
                               <div className="icon">
                                   <i className="ion ion-bag"></i>
                               </div>
                               <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                           </div>
                       </div>

                       <div className="col-lg-3 col-6">

                           <div className="small-box bg-success">
                           <div className="inner">
                           <h3>53<sup style={{fontSize: "20px"}}>%</sup></h3>
                           <p>Bounce Rate</p>
                           </div>
                           <div className="icon">
                           <i className="ion ion-stats-bars"></i>
                           </div>
                           <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                           </div>
                       </div>

                       <div className="col-lg-3 col-6">

                           <div className="small-box bg-warning">
                               <div className="inner">
                                   <h3>44</h3>
                                   <p>User Registrations</p>
                               </div>
                               <div className="icon">
                                   <i className="ion ion-person-add"></i>
                               </div>
                               <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                           </div>
                       </div>

                       <div className="col-lg-3 col-6">

                           <div className="small-box bg-danger">
                               <div className="inner">
                                   <h3>65</h3>
                                   <p>Unique Visitors</p>
                               </div>
                               <div className="icon">
                                   <i className="ion ion-pie-graph"></i>
                               </div>
                               <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                           </div>
                       </div>
                       </div>
                   </div>
               </div>
       </div>

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
                      
                       <button onClick={()=>Deconnecter()} className="btn btn-primary btn-block"><b>Se Déconnecter</b></button>

                   </div>
           </div>
       </aside>

   </div>


    )
}