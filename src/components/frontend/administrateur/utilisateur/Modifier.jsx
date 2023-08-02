import {Form,Row,Col,Button} from 'react-bootstrap'
import PhoneInput from 'react-phone-input-2'
import RoleContext from "../../Context/RoleContext"
import { useContext,useEffect,useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Modifier(){
    const [selected, setSelected] = useState(false);
    const {roles, getRoles,user, setUser,getUser,modifierUser, handleInput} = useContext(RoleContext);

   let {id} = useParams();


    useEffect(()=>{
        getUser(id);
        getRoles();
    },[]);



    return (
      
        
        
        <div className="content-wrapper">
            <div className="content">
                <div className="container-fluid">
                
                <div>
               
                <br/>
                
            <div className="card">

            <div className="d-flex space-between p-3 bg-gray-light">
                 <h1>Modification d'un membre du bureau</h1>
            </div>

                   
            <br/>
            <div className="table-responsive p-2 bg-gray-light">
                <Form onSubmit={modifierUser}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridNom">
                            <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Nom du membre  </Form.Label>
                                <Form.Control type="text" placeholder="nom membre" name='nom' onChange={handleInput}  value={user.nom}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPrenom">
                            <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Prenom du membre  </Form.Label>
                             <Form.Control type="text" placeholder="prénom membre" name='prenom'  onChange={handleInput} value={user.prenom}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridNaissance">
                            <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date de naissance  </Form.Label>
                                <Form.Control type="date"  name='anneeNais' value={user.anneeNais}  onChange={handleInput}/>
                        </Form.Group>

                            <Form.Group as={Col} controlId="formGridEntre">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date entrée </Form.Label>
                                <Form.Control type="date"  name='anneeEntree' value={user.anneeEntree} onChange={handleInput}/>
                            </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      
                        <Form.Group as={Col} controlId="formGridSexe">
                            <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre sexe <span className='etoile'>*</span>   </Form.Label>
                            <Form.Select value={((user.sex==='F') ? "Feminin" : "Masculin")}  name='sexe'  onChange={handleInput}>
                                <option value=""></option>
                                <option value="M">Masculin</option>
                                <option value="F">Feminin</option>
                            </Form.Select>
                        </Form.Group>

                            {
                                (user.sex === 'M') ?   (
                                    <>
                                    <Form.Group as={Col} controlId="formGridNomEpoux">
                                        <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Nom de votre épouse <span className='etoile'>*</span>  </Form.Label>
                                        <Form.Control type="text" placeholder="Nom époux ou épouse" value={user.nomEpoux}  name='nomEpoux' onChange={handleInput}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridNbFemme">
                                        <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Nombre de Femme <span className='etoile'>*</span>  </Form.Label>
                                        <Form.Control type="number" placeholder="Nombre de femme" defaultValue={0} name='nbDeFemme' value={user.nbDeFemme}  onChange={handleInput}/>
                                    </Form.Group>
                                    </>
                                    ) :  (
                                        <Form.Group as={Col} controlId="formGridNomEpoux" >
                                            <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}} >Nom de votre Epoux<span className='etoile'>*</span>  </Form.Label>
                                            <Form.Control type="text" placeholder="Nom époux ou épouse" value={user.nomEpoux}  name='nomEpoux' onChange={handleInput} />
                                        </Form.Group>
                                    )

                            }
                                
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridTelephone1">
                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}> Telephone 1</Form.Label>
                        <Form.Control type="text" placeholder="votre téléphone" name='telephone1' onChange={handleInput}  value={user.telephone1}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridTelephone2">
                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}> Telephone 2  </Form.Label>
                        <Form.Control type="text" placeholder="votre téléphone" name='telephone2' onChange={handleInput}  value={user.telephone2}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridResposabilite">
                        <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Responsabilité <span className='etoile'>*</span>   </Form.Label>
                        <Form.Select aria-label="Default select example" value={user.role[0].nom}  name='role' onChange={handleInput}>
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
                        <Form.Control type="date" value={user.role[0].pivot.dateDebut} name='dateDebut' onChange={handleInput}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDateFinPrevu">
                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date fin prévue <span className='etoile'>*</span> </Form.Label>
                        <Form.Control type="date" value={user.role[0].pivot.dateFinPrevue}  name='dateFinPrevu'  onChange={handleInput}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDateFinEffectuve">
                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date fin effective   </Form.Label>
                        <Form.Control type="date"   name='dateFinEffective' onChange={handleInput}/>
                    </Form.Group>
                </Row>
                    
                <br/>

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
        </div>
         
     )
}
