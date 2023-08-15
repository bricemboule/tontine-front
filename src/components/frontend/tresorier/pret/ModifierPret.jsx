
import { useContext,useEffect } from "react";
import RoleContext from "../../Context/RoleContext";
import {Row,Col,Button,Form} from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function ModifierPret(){

    const {getSeances, seances,users,getUsers, getPret,pretValue,modifierPret,changePret} = useContext(RoleContext);
    let {id} = useParams();

    useEffect(()=>{
        getPret(id)
        getSeances();
        getUsers();
    },[]);

    console.log(pretValue);

    return(
        <div className="content-wrapper">
        <div className="content">
            <div className="container-fluid">
            <br/>
            <br/>
            <br/>
                <div className="row">
                
                    <Form onSubmit={modifierPret} className='pt-2'>
                    
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNom">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Montant :  <span className='etoile'>*</span></Form.Label>
                                <Form.Control type="number"  name='montant' value={pretValue.montant} default={0}  onChange={changePret}/>
                             </Form.Group> 
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNom">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Pourcentage :  <span className='etoile'>*</span></Form.Label>
                                <Form.Control type="number"  name='pourcentage' value={pretValue.pourcentage} default={0}  onChange={changePret}/>
                             </Form.Group> 
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridMotif">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}> Observations : <span className='etoile'>*</span></Form.Label>
                                <Form.Control as="textarea" rows={3} name='observation' value={pretValue.observation}  onChange={changePret}/>
                            </Form.Group>
                         
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridSeance">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Membre : <span className='etoile'>*</span>   </Form.Label>
                                <Form.Select aria-label="Default select example" value={pretValue.membre} name='membre'  onChange={changePret}>
                                    <option value=""></option>
                                    {
                                        users.map((user)=>{
                                            return (
                                                <option key={user.id} value={user.nom}>{user.nom}</option>
                                            )
                                        })

                                    }
                                </Form.Select>
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridSeance">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Seance : <span className='etoile'>*</span>   </Form.Label>
                                <Form.Select aria-label="Default select example" value={pretValue.seance}  name='seance'  onChange={changePret}>
                                    <option value=""></option>
                                    {
                                        seances.map((seance)=>{
                                            return (
                                                <option key={seance.id} value={seance.dateSeance}>{seance.dateSeance}</option>
                                            )
                                        })

                                    }
                                </Form.Select>
                            </Form.Group>

                        </Row>
                       <br/>
                        <Button variant="primary" type="submit" className='btn btn-block col-11 ml-4 mb-4'>
                            Enregistrer
                        </Button>
                        <br/>
                    </Form>
                   
                </div>
               
            </div>

        </div>
        </div>
    )
}