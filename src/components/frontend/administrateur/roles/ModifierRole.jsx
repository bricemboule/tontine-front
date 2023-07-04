import "admin-lte/plugins/jquery/jquery"
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle"
import "admin-lte/dist/js/adminlte"
import "/public/css/home.css"

import {useEffect, useContext} from "react"
import { Link } from "react-router-dom"
import RoleContext from "../../Context/RoleContext"



export default function ModifierRole(){

    const {roles, getRoles, SupprimerRole} = useContext(RoleContext);

    useEffect(()=>{
        getRoles();
    },[]);


    return (
        
        <div>
        <div className="content-wrapper">
            <div className="content">
                <div className="container-fluid">
                <br />
                <br />
                    <div className="row pl-2 pr-2">
                    
                        <div className="card-header bg-gradient-primary d-flex align-items-center">
                            <h3 className="card-title flex-grow-1 text-white pb-3"><i className="fas fa-users fa-2x"></i> Liste des roles</h3>

                            <div className="card-tools d-flex align-items-center ">
                                <Link to={'/admin/roles/ajouter'} className="btn  text-white mr-4 d-block" ><i className="fas fa-user-plus"></i> Nouveau Role</Link>
                                <div className="input-group input-group-md" style={{width: "250px"}}>
                                    <input type="text" name="table_search" className="form-control float-right" placeholder="Search"/>

                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-default"><i className="fas fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                            <div className="card-body table-responsive p-0 table-striped" style={{height: "300px"}}>
                                <table className="table table-head-fixed">
                                <thead>
                                    <tr>
                                    <th style={{width:"5%"}}></th>
                                    <th style={{width:"15%"}}>Poste</th>
                                    <th style={{width:"25%" }}>Description</th>
                                    <th style={{width:"15%" }}>Créé le</th>
                                    <th style={{width:"15%" }}>Modifié le</th>
                                    
                                    <th style={{width:"25%"}} className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {roles.map((role)=>{
                                        
                                      return(
                                        <tr key ={role.id}>
                                        <td>{role.id}</td>
                                        <td>{role.nom}</td>
                                            
                                        <td>{role.description}</td>
                                            
                                        <td>{role.crée}</td>
                                            
                                        <td>{role.modifié}</td>
                                            
                                        <td className="text-center">
                                            <button className="btn btn-link" > <Link to={`/admin/roles/${role.id}/afficher`}><i className="far fa-eye text-yellow"></i></Link> </button>
                                            <button className="btn btn-link" ><Link to={`/admin/roles/${role.id}/modifier`}> <i className="far fa-edit text-green"></i></Link> </button>
                                            <button className="btn btn-link " onClick={()=>SupprimerRole(role.id)}> <i className="far fa-trash-alt text-red"></i></button>
                                        </td>
                                    </tr>
                                      )
                                    })}            
                                </tbody>
                                </table>
                            </div>
                            
                            <div className="card-footer">
                                <div className="float-right">
                                    
                                </div>
                            </div>                      
                    </div>
                   
                </div>

            </div>
        </div>
         </div>
     )
}
