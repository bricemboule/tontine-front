
import { useContext,useEffect } from "react";
import RoleContext from "../../Context/RoleContext";
import {Row,Col,Button,Form} from "react-bootstrap";

export default function AjouterDepense(){

    const {getSeances, seances, changeDepense,SaveDepense} = useContext(RoleContext);

    useEffect(()=>{
        getSeances();
    },[]);

    return(
        <div className="content-wrapper">
        <div className="content">
            <div className="container-fluid">
            <br/>
            <br/>
            <br/>
                <div className="row">
                
                    <Form onSubmit={SaveDepense} className='pt-2'>
                    
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNom">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Montant :  <span className='etoile'>*</span></Form.Label>
                                <Form.Control type="number"  name='montant' default={0}  onChange={changeDepense}/>
                             </Form.Group> 
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNom">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Raison :  <span className='etoile'>*</span></Form.Label>
                                <Form.Control type="text"  name='raison' default={0}  onChange={changeDepense}/>
                             </Form.Group> 
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridMotif">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}> Observations : <span className='etoile'>*</span></Form.Label>
                                <Form.Control as="textarea" rows={3} name='observation'  onChange={changeDepense}/>
                            </Form.Group>
                         
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridSeance">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Seance : <span className='etoile'>*</span>   </Form.Label>
                                <Form.Select aria-label="Default select example"  name='seance'  onChange={changeDepense}>
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