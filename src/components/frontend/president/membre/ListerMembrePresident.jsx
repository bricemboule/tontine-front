import "admin-lte/plugins/jquery/jquery"
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle"
import "admin-lte/dist/js/adminlte"
import "/public/css/home.css"
import { Link } from "react-router-dom"
import {useEffect,useContext} from "react"
import RoleContext from "../../Context/RoleContext"




export default function ListerMembrePresident(){

   const {getUsers, users, SupprimerMembre} = useContext(RoleContext);

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

            <div className="d-flex space-between p-3 bg-gray-light">
                <div className="d-flex flex-wrap gap-2">
                    <button type="button" className="btn btn-success"  style={{padding:"10px"}}>
                        
                            <i className="fa fa-file-excel pt-1"></i>
                            <span className="pl-2"> Exporter en Excel </span>
                       
                    </button> 
                    <button type="button" className="btn btn-danger" >
                        <i className="fa fa-file-pdf pt-1"></i>
                        <span className="pl-2">Exporter en pdf</span>
                    </button>
                            
                        </div> 
                    </div>
                    
                    <div className="d-flex pl-2 pt-3 mt-4 bg-gray-light">
                        <h3 className="pl-3">Liste de membres</h3>
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
                        <th scope="col" className="text-center width-20 p-3" style={{width:"200px"}}>Nom</th>
                        <th scope="col" className="text-center p-3" style={{width:"250px"}}>Date Entrée</th>
                        <th scope="col" className="text-center p-3" style={{width:"50px"}}>Poste</th>
                        <th scope="col" className="text-center p-3" style={{width:"5px"}}>Téléphone</th>
                        <th scope="col" className="text-center p-3" style={{width:"5px"}}>Email</th>
                        <th scope="col" className="text-center p-3" style={{width:"200px"}}>Statut</th>
                       
                     
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
