import {useEffect, useContext} from "react";
import RoleContext from "../../Context/RoleContext";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



export default function Lister(){

    const {users, getUsers,setUsers} = useContext(RoleContext);

  


    useEffect(()=>{
        getUsers();
    },[]);

      

    return (
      
        
        <div>
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
                            <button type="button" className="btn btn-danger d-flex disabled btn-lg w-10">
                                <i className="fa fa-trash pt-1"></i>
                                <span className="pl-2">Supprimer utilisateur</span>
                               
                            </button>
                            
                        </div> 
                    </div>

                    <div className="d-flex pl-2 pt-3 mt-4 bg-gray-light">
                            <h3>Gestion des utilisateur</h3>
                        
                            <span className="p-input-icon-left ml-auto mr-3 ">
                                <i className="fa fa-search"></i>
                                <input type="text" className="form-control pl-5 input-lg" placeholder="Recherhcer..."/>
                            </span>
                           
                    </div>

                    <div className="p-2 bg-gray-light">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Poste occupé</th>
                                    <th scope="col">Téléphone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Date début</th>
                                    <th scope="col">Date Fin</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
            </div>

      
                </div>
                   
                </div>

            </div>
        </div>
         </div>
     )
}
