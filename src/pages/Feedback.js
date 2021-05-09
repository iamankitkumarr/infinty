import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContex';
import  firebase from '../config'
import {Redirect} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';





const Feedback = () => {

    
const [message,setMessage] = useState('');
const [subject, setSubject] = useState('');

const writeData = (subject,message)=>{
    if(subject!=''&& message!=''){
        firebase.database().ref('feedback/'+uuidv4()).update({
            subject:subject,
            message:message,
           }).then(()=>{
               setMessage('')
               setSubject('')
           })
           
    }
        
    
}

const {currentUser} = useContext(AuthContext);
if(currentUser){
    return ( <>
        <div class="container">
               <div class="signup-content">
                   <div class="signup-form">
                       <form method="POST" class="register-form" id="register-form">
                           <h2>Feedback Form</h2>                 
                           <div class="form-group">
                               <label for="address">Subject :</label>
                               <input value={subject} onChange={(e)=>setSubject(e.target.value)} type="text" name="address" id="address" required/>
                           </div> 
                                
                           <label for="address">Message:</label>
                           <div class="form-group">
                               
                               <textarea value={message} onChange={(e)=>setMessage(e.target.value)} style={{width:400,height:200}}type="text" name="address" id="address" required/>
                           </div> 
                           <Button onClick={()=>writeData(subject,message)}>send feedback</Button>                   
                       </form>
                   </div>
               </div>
           </div>
       
       </> );
}else{
    return ( <Redirect to="/"/>) ;
}
  
}
 
export default Feedback;