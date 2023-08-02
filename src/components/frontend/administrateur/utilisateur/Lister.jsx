import {useEffect, useContext} from "react";
import RoleContext from "../../Context/RoleContext";
import React, { useState} from 'react';
import { Link } from "react-router-dom";


export default function Lister(){

    const {users, getUsers,setUsers,SupprimerUser} = useContext(RoleContext);
    const [click, setClick] = useState();
    const [disabled, setDisabled] = useState(true);

 


    useEffect(()=>{
        getUsers();
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
                            <button type="button" className="btn btn-success d-flex btn-lg w-10">
                                <i className="fa fa-plus pt-1"></i>
                                <span className="pl-2 ">Nouvel utilisateur</span>
                            </button>
                            <button type="button" className="btn btn-danger d-flex  btn-lg w-10" disabled>
                                <i className="fa fa-trash pt-1"></i>
                                <span className="pl-2">Supprimer utilisateur</span>
                               
                            </button>
                            
                        </div> 
                    </div>

                    <div className="d-flex pl-2 pt-3 mt-4 bg-gray-light">
                            <h3>Gestion des utilisateur</h3>
                        
                            <div className="p-input-icon-left ml-auto mr-3 h-25">
                                <i className="fa fa-search"></i>
                                <input type="text" className="form-control pl-5 input-lg" placeholder="Recherhcer..."/>
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
                        <th scope="col" className="text-center width-20 p-3" style={{width:"300px"}}>Nom</th>
                        <th scope="col" className="text-center p-3" style={{width:"900px"}}>Poste</th>
                        <th scope="col" className="text-center p-3" style={{width:"150px"}}>Téléphone</th>
                       
                        <th scope="col" className="text-center p-3" style={{width:"800px"}}>Début</th>
                        <th scope="col" className="text-center p-3" style={{width:"900px"}}>Fin</th>
                       
                        <th scope="col" className="text-center p-3" style={{width:"500px"}}>Actions</th>
                        </tr>
                </thead>
                <tbody>
                   
                    {users.map((user)=> {
                    
                        return(
                            <tr key={user.id} style={{height:"20%"}}>
                            <th scope="row" className="p-3">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                </div>
                            </th>
                            <td className="text-center p-3">{user.nom} {user.prenom}</td>
                            <td className="text-center p-3">{user.role[0].nom}</td>
                            <td className="text-center p-3">{user.telephone1}</td>
                          
                            <td className="text-center p-3">{user.role[0].pivot.dateDebut}</td>
                            <td className="text-center p-3">{user.role[0].pivot.dateFinPrevue}</td>
                           
                            <td className="text-center p-3">
                                <button className="btn btn-link btn-floating" ><Link to={`/admin/utilisateur/${user.id}/modifier`}> <i className="far fa-edit text-green"></i></Link> </button>
                                <button className="btn btn-link btn-floating" onClick={()=>SupprimerUser(user.id)}> <i className="far fa-trash-alt text-red"></i></button>
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
