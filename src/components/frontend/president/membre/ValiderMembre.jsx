import { Link } from "react-router-dom"
import {useEffect,useContext} from "react"
import RoleContext from "../../Context/RoleContext"
import { useParams } from "react-router-dom";



export default function ValiderMembre(){

   const {getUsers, users, ValiderMembre} = useContext(RoleContext);
   let {id} = useParams();

   useEffect(()=>{
        getUsers();
   }, [])
 
   console.log(users);
    return (
        
        <div className="content-wrapper">
            <div className="content">
                <div className="container-fluid">
                
                <div className="table-wrapper">
               
                <br/>
                
            <div className="card">

           
                    
                    <div className="d-flex pl-2 pt-3 mt-4 bg-gray-light">
                        <h3 className="pl-3">Gestion des utilisateur</h3>
                        <div className="p-input-icon-left ml-auto mr-3">
                            <i className="fa fa-search"></i>
                            <input type="text" className="form-control pl-5 py-4 input-lg" placeholder="Rechercher..."/>
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
                        <th scope="col" className="text-center width-20 p-3" style={{width:"10px"}}></th>
                        <th scope="col" className="text-center width-20 p-3" style={{width:"100px"}}>Nom</th>
                        <th scope="col" className="text-center p-3" style={{width:"250px"}}>Date Entrée</th>
                        <th scope="col" className="text-center p-3" style={{width:"50px"}}>Poste</th>
                        <th scope="col" className="text-center p-3" style={{width:"5px"}}>Téléphone</th>
                        <th scope="col" className="text-center p-3" style={{width:"5px"}}>Email</th>
                        <th scope="col" className="text-center p-3" style={{width:"400px"}}>Statut</th>
                       
                        <th scope="col" className="text-center p-3" style={{width:"390px"}}>Actions</th>
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
                            <td className="text-center p-3"></td>
                            <td className="text-center p-3">{user.nom} {user.prenom}</td>
                          
                           
                            <td className="text-center p-3">{user.anneeEntree}</td>
                          
                            <td className="text-center p-3">{user.role[0].nom}</td>
                            <td className="text-center p-3">{user.telephone1}</td>
                            <td className="text-center p-3">{user.email}</td>
                           {
                                (user.valide === 1) ? (
                                    <td className="text-center p-3"> <div className="bg-success rounded-pill p-1"> valider</div> </td>
                                ) : (
                                    <td className="text-center p-3"> <div className="bg-danger rounded-pill p-1"> non valider</div> </td>
                                )
                           }
                            <td className="text-center p-3">
                                <button className="btn btn-link btn-floating" onClick={()=>ValiderMembre(user.id)}> <i className="far fa-trash-alt text-red"></i></button>
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
