import {Form,Row,Col,Button} from 'react-bootstrap'
import { useContext,useEffect } from "react"
import RoleContext from '../../Context/RoleContext';


export default function CreerTontine(){
    const { SaveTontine, tontineValue, handleChangeTontine} = useContext(RoleContext); 
    
    useEffect(()=>{

    }, []);

    return(
       
            <div className="content-wrapper">
                <div className="content">
                    <div className="container-fluid">
                    <br/>
                    <br/>
                    <br/>
                        <div className="row">
                        
                            <Form onSubmit={SaveTontine} className='pt-2'>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridNom">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Intitulé tontine :  <span className='etoile'>*</span></Form.Label>
                                        <Form.Control type="text" placeholder="intitulé tontine" name='nom' onChange={handleChangeTontine} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridNbFemme">
                                        <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Nombre de Participant : <span className='etoile'>*</span>  </Form.Label>
                                        <Form.Control type="number" defaultValue={0} name='nbDeParticipants' onChange={handleChangeTontine}/>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridNaissance">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date debut : <span className='etoile'>*</span></Form.Label>
                                        <Form.Control type="date"  name='dateDebut'  onChange={handleChangeTontine}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEntre">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date fin : <span className='etoile'>*</span></Form.Label>
                                        <Form.Control type="date"  name='dateFin' onChange={handleChangeTontine}/>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                     
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Observations : </Form.Label>
                                        <Form.Control as="textarea" rows={3} name='observation' onChange={handleChangeTontine}/>
                                    </Form.Group>
                                   
                                </Row>
                               

                                <Button variant="primary" type="submit" className='btn btn-block col-11 ml-4 mb-4'>
                                    Créer
                                </Button>
                                <br/>
                            </Form>
                           
                        </div>
                       
                    </div>

                </div>
            </div>
    
    )
}