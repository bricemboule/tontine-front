import {Form,Row,InputGroup,Col,Button,Image} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css'
import 'react-phone-number-input/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-phone-number-input/style.css'
import 'react-phone-input-2'
import PhoneInput from 'react-phone-input-2'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import "/public/css/etoile.css"


export default function Register(){

    const [value1, setValue1] = useState()
    const [value, setValue] = useState()

    const navigate = useNavigate();
    const [registerInput, setRegisterInput] = useState({
        nom : "",
        prenom : "",
        anneeNais :"",
        anneeEntree : "",
        nbDeFemme : "",
        login : "",
        password : "",
        sexe : "",
        nomEpoux : "",
        telephone1 : "",
        telephone2 : "",
        email : "",
        photo : "",
        error_list : [],
    })

    const handleInput = (e) =>{

        e.persist();
        setRegisterInput({...registerInput, [e.target.name] : e.target.value})
    }

    const registerSubmit = (e) =>{

        e.preventDefault();
        const data = {
            nom : registerInput.nom,
            prenom : registerInput.prenom,
            anneeNais :registerInput.anneeNais,
            anneeEntree : registerInput.anneeEntree,
            nbDeFemme : registerInput.nbDeFemme,
            login : registerInput.login,
            password : registerInput.password,
            sexe : registerInput.sexe,
            nomEpoux : registerInput.nomEpoux,
            telephone1 : value,
            telephone2 : value1,
            email : registerInput.email,
            photo : registerInput.photo
        }

        console.log(data);
        axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response=>{
            axios.post('http://127.0.0.1:8000/api/register', data).then(res=>{
                console.log(res);
                if ( res.status === 200){
                    
                    localStorage.setItem('auth_token', res.data.token);
                    
                    localStorage.setItem('auth_name', res.data.login);
                    
                    Swal.fire("Création membre réussie", res.data.message, "success");
                    navigate('/');
                }else{
                    setRegisterInput({...registerInput, error_list : res.data.validation_errors})
                }
            })
        })
    }
   
    return (
        
        
        <div>
            <br />
                <div className='content m-4'>

                <Form onSubmit={registerSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridNom">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre nom <span className='etoile'>*</span>  </Form.Label>
                                <Form.Control type="text" placeholder="Entrer votre nom" name='nom' onChange={handleInput}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPrenom">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}} >Votre Prenom <span className='etoile'>*</span>   </Form.Label>
                                <Form.Control type="text" placeholder="Votre prénom" name='prenom' onChange={handleInput}/>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridNaissance">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Date de naissance <span className='etoile'>*</span>   </Form.Label>
                                <Form.Control type="date" placeholder="Entrer votre date de naissance" name='anneeNais' onChange={handleInput}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEntre">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Date d'entrée <span className='etoile'>*</span>  </Form.Label>
                                <Form.Control type="date" placeholder="Votre date d'entrée" name='anneeEntree' onChange={handleInput}/>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridNomEpoux">
                                    <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Nom de l'Epoux/Epouse <span className='etoile'>*</span>  </Form.Label>
                                    <Form.Control type="text" placeholder="Nom de votre époux ou épouse"  name='nomEpoux' onChange={handleInput}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridNbFemme">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Nombre de Femme <span className='etoile'>*</span>  </Form.Label>
                                <Form.Control type="number" placeholder="Nombre de femme" defaultValue={0} name='nbDeFemme' onChange={handleInput}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridSexe">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre sexe <span className='etoile'>*</span>   </Form.Label>
                                <Form.Select aria-label="Default select example"  name='sexe' onChange={handleInput}>
                                        <option value="H">Homme</option>
                                        <option value="F">Femme</option>
                                </Form.Select>
                            </Form.Group>
                            
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridTelephone1">
                                    <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}> Telephone 1 <span className='etoile'>*</span> </Form.Label>
                                    <PhoneInput  country={'cm'} value={value} onChange={setValue} name='telephone1'/>
                                </Form.Group>
            
                                <Form.Group as={Col} controlId="formGridTelephone1">
                                    <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}> Telephone 2  </Form.Label>
                                    <PhoneInput  country={'cm'} value={value1} onChange={setValue1} name='telephone2'/>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridLogin">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre login <span className='etoile'>*</span>   </Form.Label>
                                <Form.Control type="text" placeholder="Entrer votre login" name='login' onChange={handleInput}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre mot de passe <span className='etoile'>*</span>   </Form.Label>
                                <Form.Control type="password" placeholder="Entrer votre mot de passe" name='password' onChange={handleInput}/>
                                </Form.Group>
                            </Row>
        
                            <Row className="mb-3">
                                <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Adresse mail <span className='etoile'>*</span>   </Form.Label>
                                <Form.Control placeholder="Votre adresse mail" type='email' name='email' onChange={handleInput}/>
                                </Form.Group>

                                <Form.Group as={Col} className="mb-3" controlId="formGridPhoto">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre photo <span className='etoile'>*</span>   </Form.Label>
                                <Form.Control placeholder="Votre photo" type='file' name='photo' onChange={handleInput}/>
                                </Form.Group>
                            </Row>

                            <p> Vous avez déjà un compte ? alors <Link to ={'/login'}> connectez-vous</Link> </p>
                
                            <Button variant="primary" type="submit" className='btn btn-block col-11'>
                                Créer
                            </Button>
                        </Form>

                </div>
        </div>
  )
}


