import {Form,Row,InputGroup,Col,Button} from 'react-bootstrap'
import './login.css'
import Left from './Left.jsx'
import DroitLogin from './DroitLogin.jsx'
import "bootstrap/dist/css/bootstrap.css"


export default function Register(){

    
   
    return (
        
        
       <div className='App'> 
        

           <Row className='landing'>

                <Col>
                    <Left/>
                </Col>

                <Col>
                    <DroitLogin/>
                </Col>

           </Row>
       </div>
  )
}


