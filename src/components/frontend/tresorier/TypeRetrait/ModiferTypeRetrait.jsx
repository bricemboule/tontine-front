import { Row, Col, Form, Button} from "react-bootstrap"
import RoleContext from "../../Context/RoleContext"
import { useContext,useEffect } from "react"
import { useParams } from "react-router-dom";

export default function ModifierTypeRetrait(){

    const {modifierTypeRetrait,changeTypeRetrait, getTypeRetrait, typeRetraitValues} = useContext(RoleContext);
    let {id} = useParams();

    useEffect(()=>{

        getTypeRetrait(id);
    },[])

    console.log(typeRetraitValues);

    return (

        <div className="content-wrapper">
        <div className="content">
            <div className="container-fluid">
            <br/>
            <br/>
            <br/>
                <div className="row">
                
                    <Form onSubmit={modifierTypeRetrait} className='pt-2'>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNaissance">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}> Intitulé : <span className='etoile'>*</span></Form.Label>
                                <Form.Control type="texte"  name='intitule' value={typeRetraitValues.intitule} onChange={changeTypeRetrait}/>
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Description : </Form.Label>
                                <Form.Control as="textarea" rows={3} name='description' value={typeRetraitValues.description} onChange={changeTypeRetrait}/>
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
    )
}