import { Link } from "react-router-dom"
import {useEffect,useContext} from "react"
import RoleContext from "../../Context/RoleContext"

export default function ListerAmende(){

   const {getAmendes, amendes,supprimerAmende} = useContext(RoleContext);

   useEffect(()=>{
        getAmendes();
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
                        <Link to='/secretaire/suspension/suspendre' className="text-decoration-none text-white">
                            <i className="fa fa-plus pt-1"></i>
                            <span className="pl-2"> Ajouter une amende </span>
                        </Link>
                    </button> 
                    <button type="button" className="btn btn-danger" >
                        <i className="fa fa-trash pt-1"></i>
                        <span className="pl-2">Supprimer une amende</span>
                    </button>
                            
                        </div> 
                    </div>
                    
                    <div className="d-flex pl-2 pt-3 mt-4 bg-gray-light">
                        <h3>Gestion des amendes</h3>
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
                        <th scope="col" className="text-center p-3" style={{width:"400px"}}>Montant</th>
                        <th scope="col" className="text-center p-3" style={{width:"400px"}}>Date amende</th>
                        <th scope="col" className="text-center p-3" style={{width:"400px"}}>Type Amende</th>              
                        <th scope="col" className="text-center p-3" style={{width:"400px"}}>Actions</th>
                        </tr>
                </thead>
                <tbody>
                    {amendes.map((amende)=> {
                        return(
                            <tr key={amende.id} style={{height:"20%"}}>
                            <th scope="row" className="p-3">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                </div>
                            </th>
                            <td className="text-center p-3">{amende.id}</td>
                            <td className="text-center p-3">{amende.user.nom}</td>
                            <td className="text-center p-3">{amende.montant}</td>
                            <td className="text-center p-3">{amende.dateSanction}</td>             
                            <td className="text-center p-3">{amende.amende.intitule}</td>
                           
                            
                            <td className="text-center p-3">
                            
                                <button className="btn btn-link btn-floating" ><Link to={`/censeur/amende/${amende.id}/modifier`}> <i className="far fa-edit text-green"></i></Link> </button>
                                <button className="btn btn-link btn-floating" onClick={()=>supprimerAmende(amende.id)}> <i className="far fa-trash-alt text-red"></i></button>
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
