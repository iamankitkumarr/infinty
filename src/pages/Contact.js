import { useContext, useState } from 'react';

import  firebase from '../config'

import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';



const Contact = () => {

    const [message,setMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const writeData = (name,email,message)=>{
        if(name!=''&& email!='' && message!=''){
            firebase.database().ref('contact/'+uuidv4()).update({
                name:name,
                email:email,
                message:message,
               }).then(()=>{
                   setName('')
                   setEmail('')
                   setMessage('')
               })
               
        }
            
        
    }
    






    return ( <>
             
        <div class="container">
            <div class="signup-content">
                <div class="signup-form">
                    <form method="POST" class="register-form" id="register-form">
                        <h2>Contact Us</h2>                 
                        <div class="form-group">
                            <label for="address">Name :</label>
                            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="address" id="address" required/>
                        </div> 
                          
                        <div class="form-group">
                            <label for="address">Email:</label>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="address" id="address" required/>
                        </div>   
                        <label for="address">Message:</label>
                        <div class="form-group">
                            
                            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} style={{width:400,height:200}}type="text" name="address" id="address" required/>
                        </div> 
                        <Button onClick={()=>writeData(name,email,message)}>Contact us</Button>              
                    </form>
                </div>
            </div>
        </div>

 
    
    
    </> );
}
 
export default Contact;