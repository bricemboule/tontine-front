import {useContext, useEffect} from 'react'
import Swal from 'sweetalert2';
import RoleContext from '../../Context/RoleContext';
import { useParams} from 'react-router-dom';



export default function ModifierRole(){

    let {id} = useParams();
    console.log(id);

    const {roleValues,handleChange1,getRole, modifierRole} = useContext(RoleContext);
    useEffect(() =>{
        getRole(id);
    },[]);
    console.log("Bonjour");
    console.log(id);

    return (
        <div className="content-wrapper">
        <div className="content">
            <div className="container-fluid">
                <br />
                <h1>Roles et Permissions</h1>
                <br/>
                <div className="row">
                    <div className = "col-md-6">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Roles</h3>
                            </div>

                            <form onSubmit={modifierRole}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label >Nom</label>
                                        <input name='nom' onChange={handleChange1} value={roleValues["nom"]} type="text" className="form-control" placeholder="Veuillez entrer un poste de responsabilité" />
                                        
                                    </div>
                                    <div className="form-group">
                                        <label >Description</label>
                                        <input name='description' onChange={handleChange1} value={roleValues["description"]} type="text" className="form-control"  placeholder="la description ici..."/>
                                        
                                    </div>
                                
                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary col-10 ml-4">Créer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className = "col-md-6">
                        <div className="card card-success">
                            <div className="card-header">
                                <h3 className="card-title">Permissions</h3>
                            </div>

                            <form onSubmit={''}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label >Nom</label>
                                        <input name='libelle' onChange={''} value={''} type="text" className="form-control"  placeholder="Veuillez entrer une permission"/>
                                    </div>
                                    <div className="form-group">
                                        <label >Description</label>
                                        <input name='description' onChange={''} value={''} type="text" className="form-control" placeholder="la description ici..."/>
                                    </div>
                                
                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary col-10 ml-4">Modifier</button>
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