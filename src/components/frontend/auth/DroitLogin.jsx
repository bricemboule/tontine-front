import { Form, Button } from "react-bootstrap";


export default function DroitLogin(){

    return (

        <div>
            <br />
           
            <Form style={{width : "80%", marginLeft : "10%", marginTop : "10%"}}>

                <Form.Group>
                    <Form.Label style={{fontWeight : "bolder",fontSize:"15px"}}> Votre Username : </Form.Label>
                    <Form.Control type="text" placeholder="votre username ou login . . . " size="lg"/>
                </Form.Group>

                <br />

                <Form.Group>
                    <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}> Votre mot de passe : </Form.Label>
                    <Form.Control type="password" placeholder="votre mot de passe . . ."  size="lg"/>
                </Form.Group>

                <br />
                <br />

                <Button type="submit" class="btn btn-primary btn-block">Se Connecter</Button>

            </Form>
        </div>
    )
}