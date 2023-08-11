import { Row, Col, Form, Button} from "react-bootstrap"
import RoleContext from "../../Context/RoleContext"
import { useContext,useEffect } from "react"

export default function CreerSeance(){

    const {changeSeance, SaveSeance} = useContext(RoleContext);

    return (

        <div className="content-wrapper">
        <div className="content">
            <div className="container-fluid">
            <br/>
            <br/>
            <br/>
                <div className="row">
                
                    <Form onSubmit={SaveSeance} className='pt-2'>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridSexe">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Type séance : <span className='etoile'>*</span>   </Form.Label>
                                <Form.Select aria-label="Default select example"  name='typeSeance' onChange={changeSeance}>
                                    <option value=""></option>
                                    <option value="AG">Assemblée Générale</option>
                                    <option value="CE">Comité exécutif</option>
                                    <option value="OR">Ordinaire</option>
                                    <option value="RB">Rencontre bureau</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridNaissance">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Date seance : <span className='etoile'>*</span></Form.Label>
                                <Form.Control type="date"  name='dateSeance'  onChange={changeSeance}/>
                            </Form.Group>
                        </Row>


                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNaissance">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Lieu : <span className='etoile'>*</span></Form.Label>
                                <Form.Control type="texte"  name='lieu'  onChange={changeSeance}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEntre">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Dépenses Boisson : <span className='etoile'>*</span></Form.Label>
                                <Form.Control type="number" defaultValue={0} name='depenseBoisson' onChange={changeSeance}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Rapport Réunion : </Form.Label>
                                <Form.Control as="textarea" rows={3} name='rapportReunion' onChange={changeSeance}/>
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