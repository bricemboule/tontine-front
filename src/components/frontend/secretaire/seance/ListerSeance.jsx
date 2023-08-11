import { Link } from "react-router-dom"
import {useEffect,useContext} from "react"
import RoleContext from "../../Context/RoleContext"

export default function ListerSeance(){

   const {getSeances, seances,SupprimerSeance} = useContext(RoleContext);

   useEffect(()=>{
        getSeances();
   }, [])
 
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
                        <Link to='/secretaire/seance/ajouter' className="text-decoration-none text-white">
                            <i className="fa fa-plus pt-1"></i>
                            <span className="pl-2"> Ajouter une séance </span>
                        </Link>
                    </button> 
                    <button type="button" className="btn btn-danger" >
                        <i className="fa fa-trash pt-1"></i>
                        <span className="pl-2">Supprimer une séance</span>
                    </button>
                            
                        </div> 
                    </div>
                    
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
                        <th scope="col" className="text-center width-20 p-3" style={{width:"450px"}}>Type de séance</th>
                        <th scope="col" className="text-center p-3" style={{width:"400px"}}>Date séance</th>
                        <th scope="col" className="text-center p-3" style={{width:"10px"}}>Lieu</th>
                        <th scope="col" className="text-center p-3" style={{width:"500px"}}>Depense Boisson</th>
                        <th scope="col" className="text-center p-3" style={{width:"600px"}}>Rapport de la séance</th>
                        <th scope="col" className="text-center p-3" style={{width:"600px"}}>Actions</th>
                        </tr>
                </thead>
                <tbody>
                    {seances.map((seance)=> {
                        return(
                            <tr key={seance.id} style={{height:"20%"}}>
                            <th scope="row" className="p-3">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                </div>
                            </th>
                            <td className="text-center p-3">{seance.id}</td>
                            <td className="text-center p-3">{seance.typeSeance}</td>
                            <td className="text-center p-3">{seance.dateSeance}</td>
                            <td className="text-center p-3">{seance.lieu}</td>             
                            <td className="text-center p-3">{seance.depenseBoisson}</td>
                            <td className="text-center p-3">{seance.rapportReunion}</td>
                            <td className="text-center p-3">
                            
                                <button className="btn btn-link btn-floating" ><Link to={`/secretaire/seance/${seance.id}/modifier`}> <i className="far fa-edit text-green"></i></Link> </button>
                                <button className="btn btn-link btn-floating" onClick={()=>SupprimerSeance(seance.id)}> <i className="far fa-trash-alt text-red"></i></button>
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
