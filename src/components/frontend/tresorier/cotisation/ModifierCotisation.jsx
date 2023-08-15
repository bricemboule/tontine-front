
import { useContext,useEffect } from "react";
import RoleContext from "../../Context/RoleContext";
import {Row,Col,Button,Form} from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function ModifierCotisation(){

    const {getSeances,getTontines,tontines,getCotisation,cotisationValue,getUsers,users, seances, changeCotisation,modifierCotisation} = useContext(RoleContext);
    let {id} = useParams();

    useEffect(()=>{
        getCotisation(id)
        getSeances();
        getTontines();
        getUsers();
    },[]);

    console.log(cotisationValue);
    return(
        <div className="content-wrapper">
        <div className="content">
            <div className="container-fluid">
            <br/>
            <br/>
                <div className="row">
                
                <Form onSubmit={modifierCotisation} className='pt-2'>
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridNom">
                            <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Montant :  <span className='etoile'>*</span></Form.Label>
                            <Form.Control type="number" value={cotisationValue.montant} name='montant' default={0}  onChange={changeCotisation}/>
                         </Form.Group> 
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridNom">
                            <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Mode de versement :  <span className='etoile'>*</span></Form.Label>
                            <Form.Select aria-label="Default select example" value={cotisationValue.modeVersement} name='modeVersement'  onChange={changeCotisation}>
                                    <option value=""></option>
                                    <option value="Orange Money">Orange Money</option>
                                    <option value="Mobile Money">Mobile Money</option>
                                    <option value="Virement bancaire">Virement bancaire</option>
                                </Form.Select>
                         </Form.Group> 
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridMotif">
                            <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}> Coupon versement : <span className='etoile'>*</span></Form.Label>
                            <Form.Control type="text" name='couponVersement' value={cotisationValue.couponVersement}  onChange={changeCotisation}/>
                        </Form.Group>
                     
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridSeance">
                            <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Membre : <span className='etoile'>*</span>   </Form.Label>
                            <Form.Select aria-label="Default select example"  value={cotisationValue.membre} name='membre'  onChange={changeCotisation}>
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
                            <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Tontine : <span className='etoile'>*</span>   </Form.Label>
                            <Form.Select aria-label="Default select example" value={cotisationValue.tontine.nom}  name='tontine'  onChange={changeCotisation}>
                                <option value=""></option>
                                {
                                    tontines.map((tontine)=>{
                                        return (
                                            <option key={tontine.id} value={tontine.nom}>{tontine.nom}</option>
                                        )
                                    })

                                }
                            </Form.Select>
                        </Form.Group>

                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridSeance">
                            <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Seance : <span className='etoile'>*</span>   </Form.Label>
                            <Form.Select aria-label="Default select example" value={cotisationValue.seance} name='seance'  onChange={changeCotisation}>
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
                        Modifier
                    </Button>
                    <br/>
                </Form>
                   
                </div>
               
            </div>

        </div>
        </div>
    )
}