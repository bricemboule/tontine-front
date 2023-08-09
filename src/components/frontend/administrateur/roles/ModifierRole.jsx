import {useEffect, useContext} from "react";
import RoleContext from "../../Context/RoleContext";
import { useParams } from "react-router-dom";



export default function ModifierRole(){
    const {getRole, modifierRole,handleChange1,roleValues} = useContext(RoleContext);
    let {id} = useParams();

    useEffect(()=>{
        getRole(id);
    },[]);


    return (

        <div className="content-wrapper">
        <div className="content">
            <div className="container-fluid">
                <br />
                <h1>Modification d'un role</h1>
                <br/>
                <div className="row">
                    <div className = "col">
                        <div className="card">
                            

                            <form onSubmit={modifierRole}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label >Nom</label>
                                        <input name='nom' onChange={handleChange1} value={roleValues['nom']} type="text" className="form-control" placeholder="Veuillez entrer un poste de responsabilité" />
                                        
                                    </div>
                                    <div className="form-group">
                                        <label >Description</label>
                                        <input name='description' onChange={handleChange1} value={roleValues['description']} type="text" className="form-control"  placeholder="la description ici..."/>
                                        
                                    </div>
                                
                                </div>

                                <div className="card-footer ">
                                    <button type="submit" className="btn btn-success ml-5 col-10 p-2">Modifier</button>
                                </div>
                            </form>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        </div>
    )
}
