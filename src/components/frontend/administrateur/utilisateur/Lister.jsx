import {useEffect, useContext, useState} from "react";
import RoleContext from "../../Context/RoleContext";
import {Form,Row,Col,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";



export default function Lister(){

    const {roles, getRoles,users,getUser,disabled,value, value1, setValue, setValue1, getUsers,changeDisable,userInput,SupprimerUser,modifierUser,SaveUser, handleInput} = useContext(RoleContext);
    
 


    useEffect(()=>{
        getUsers();
        getRoles();
    },[]);

  
  

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
                        <Link to='/admin/utilisateur/ajouter' className="text-decoration-none text-white">
                            <i className="fa fa-plus pt-1"></i>
                            <span className="pl-2"> Nouvel utilisateur </span>
                        </Link>
                    </button> 
                    <button type="button" className="btn btn-danger" disabled = {disabled}>
                        <i className="fa fa-trash pt-1"></i>
                        <span className="pl-2">Supprimer Membre</span>
                    </button>
                            
                        </div> 
                    </div>
                    
                    <div className="d-flex pl-2 pt-3 mt-4 bg-gray-light">
                        <h3>Gestion des utilisateur</h3>
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
                        <th scope="col" className="text-center width-20 p-3" style={{width:"400px"}}>Nom</th>
                        <th scope="col" className="text-center p-3" style={{width:"900px"}}>Poste</th>
                        <th scope="col" className="text-center p-3" style={{width:"150px"}}>Téléphone</th>
                       
                        <th scope="col" className="text-center p-3" style={{width:"800px"}}>Début</th>
                        <th scope="col" className="text-center p-3" style={{width:"900px"}}>Fin</th>
                       
                        <th scope="col" className="text-center p-3" style={{width:"500px"}}>Actions</th>
                        </tr>
                </thead>
                <tbody>
                   
                    {users.map((user)=> {
                    
                        return(
                            <tr key={user.id} style={{height:"20%"}}>
                            <th scope="row" className="p-3">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={()=>changeDisable()}/>
                                </div>
                            </th>
                            <td className="text-center p-3">{user.id}</td>
                            <td className="text-center p-3">{user.nom} {user.prenom}</td>
                            <td className="text-center p-3">{user.role[0].nom}</td>
                            <td className="text-center p-3">{user.telephone1}</td>
                          
                            <td className="text-center p-3">{user.role[0].pivot.dateDebut}</td>
                            <td className="text-center p-3">{user.role[0].pivot.dateFinPrevue}</td>
                           
                            <td className="text-center p-3">
                            
                                <button className="btn btn-link btn-floating" ><Link to={`/admin/utilisateur/${user.id}/modifier`}> <i className="far fa-edit text-green"></i></Link> </button>
                                <button className="btn btn-link btn-floating" onClick={()=>SupprimerUser(user.id)}> <i className="far fa-trash-alt text-red"></i></button>
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

            <div className="modal fade" id="EditUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog" role="document" style={{width: "2000px"}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-red" id="exampleModalLabel" >Modifer un membre du bureau</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Form onSubmit={modifierUser}>
                                 <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridNom">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Nom du membre  </Form.Label>
                                        <Form.Control type="text" placeholder="nom membre" name='nom' onChange={handleInput}  value={userInput.nom}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPrenom">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Prenom du membre  </Form.Label>
                                        <Form.Control type="text" placeholder="prénom membre" name='prenom'  onChange={handleInput} value={userInput.prenom}/>
                                    </Form.Group>
                                 </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridNaissance">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date de naissance  </Form.Label>
                                        <Form.Control type="date"  name='anneeNais' value={userInput.anneeNais}  onChange={handleInput}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEntre">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date entrée </Form.Label>
                                        <Form.Control type="date"  name='anneeEntree' value={userInput.anneeEntree} onChange={handleInput}/>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                
                                    <Form.Group as={Col} controlId="formGridSexe">
                                        <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre sexe <span className='etoile'>*</span>   </Form.Label>
                                        <Form.Select aria-label="Default select example" value={userInput.sexe}  name='sexe'  onChange={handleInput}>
                                            <option value=""></option>
                                            <option value="M">Masculin</option>
                                            <option value="F">Feminin</option>
                                        </Form.Select>
                                    </Form.Group>

                                        {
                                            (userInput.sexe === 'M') ?   (
                                                <>
                                                <Form.Group as={Col} controlId="formGridNomEpoux">
                                                    <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Nom Epouse <span className='etoile'>*</span>  </Form.Label>
                                                    <Form.Control type="text" placeholder="Nom époux ou épouse" value={userInput.nomEpoux}  name='nomEpoux' onChange={handleInput}/>
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridNbFemme">
                                                    <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Nbre de Femme <span className='etoile'>*</span>  </Form.Label>
                                                    <Form.Control type="number" placeholder="Nombre de femme" defaultValue={0} name='nbDeFemme' value={userInput.nbDeFemme}  onChange={handleInput}/>
                                                </Form.Group>
                                                </>
                                                ) :  (
                                                    <Form.Group as={Col} controlId="formGridNomEpoux" >
                                                        <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}} >Nom de votre Epoux<span className='etoile'>*</span>  </Form.Label>
                                                        <Form.Control type="text" placeholder="Nom époux ou épouse" value={userInput.nomEpoux}  name='nomEpoux' onChange={handleInput} />
                                                    </Form.Group>
                                                )

                                        }
                                            
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridTelephone1">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}> Telephone 1</Form.Label>
                                        <Form.Control type="text" placeholder="votre téléphone" name='telephone1' onChange={handleInput}  value={userInput.telephone1}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridTelephone2">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}> Telephone 2  </Form.Label>
                                        <Form.Control type="text" placeholder="votre téléphone" name='telephone2' onChange={handleInput}  value={userInput.telephone2}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridResposabilite">
                                        <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Responsabilité <span className='etoile'>*</span>   </Form.Label>
                                        <Form.Select aria-label="Default select example" value={userInput.role}  name='role' onChange={handleInput}>
                                            <option value=""></option>
                                            {roles.map((role)=>{

                                                return (
                                                    <option key={role.id} value={role.nom}>{role.nom}</option>
                                                    )
                                            })}
                                        </Form.Select>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridDateDebut">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date début  <span className='etoile'>*</span> </Form.Label>
                                        <Form.Control type="date"  name='dateDebut' value={userInput.dateDebut} onChange={handleInput}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridDateFinPrevu">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date fin prévue <span className='etoile'>*</span> </Form.Label>
                                        <Form.Control type="date"  name='dateFinPrevu' value={userInput.dateFinPrevue} onChange={handleInput}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridDateFinEffectuve">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date fin effective   </Form.Label>
                                        <Form.Control type="date"   name='dateFinEffective' value={userInput.dateFinEffective} onChange={handleInput}/>
                                    </Form.Group>

                                    <Form.Group as={Col} className="mb-3" controlId="formGridPhoto">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Photo  </Form.Label>
                                        <Form.Control type='file' name='photo' onChange={handleInput}/>
                                    </Form.Group>
                                </Row>   
                                    
                                <Button variant="primary" type="submit" className='btn btn-block col-11 ml-4'>
                                    Modifier
                                </Button>
                                <br/>
                            </Form>
                        </div>
                              
                    </div>
                </div>
            </div>

        </div>
         
     )
}
