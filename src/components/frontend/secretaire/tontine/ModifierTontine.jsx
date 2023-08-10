import {Form,Row,Col,Button} from 'react-bootstrap'

import RoleContext from "../../Context/RoleContext"
import { useContext,useEffect,useState } from "react"
import { useParams } from "react-router-dom";

export default function ModifierTontine(){
    const {getTontine,modifierTontine, tontineValue,tontine,handleChangeTontine} = useContext(RoleContext);
    let {id} = useParams();

    useEffect(()=>{
        getTontine(id);
    },[]);
    return(
        <div>
            <div className="content-wrapper">
                <div className="content">
                    <div className="container-fluid">
                    <br/>
                    <br/>
                        <div className="row">
                        
                            <Form onSubmit={modifierTontine} className='pt-2'>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridNom">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Intitulé tontine :  <span className='etoile'>*</span></Form.Label>
                                        <Form.Control type="text" placeholder="nom membre" name='nom' value={tontineValue.nom} onChange={handleChangeTontine} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridNbFemme">
                                        <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Nombre de Participant : <span className='etoile'>*</span>  </Form.Label>
                                        <Form.Control type="number" placeholder="Nombre de femme" value={tontineValue.nbDeParticipants} defaultValue={0} name='nbDeParticipants' onChange={handleChangeTontine}/>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridNaissance">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date debut : </Form.Label>
                                        <Form.Control type="date"  name='dateDebut' value={tontineValue.dateDebut}  onChange={handleChangeTontine}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEntre">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date fin :</Form.Label>
                                        <Form.Control type="date"  name='dateFin' value={tontineValue.dateFin} onChange={handleChangeTontine}/>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                     
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Observations : </Form.Label>
                                        <Form.Control as="textarea" rows={3} name='observations' value={tontineValue.observation} onChange={handleChangeTontine}/>
                                    </Form.Group>
                                   
                                </Row>
                               

                                <Button variant="primary" type="submit" className='btn btn-block col-11 ml-4 mb-4'>
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