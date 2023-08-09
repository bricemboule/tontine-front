import {useContext} from 'react'

import RoleContext from '../../Context/RoleContext';



export default function AjouterRole(){
    
    const {roleValues, handleChange1, SaveRole} = useContext(RoleContext);
    console.log(roleValues);


    return (

        <div className="content-wrapper">
        <div className="content">
            <div className="container-fluid">
                <br />
                <h1>Roles</h1>
                <br/>
                <div className="row">
                    <div className = "col">
                        <div className="card">
                            

                            <form onSubmit={SaveRole}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label >Nom : </label>
                                        <input name='nom' onChange={handleChange1}  type="text" className="form-control"  placeholder="Le poste de responsabilité..."/>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label >Description : </label>
                                        <textarea name='description' onChange={handleChange1}  type="text" className="form-control"  placeholder="la description ici..."> </textarea>
                                        
                                    </div>
                                
                                </div>

                                <div className="card-footer justify-content-center w-100">
                                    <button type="submit" className="btn btn-success" style={{width:"100%"}}>Créer</button>
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