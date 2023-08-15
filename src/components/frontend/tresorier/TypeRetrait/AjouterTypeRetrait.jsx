import { Row, Col, Form, Button} from "react-bootstrap"
import RoleContext from "../../Context/RoleContext"
import { useContext} from "react"

export default function AjouterTypeRetrait(){

    const {SaveTypeRetrait,changeTypeRetrait} = useContext(RoleContext);
    console.log("Bonjour");

    return (

        <div className="content-wrapper">
        <div className="content">
            <div className="container-fluid">
            
            <br/>
            <br/>
                <div className="row">
                
                    <Form onSubmit={SaveTypeRetrait} className='pt-2'>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNaissance">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}> Intitulé : <span className='etoile'>*</span></Form.Label>
                                <Form.Control type="texte"  name='intitule'  onChange={changeTypeRetrait}/>
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Description : </Form.Label>
                                <Form.Control as="textarea" rows={3} name='description' onChange={changeTypeRetrait}/>
                            </Form.Group>  
                        </Row>
                       
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