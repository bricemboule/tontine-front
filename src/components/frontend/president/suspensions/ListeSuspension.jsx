import { Link } from "react-router-dom"
import {useEffect,useContext} from "react"
import RoleContext from "../../Context/RoleContext"

export default function ListeSuspension(){

   const {getSuspensions, suspensions,supprimerSuspension} = useContext(RoleContext);

   useEffect(()=>{
        getSuspensions();
   }, [])

   console.log(suspensions);
 
    return (
        
        <div className="content-wrapper">
            <div className="content">
                <div className="container-fluid">
                
                <div className="table-wrapper">
               
                <br/>
                
            <div className="card">

            
                    <div className="d-flex pl-2 pt-3 mt-4 bg-gray-light">
                        <h3>Gestion des séances</h3>
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
                        <th scope="col" className="text-center width-20 p-3" style={{width:"100px"}}></th>
                        <th scope="col" className="text-center width-20 p-3" style={{width:"400px"}}>Membre</th>
                        <th scope="col" className="text-center p-3" style={{width:"400px"}}>Motif</th>
                        <th scope="col" className="text-center p-3" style={{width:"400px"}}>Période</th>
                        <th scope="col" className="text-center p-3" style={{width:"400px"}}>Séance</th>
                        <th scope="col" className="text-center p-3" style={{width:"400px"}}>Statut</th>
                        
                        </tr>
                </thead>
                <tbody>
                    {suspensions.map((suspension)=> {
                        return(
                            <tr key={suspension.id} style={{height:"20%"}}>
                            <th scope="row" className="p-3">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                </div>
                            </th>
                            <td className="text-center p-3">{suspension.id}</td>
                            <td className="text-center p-3">{suspension.membre.nom}</td>
                            <td className="text-center p-3">{suspension.motif}</td>
                            <td className="text-center p-3">{suspension.periode}</td>             
                            <td className="text-center p-3">{suspension.seance.dateSeance}</td>
                            {
                                (suspension.status === 1) ? (
                                   
                                    <td className="text-center p-3"> <div className="bg-danger rounded-pill p-1"> Suspendu</div> </td>
                                ) : (
                                    <td className="text-center p-3"> <div className="bg-warning rounded-pill p-1"> en cours</div> </td>
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
