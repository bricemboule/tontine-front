import {Form,Row,InputGroup,Col,Button} from 'react-bootstrap'
import 'react-phone-input-2/lib/style.css'
import './register.css'
import PhoneInput from 'react-phone-input-2'
import { useState } from 'react'
import 'react-phone-number-input/style.css'
import Left from './Left'
import DroitRegister from './DroitRegister'

export default function Register(){

    
   
    return (
        
        
        <div>
            <br />
                <h1 className='titre'>CREER VOTRE COMPTE</h1>
                <br />
               <Row>
                     <Col>
                        
                        <Left/>

                    </Col>
                    <Col>
                        <DroitRegister/>

                    </Col>


               </Row>
        </div>
  )
}


