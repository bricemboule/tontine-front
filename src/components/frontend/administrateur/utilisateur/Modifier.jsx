import { Link } from "react-router-dom";
import RoleContext from "../../Context/RoleContext"
import { useContext, useEffect } from "react"

export default function Modifier(){

    const {getUsers, users, SupprimerUser} = useContext(RoleContext);

   useEffect(()=>{
        getUsers();
   }, [])
 
    return (
        
        <div>
        <div className="content-wrapper">
            <div className="content">
                <div className="container-fluid">
                <br />
                <br />
                    <div className="row pl-2 pr-2">
                    
                        <div className="card-header bg-gradient-primary d-flex align-items-center">
                            <h3 className="card-title flex-grow-1 text-white pb-3"><i className="fas fa-users fa-2x"></i> Liste des Membres</h3>

                            <div className="card-tools d-flex align-items-center ">
                                <Link to={'/admin/utilisateur/ajouter'} className="btn  text-white mr-4 d-block" ><i className="fas fa-user-plus"></i> Nouveau Membre</Link>
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
                                    <th style={{width:"15%"}}>Membre</th>
                                    <th style={{width:"15%" }}>Poste occupé</th>
                                    <th style={{width:"15%" }}>Date Entrée</th>
                                    <th style={{width:"10%" }}>Téléphone</th>
                                    <th style={{width:"15%"}} className="text-center">Email</th>
                                    <th style={{width:"25%"}} className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                
                                    {users.map((user)=>{

                                        return(
                                            <tr key={user.id}>
                                                <td> </td>
                                                <td>{user.nom} {user.prenom}</td>
                                                <td>{user.role[0].nom}</td>
                                                <td>{user.anneeEntree}</td>
                                                <td>{user.telephone1}</td>
                                                <td className="text-center">{user.email}</td>
                                                <td className="text-center">
                                                    <button className="btn btn-link" > <Link to={`/admin/users/${user.id}/afficher`}><i className="far fa-eye text-yellow"></i></Link> </button>
                                                    <button className="btn btn-link" ><Link to={`/admin/users/${user.id}/modifier`}> <i className="far fa-edit text-green"></i></Link> </button>
                                                    <button className="btn btn-link " onClick={()=>SupprimerUser(user.id)}> <i className="far fa-trash-alt text-red"></i></button>
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