import {Form,Row,Col,Button} from 'react-bootstrap'

import RoleContext from "../../Context/RoleContext"
import { useContext,useEffect,useState } from "react"
import { useParams } from "react-router-dom";

export default function ModifierSeance(){
    const {getSeance,changeSeance,seanceValue,modifierSeance} = useContext(RoleContext);
    let {id} = useParams();

    useEffect(()=>{
        getSeance(id);
    },[]);
    
    console.log(seanceValue);
    return(
        <div>
            <div className="content-wrapper">
                <div className="content">
                    <div className="container-fluid">
                    <br/>
                    <br/>
                        <div className="row">
                        
                        <Form onSubmit={modifierSeance} className='pt-2'>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridSexe">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Type séance : <span className='etoile'>*</span>   </Form.Label>
                                <Form.Select aria-label="Default select example" value={seanceValue.typeSeance}  name='typeSeance' onChange={changeSeance}>
                                    <option value=""></option>
                                    <option value="AG">Assemblée Générale</option>
                                    <option value="CE">Comité exécutif</option>
                                    <option value="OR">Ordinaire</option>
                                    <option value="RB">Rencontre bureau</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridDateSeance">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date seance : <span className='etoile'>*</span></Form.Label>
                                <Form.Control type="date"  name='dateSeance' value={seanceValue.dateSeance}  onChange={changeSeance}/>
                            </Form.Group>
                        </Row>


                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridLieu">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Lieu : <span className='etoile'>*</span></Form.Label>
                                <Form.Control type="texte"  name='lieu' value={seanceValue.lieu}  onChange={changeSeance}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEntre">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Dépenses Boisson : <span className='etoile'>*</span></Form.Label>
                                <Form.Control type="number" defaultValue={0} value={seanceValue.depenseBoisson} name='depenseBoisson' onChange={changeSeance}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Rapport séance : </Form.Label>
                                <Form.Control as="textarea" rows={3} value={seanceValue.rapportReunion} name='rapportReunion' onChange={changeSeance}/>
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