
import React, { useState,useContext } from 'react'
import firebase from '../config';
import {useHistory ,Redirect} from 'react-router-dom';
import { AuthContext } from '../context/authContex';
import Button from 'react-bootstrap/Button'
const Registration = () => {
    const history = useHistory();
    const [course,setCourse] = useState('');
    const [phone,setPhone] = useState('');
    const [firstname,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [fathername,setFathername] = useState('');
    const [foccupation,setFoccupation] = useState('');
    const [mothername,setmothername] = useState('');
    const [moccupation,setMoccupation] = useState('');
    const [gender,setGender] = useState('');
    const [raddress,setRaddress] = useState('');
    const [paddress,setPaddress] = useState('');
    const [nationality,setNationality] = useState('');
    const [aadhaar,setAadhaar] = useState('');
    const [category,setCategory] = useState('');
    const [bloodgroup,setBloodgroup] = useState('');
    const [state,setState] = useState('');
    const [city,setCity] = useState('');
    const [dob,setDob] = useState('');
    const [email,setEmail] = useState('');
    const [pincode,setPincode] = useState('');
    const [err,Err] = useState('');
    const [emailerr,emailErr] = useState('');
    const [lasterr,lastErr] = useState('');


    const {currentUser,setcurrentUser} = useContext(AuthContext);

    const  writeUserData=(
        currentUser,
        course,
    firstname,
   lastName,
    fathername,
   foccupation,
    mothername,
    moccupation,
   gender,
    raddress,
   paddress,
    nationality,
    aadhaar,
    category,
    bloodgroup,
   state,
    city,
    dob,
   email,
    pincode,
         ) =>{
            var pattern = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
            var name=new RegExp(/^[a-zA-Z]{3,}$/);
         if(firstname===''||lastName===''||fathername===''||mothername===''|| foccupation===''||moccupation===''||raddress===''||paddress==='')
         {
             Err('please fill all the fields')
            
         }
         else if(!name.test(lastName)||!pattern.test(email))
         { 
         if(!name.test(lastName))
         {
             Err('')
             lastErr('Please Enter a valid lastname')
         }
         if(!pattern.test(email))
         {
             Err('')
             emailErr('Please Enter a valid email')
         }
         
        
    }
    
         else{
           
            emailErr('')
            Err('')
            lastErr('')
if(currentUser!=null){
    firebase.database().ref('users/' + currentUser.uid).update({
        course:course,
    firstname:firstname,
   lastName:lastName,
    fathername:fathername,
   foccupation:foccupation,
    mothername:mothername,
    moccupation:moccupation,
   gender:gender,
    raddress:raddress,
   paddress:paddress,
    nationality:nationality,
    aadhaar:aadhaar,
    category:category,
    bloodgroup:bloodgroup,
   state:state,
    city:city,
    dob:dob,
   email:email,
    pincode:pincode,
    })
    .then(()=>history.replace('/education')).catch(()=>history.replace('/'))
  }
  else{
      window.alert("Please signup first for registration")
  }
}


}   
            
const  writeUserPhoneData=(uuid, phone) =>{
    // let ref = firebase.database().ref("users");
    // ref.orderByChild("phone").equalTo(phone).on("value",(snapshot)=> { 
    // if(snapshot.key){
    //     alert(snapshot.key);
    //     history.replace('/registration');
    // } 
    // }); 
    firebase.database().ref('users/' + uuid).set({
      phone: phone,
    }).then(()=>history.replace('/registration')).catch(()=>history.replace('/'))
  }
const setupRecapcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptch-container', {
        'size': 'invisible',
        'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignInSubmit();
        }
    });
}

const onSignInSubmit = (event) => {
    event.preventDefault();
    setupRecapcha(); 
    const phoneNumber = "+91"+phone;
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
        const code = window.prompt("enter verification code")
        confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            writeUserPhoneData(user.uid,phone);
            
            
            // ...
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            window.alert("OTP not matched!")
            console.log(error);
            setPhone('');
            setupRecapcha();
            // ...
        });
    }).catch((error) => {    
            setPhone('');
    });
    

}
  
    return (<>        
    <div class="main">
        <div class="container">
            <div class="signup-content">
                <div class="signup-form">
                    <form method="POST" class="register-form" id="register-form">
                        <h2>Student Registration form</h2>
                        <div className="form-group">
                        <div class="form-row">
                            <div class="form-group">
                            <div id="recaptch-container"></div>
                                <label for="phone">Phone Number :</label>
                                <input type="text" style={{width:"25vw"}} value={phone} onChange={(e)=>setPhone(e.target.value)} name="phone" id="name" required/>
                                <button onClick={(e)=>onSignInSubmit(e)} className="btn btn-primary">Verify</button>
                                <div id="RecaptchaVerifier"></div>
                            </div>
                        </div>
                        </div>
                        <div class="form-group">
                            <label for="course">Course :</label>
                            <div class="form-select">
                                <select name="course" id="course" value={course}onChange={(e)=>setCourse(e.target.value)}>
                                    <option value="">Select course</option>
                                    <option value="Integrated 2 Year Course">Integrated 2 Year Course</option>
                                    <option value="Integrated 1 Year Course">Integrated 1 Year Course</option>
                                    <option value="One Year Target Course">One Year Target Course</option>
                                    <option value="Foundation">Foundation Course</option>
                                    <option value="90 Days Crash Course">90 Days Crash Course</option>
                                    <option value="Test Series">All India Test Series</option>
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                        </div>
                        <div class="form-row">
                      
                            <div class="form-group">
                                <label for="name">First Name :</label>
                                <input type="text" value={firstname} onChange={(e)=>setFirstName(e.target.value)} name="name" id="name" required/>
                               
                            </div>
                            <div class="form-group">
                                <label for="father_name"> Last Name :</label>
                                <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} name="father_name" id="father_name" required/>
                                <p style={{color:'red'}}>{lasterr}</p>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Father's Name :</label>
                                <input type="text" value={fathername} onChange={(e)=>setFathername(e.target.value)} name="name" id="name" required/>
                            </div>
                            <div class="form-group">
                                <label for="father_name">Occupation :</label>
                                <input type="text" value={foccupation} onChange={(e)=>setFoccupation(e.target.value)} name="father_name" id="father_name" required/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Mother's Name :</label>
                                <input type="text" value={mothername} name="name" id="name" onChange={(e)=>setmothername(e.target.value)} required/>
                            </div>
                            <div class="form-group">
                                <label for="father_name">Occupation :</label>
                                <input type="text" value={moccupation} onChange={(e)=>setMoccupation(e.target.value)} name="father_name" id="father_name" required/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="course">Gender :</label>
                            <div class="form-select">
                                <select name="course" id="course" value={gender}onChange={(e)=>setGender(e.target.value)}>
                                   
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="address">Residence Address :</label>
                            <input type="text" value={raddress} onChange={(e)=>setRaddress(e.target.value)} name="address" id="address" required/>
                        </div>
                        <div class="form-group">
                            <label for="address">Permanent Address :</label>
                            <input type="text" value={paddress} onChange={(e)=>setPaddress(e.target.value)} name="address" id="address" required/>
                        </div>
                        <div class="form-group">
                            <label for="address">Nationality :</label>
                            <input type="text" value={nationality} onChange={(e)=>setNationality(e.target.value)} name="address" id="address" required/>
                        </div>
                        <div class="form-group">
                            <label for="address">Aadhaar Card No :</label>
                            <input type="number" value={aadhaar} onChange={(e)=>setAadhaar(e.target.value)} name="address" id="address" required/>
                        </div>
                        <div class="form-group">
                            <label for="course">Category :</label>
                            <div class="form-select">
                                <select value={category} onChange={(e)=>setCategory(e.target.value)} name="course" id="course">
                                    <option value="">Select Category</option>
                                    <option value="Gen">Gen</option>
                                    <option value="Sc">SC</option>
                                    <option value="ST">ST</option>
                                    <option value="OBC">OBC</option>
                                    <option value="PH">PH</option>
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="course">Blood Group :</label>
                            <div class="form-select">
                                <select value={bloodgroup} onChange={(e)=>setBloodgroup(e.target.value)} name="course" id="course">
                                    <option value="">Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                        </div>
                        <div class="form-row">
                        <div class="form-group">
                            <label for="birth_date">State :</label>
                            <input value={state} onChange={(e)=>setState(e.target.value)} type="text" name="birth_date" id="birth_date"/>
                        </div>
                         
                        </div>
                        <div class="form-group">
                            <label for="birth_date">City :</label>
                            <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" name="birth_date" id="birth_date"/>
                        </div>
                        <div class="form-group">
                            <label for="birth_date">DOB :</label>
                            <input value={dob} onChange={(e)=>setDob(e.target.value)} type="date" name="birth_date" id="birth_date"/>
                        </div>
                        <div class="form-group">
                            <label for="pincode">Pincode :</label>
                            <input value={pincode} onChange={(e)=>setPincode(e.target.value)} type="number" name="pincode" id="pincode"/>
                        </div>
                     
                        <div class="form-group">
                            <label for="email">Email ID :</label>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" />
                       
                            <p style={{color:'red'}}>{emailerr}</p>
                        </div>
                        <p style={{color:'red'}}>{err}</p>
                      <Button onClick={()=>writeUserData(
                           currentUser,
                           course,
                       firstname,
                      lastName,
                       fathername,
                      foccupation,
                       mothername,
                       moccupation,
                      gender,
                       raddress,
                      paddress,
                       nationality,
                       aadhaar,
                       category,
                       bloodgroup,
                      state,
                       city,
                       dob,
                      email,
                       pincode,
                      )}>Next</Button>
                    </form>
                </div>
            </div>
        </div>

    </div>
    
    </>);
     
     
}
 
export default Registration;