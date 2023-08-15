import {Form,Row,Col,Button} from 'react-bootstrap'
import RoleContext from "../../Context/RoleContext";
import { useContext,useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ModiferTypeAmende(){
    const {modifierTypeAmende,changeTypeAmende, getTypeAmende, typeAmendeValues} = useContext(RoleContext);
    let {id} = useParams();

    useEffect(()=>{
        getTypeAmende(id);
    },[])

    console.log(typeAmendeValues);

    return (

        <div className="content-wrapper">
        <div className="content">
            <div className="container-fluid">
            <br/>
            <br/>
            <br/>
                <div className="row">
                
                    <Form onSubmit={modifierTypeAmende} className='pt-2'>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNaissance">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}> Intitulé : <span className='etoile'>*</span></Form.Label>
                                <Form.Control type="texte"  name='intitule' value={typeAmendeValues.intitule}  onChange={changeTypeAmende}/>
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Description : </Form.Label>
                                <Form.Control as="textarea" rows={3} name='description' value={typeAmendeValues.description}  onChange={changeTypeAmende}/>
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
