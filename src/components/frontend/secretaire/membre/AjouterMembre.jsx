import { useEffect } from "react";
import RoleContext from "../../Context/RoleContext"
import { useContext } from "react"

export default function AjouterMembre(){
    const {roles, getRoles, value, value1, setValue, setValue1, SaveUser, handleInput} = useContext(RoleContext); 
    
    useEffect(()=>{

        getRoles();
    }, []);

    return(
        <div>
            <div className="content-wrapper">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                        <h1>Utilisateurs</h1>
                            <Form onSubmit={SaveUser}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridNom">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Nom du membre  </Form.Label>
                                        <Form.Control type="text" placeholder="nom membre" name='nom' onChange={handleInput} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPrenom">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Prenom du membre  </Form.Label>
                                        <Form.Control type="text" placeholder="prénom membre" name='prenom'  onChange={handleInput}/>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridNaissance">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date de naissance  </Form.Label>
                                        <Form.Control type="date"  name='anneeNais'  onChange={handleInput}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEntre">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date d'entrée </Form.Label>
                                        <Form.Control type="date"  name='anneeEntree' onChange={handleInput}/>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridNomEpoux">
                                        <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Nom de l'Epoux/Epouse <span className='etoile'>*</span>  </Form.Label>
                                        <Form.Control type="text" placeholder="Nom époux ou épouse"  name='nomEpoux' onChange={handleInput}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridNbFemme">
                                    <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Nombre de Femme <span className='etoile'>*</span>  </Form.Label>
                                    <Form.Control type="number" placeholder="Nombre de femme" defaultValue={0} name='nbDeFemme' onChange={handleInput}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridSexe">
                                    <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre sexe <span className='etoile'>*</span>   </Form.Label>
                                    <Form.Select aria-label="Default select example"  name='sexe' onChange={handleInput}>
                                            <option value=""></option>
                                            <option value="H">Homme</option>
                                            <option value="F">Femme</option>
                                    </Form.Select>
                                    </Form.Group>
                                
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridTelephone1">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}> Telephone 1</Form.Label>
                                        <PhoneInput country={'cm'} value={value} onChange={setValue} name='telephone1'  className="col-10"/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridTelephone2">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}> Telephone 2  </Form.Label>
                                        <PhoneInput country={'cm'} value={value1} onChange={setValue1} name='telephone2' className="col-10"/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridResposabilite">
                                    <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Responsabilité <span className='etoile'>*</span>   </Form.Label>
                                    <Form.Select aria-label="Default select example"  name='role' onChange={handleInput}>
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
                                        <Form.Control type="date"  name='dateDebut' onChange={handleInput}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridDateFinPrevu">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date fin prévue <span className='etoile'>*</span> </Form.Label>
                                        <Form.Control type="date"  name='dateFinPrevu' onChange={handleInput}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridDateFinEffectuve">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date fin effective   </Form.Label>
                                        <Form.Control type="date"  name='dateFinEffective' onChange={handleInput}/>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridLogin">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Login  </Form.Label>
                                        <Form.Control type="text" placeholder="Entrer login" name='login' onChange={handleInput}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Mot de passe  </Form.Label>
                                        <Form.Control type="password" placeholder="mot de passe" name='password' onChange={handleInput}/>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Adresse mail  </Form.Label>
                                        <Form.Control placeholder="adresse mail" type='email' name='email' onChange={handleInput} />
                                    </Form.Group>

                                    <Form.Group as={Col} className="mb-3" controlId="formGridPhoto">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Photo  </Form.Label>
                                        <Form.Control type='file' name='photo' onChange={handleInput}/>
                                    </Form.Group>
                                </Row>

                               

                                <Button variant="primary" type="submit" className='btn btn-block col-11 ml-4'>
                                    Créer
                                </Button>
                            </Form>
                           
                        </div>
                       
                    </div>

                </div>
            </div>
        </div>


    )
}