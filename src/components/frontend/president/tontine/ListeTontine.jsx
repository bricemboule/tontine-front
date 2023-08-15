import "admin-lte/plugins/jquery/jquery"
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle"
import { Link } from "react-router-dom"
import {useEffect,useContext} from "react"
import RoleContext from "../../Context/RoleContext"

export default function ListeTontine(){

   const {getTontines, tontines,SupprimerTontine} = useContext(RoleContext);

   useEffect(()=>{
        getTontines();
   }, [])
 
    return (
        
        <div className="content-wrapper">
            <div className="content">
                <div className="container-fluid">
                
                <div className="table-wrapper">
               
                <br/>
                
            <div className="card">

           
                    
                    <div className="d-flex pl-2 pt-3 mt-4 bg-gray-light">
                        <h3>Gestion des tontines</h3>
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
                        <th scope="col" className="text-center width-20 p-3" style={{width:"500px"}}>Intitulé</th>
                        <th scope="col" className="text-center p-3" style={{width:"900px"}}>Nombre de Participant</th>
                        <th scope="col" className="text-center p-3" style={{width:"400px"}}>Date début</th>
                        <th scope="col" className="text-center p-3" style={{width:"400px"}}>Date Fin</th>
                        <th scope="col" className="text-center p-3" style={{width:"600px"}}>Observations</th>
                        
                        </tr>
                </thead>
                <tbody>
                    {tontines.map((tontine)=> {
                        return(
                            <tr key={tontine.id} style={{height:"20%"}}>
                            <th scope="row" className="p-3">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                </div>
                            </th>
                            <td className="text-center p-3">{tontine.id}</td>
                            <td className="text-center p-3">{tontine.nom}</td>
                            <td className="text-center p-3">{tontine.nbDeParticipants}</td>
                            <td className="text-center p-3">{tontine.dateDebut}</td>             
                            <td className="text-center p-3">{tontine.dateFin}</td>
                            <td className="text-center p-3">{tontine.observation}</td>
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
