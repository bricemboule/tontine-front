import {useEffect, useContext,useState} from "react";
import RoleContext from "../../Context/RoleContext";
import { useParams } from "react-router-dom";


export default function ListerRole(){

    const {roles, getRoles,SupprimerRole,SaveRole,handleChange1,close, modifierRole,roleValues,getRole} = useContext(RoleContext);
 
   let {id} =useParams()
    useEffect(()=>{
        getRoles();
        
    },[]);



    return (
      
        
        
        <div className="content-wrapper">
            <div className="content">
                <div className="container-fluid">
                
                <div className="table-wrapper">
               
                <br/>
                
            <div className="card">

            <div className="d-flex space-between p-3 bg-gray-light">
                        <div className="d-flex flex-wrap gap-2">

                        <button type="button" className="btn btn-success"  style={{padding:"10px"}} data-toggle="modal" data-target="#NewRole" data-whatever="@getbootstrap">
                                <i className="fa fa-plus pt-1"></i>
                                <span className="pl-2"> Nouveau role</span>
                        </button>

                            <div className="modal fade" id="NewRole" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-red" id="exampleModalLabel" >Nouveau Role</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={SaveRole}>
                                    <div className="form-group">
                                        <label for="recipient-name" className="col-form-label">Nom :</label>
                                        <input type="text" name="nom" className="form-control" id="recipient-name" onChange={handleChange1}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="message-text" className="col-form-label">Description :</label>
                                        <textarea className="form-control" name="description" id="message-text" onChange={handleChange1}></textarea>
                                    </div>
                                    <div className="modal-footer justify-content-center px-0 mx-0">
                                        <button type="submit" className="btn btn-primary w-100" >Enregistrer</button>
                                    </div>
                                    </form>
                                </div>
                              
                                </div>
                            </div>
                            </div>
                            <button type="button" className="btn btn-danger" disabled>
                                <i className="fa fa-trash pt-1"></i>
                                <span className="pl-2">Supprimer role</span>
                
                            </button>
                          
                            
                        </div> 
                    </div>

                    <div className="d-flex pl-2 pt-3 mt-4 bg-gray-light">
                            <h3>Gestion des roles</h3>
                        
                            <div className="p-input-icon-left ml-auto mr-3">
                                <i className="fa fa-search"></i>
                                <input type="text" className="form-control pl-5 py-4 input-lg" placeholder="Rechercher..."/>
                            </div>
                           
                    </div>

                    <div className="modal fade" id="EditRole" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-red" id="exampleModalLabel" >Modifer un Role</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={modifierRole}>
                                    <div className="form-group">
                                        <label for="recipient-name" className="col-form-label">Nom :</label>
                                        <input type="text" name="nom" className="form-control" id="recipient-name" onChange={handleChange1} value={roleValues['nom']}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="message-text" className="col-form-label">Description :</label>
                                        <textarea className="form-control" name="description" id="message-text" onChange={handleChange1} value={roleValues['description']}></textarea>
                                    </div>
                                    <div className="modal-footer justify-content-center px-0 mx-0">
                                        <button type="submit" className="btn btn-primary w-100">Modifier</button>
                                        {/* <button type="submit" className="btn btn-primary w-100" data-dismiss="EditRole">Modifier</button> */}
                                    </div>
                                    </form>
                                </div>
                              
                                </div>
                            </div>
                    </div>
            
            <div className="table-responsive p-2 bg-gray-light">
            <table id="paginationNumbers" className= "table"   width="100%">
                <thead >
                        <tr style={{height:"20%", backgroundColor:"gray"}} className="bg-gray">
                        <th scope="col" className="p-3">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>
                        </th>
                        <th scope="col" className="text-center width-20 p-3"></th>
                        <th scope="col" className="text-center p-3" style={{width:"300px"}}>Poste</th>
                        <th scope="col" className="text-center p-3" style={{width:"800px"}}>Description</th>
                       
                        <th scope="col" className="text-center p-3" style={{width:"200px"}}>Actions</th>
                       
                        </tr>
                </thead>
                <tbody>
                   
                    {roles.map((role)=> {
                        
                        return(
                            <tr key={role.id} style={{height:"20%"}}>
                            <th scope="row" className="p-3">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                </div>
                            </th>
                            <td className="text-center p-3">{role.id}</td>
                            <td className="text-center p-3">{role.nom}</td>
                            <td className="text-center p-3">{role.description}</td>
                
                           
                            <td className="text-center p-3">
                                <button className="btn btn-link btn-floating" data-toggle="modal" data-target="#EditRole" data-whatever="@getbootstrap" onClick={()=>getRole(role.id)}> <i className="far fa-edit text-green"></i> </button>
                                <button className="btn btn-link btn-floating" onClick={()=>SupprimerRole(role.id)}> <i className="far fa-trash-alt text-red"></i></button>
                            </td>
                        </tr>
                        ); }
                    )}
                  
                </tbody>
            </table>
        </div>
               
            </div>

            
                </div>
                   
                </div>

            </div>
        </div>
         
     )
}
