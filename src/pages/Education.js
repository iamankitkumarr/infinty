
import React, { useState,useContext } from 'react'
import firebase from '../config';
import {useHistory,Redirect} from 'react-router-dom';
import { AuthContext } from '../context/authContex';
import Button from 'react-bootstrap/Button'
const Education = () => {
    const {currentUser} = useContext(AuthContext);
    const history = useHistory();
    const [studentclass,setStudentclass] = useState('');
    const [school,setSchool] = useState('');
    const [schoolAddress,setSchoolAdd] = useState('');
    const [marks,setMarks] = useState('');
    const [reach,setReach] = useState('');
    const  writeUserData=(
        currentUser,
        studentclass,
        school,
        schoolAddress,
        marks,
        reach,
         ) =>{

if(currentUser!=null){
    firebase.database().ref('users/' + currentUser.uid).update({
     studentclass:   studentclass,
      school:  school,
      schoolAddress:  schoolAddress,
      marks:  marks,
      reach:  reach,
    })
    .then(()=>history.replace('/dashboard')).catch(()=>history.replace('/'))
  }
  else{
      window.alert("Please signup first for registration")
  }


}
 if(currentUser){
    return (<>        
    <div class="main">
        <div class="container">
            <div class="signup-content">
                <div class="signup-form">
                    <form method="POST" class="register-form" id="register-form">
                        <h2>Educational Details</h2>
                        <div class="form-group">
                            <label for="course">Student Class Category:</label>
                            <div class="form-select">
                                <select value={studentclass} onChange={(e)=>setStudentclass(e.target.value)} name="course" id="course">
                                    <option value=""></option>
                                    <option value="X passed">X Passed</option>
                                    <option value="XI Studying">XI Studying</option>
                                    <option value="XII Studying">XII Studying</option>
                                    <option value="XII Passed">XII Passed</option>
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                        </div>                  
                        <div class="form-group">
                            <label for="address">School/College Name :</label>
                            <input value={school} onChange={(e)=>setSchool(e.target.value)} type="text" name="address" id="address" required/>
                        </div> 
                          
                        <div class="form-group">
                            <label for="address">School/College's Address:</label>
                            <input value={schoolAddress} onChange={(e)=>setSchoolAdd(e.target.value)}type="text" name="address" id="address" required/>
                        </div>   
                          
                        <div class="form-group">
                            <label for="address">Marks Obtained Xth Or XIIth:</label>
                            <input value={marks} onChange={(e)=>setMarks(e.target.value)}  type="number" name="address" id="address" required/>
                        </div> 
                        <div class="form-group">
                            <label for="course">How did you reach us?:</label>
                            <div class="form-select">
                                <select value={reach} onChange={(e)=>setReach(e.target.value)}name="course" id="course">
                                    <option value=""></option>
                                    <option value="Promotions Team">Promotions Team</option>
                                    <option value="Newspaper">Newspaper</option>
                                    <option value="Teachers">Teachers</option>
                                    <option value="Friends/Relatives">Friends/Relatives</option>
                                    <option value="Website">WebSite</option>
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                        </div> 
                        <Button onClick={()=>writeUserData(  currentUser,studentclass, school, schoolAddress,marks, reach,)}>Register</Button>                     
                    </form>
                </div>
            </div>
        </div>

    </div>
    
    </>);
     }
     else{
         return <Redirect to="/"/>
     }
}
 
export default Education;