
import {Form,Row,InputGroup,Col,Button,Image} from 'react-bootstrap'
import './login.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'


export default function Register(){
    const navigate = useNavigate();

    const [data, setData] = useState({
        login : "",
        password : "",
        error_list : []
    });

    const handleChange = (e)=>{
        e.persist();
        const name = e.target.name;
        const value = e.target.value;

        setData({...data, [name]:value});

    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const info = {
            login : data.login,
            password : data.password
        }

        axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response=>{
            axios.post('http://127.0.0.1:8000/api/login', info).then(res =>{
                
                if (res.data.status === 200){
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.login);
                    Swal.fire("Connexion réussie", res.data.message, "success");
                    console.log(res.data.role[0].pivot.dateDebut);
                    console.log(res.data.role[0].pivot.dateFinPrevue);
                    console.log(res.data.role[0].pivot.dateFinEffective);

                    switch (res.data.role[0].nom){
                        case 'admin' :
                            navigate("/admin");
                            break;
                        case 'president' : 
                            navigate("/president");
                            break;
                        case 'vice_president' : 
                            navigate("/vice_president");
                            break;
                        case 'secretaire' : 
                            navigate("/secretaire");
                            break;
                        case 'tresorier' : 
                            navigate("/trésorier");
                            break;
                        case 'commissaire' : 
                            navigate("/commissaire");
                            break;
                        case 'censeur' :
                            navigate("/censeur");
                            break;
                        default :
                            navigate("/pageNotFoud");
                    }
                }else if (res.data.status === 401) {
                    Swal.fire("Warning", res.data.message, "warning");
                }else{
                    setData({...data, error_list : res.data.validation_erros});
                }
            });
        })

    }
   
    return (
        
        
       <div className='App'> 
        

           <Row className='landing'>

                <Col>
                        <Image src="/Images/login.jpg" width={500} height={500}/>
                </Col>

                <Col>
                    <br />
                    <br />
                    <Form onSubmit={handleSubmit} style={{width : "80%", marginLeft : "10%", marginTop : "10%"}}>

                            <Form.Group>
                                <Form.Label style={{fontWeight : "bolder",fontSize:"15px"}}> Votre login  </Form.Label>
                                <Form.Control name="login" type="text" placeholder="votre login . . . " onChange={handleChange} value={data.login} required/>
                                
                            </Form.Group>

                            <br />

                            <Form.Group>
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}> Votre mot de passe  </Form.Label>
                                <Form.Control name="password" type="password" placeholder="votre mot de passe . . ." onChange={handleChange} value={data.password} required/>
                            </Form.Group>

                            <br />
                            <p>Vous n'avez pas de compte ? Cliquez <Link to="/register">Ici</Link></p>
                           
                            <Button type="submit" className='btn btn-block col-12'>Se Connecter</Button>

                    </Form>

                </Col>

           </Row>
       </div>
  )
}


