import { Link } from "react-router-dom"
import {useEffect,useContext} from "react"
import RoleContext from "../../Context/RoleContext"

export default function ListerCotisation(){

   const {getCotisations, cotisations,supprimerCotisation} = useContext(RoleContext);

   useEffect(()=>{
        getCotisations();
   }, [])

   console.log(cotisations);
 
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
                        <Link to='/tresorier/cotisation/ajouter' className="text-decoration-none text-white">
                            <i className="fa fa-plus pt-1"></i>
                            <span className="pl-2"> Ajouter une cotisation </span>
                        </Link>
                    </button> 
                    <button type="button" className="btn btn-danger" >
                        <i className="fa fa-trash pt-1"></i>
                        <span className="pl-2">Supprimer une cotisation</span>
                    </button>
                            
                        </div> 
                    </div>
                    
                    <div className="d-flex pl-2 pt-3 mt-4 bg-gray-light">
                        <h3>Liste de cotisations</h3>
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
                        <th scope="col" className="text-center width-20 p-3" style={{width:"20px"}}>Montant</th>
                        <th scope="col" className="text-center p-3" style={{width:"300px"}}>Tontine</th>
                        <th scope="col" className="text-center p-3" style={{width:"30px"}}>Membre</th>
                        <th scope="col" className="text-center p-3" style={{width:"300px"}}>Séance</th>
                        <th scope="col" className="text-center p-3" style={{width:"600px"}}>Mode Paiement</th>
                        <th scope="col" className="text-center p-3" style={{width:"600px"}}>Coupon Versement</th>
                        <th scope="col" className="text-center p-3" style={{width:"250px"}}>Actions</th>
                        </tr>
                </thead>
                <tbody>
                    {cotisations.map((cotisation)=> {
                        return(
                            <tr key={cotisation.id} style={{height:"20%"}}>
                            <th scope="row" className="p-3">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                </div>
                            </th>
                            <td className="text-center p-3">{cotisation.id}</td>
                            <td className="text-center p-3">{cotisation.montant}</td>
                            <td className="text-center p-3">{cotisation.tontine.nom}</td>
                            <td className="text-center p-3">{cotisation.user.nom}</td>             
                            <td className="text-center p-3">{cotisation.seance.dateSeance}</td>
                            <td className="text-center p-3">{cotisation.modeVersement}</td>
                            <td className="text-center p-3">{cotisation.couponVersement}</td>
                            
                            <td className="text-center p-3">
                            
                                <button className="btn btn-link btn-floating" ><Link to={`/tresorier/cotisation/${cotisation.id}/modifier`}> <i className="far fa-edit text-green"></i></Link> </button>
                                <button className="btn btn-link btn-floating" onClick={()=>supprimerCotisation(cotisiation.id)}> <i className="far fa-trash-alt text-red"></i></button>
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
