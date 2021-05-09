import React, { useState,useContext } from 'react'
import firebase from '../config';
import {useHistory} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import { AuthContext } from '../context/authContex';

const Signin = () => {
    const [phone, setPhone] = useState('');
    const history = useHistory();
    const {currentUser,setcurrentUser} = useContext(AuthContext);
    //method to store data into database 
    const  writeUserData=(uuid, phone) =>{
        firebase.database().ref('users/' + uuid).update({
          lastloggedin: Date.now(),
          phone: phone,
        }).then(()=>setcurrentUser(uuid))
        .then(()=>history.replace('/dashboard')).catch(()=>history.replace('/'))
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
                    writeUserData(user.uid,phone);
                    console.log(user);
                    
                    
                    // ...
                }).catch((error) => {
                    // User couldn't sign in (bad verification code?)
                    window.alert("OTP not matched!")
                    console.log(error);
                  
                    setPhone('');
                    setupRecapcha();
                    window.location.reload();
                    // ...
                });
            }).catch((error) => {
                
                window.location.reload();
                    setPhone('');
            });
    }
   
    if(currentUser==null){
        return (
            <div id="div-form">
                <form onSubmit={onSignInSubmit} className="login-form" action="javascript:void(0);">
                    <div id="recaptch-container"></div>
                    <h1 id="signup">Signin</h1>
                    <div className="form-input-material">
                        <label className="label" >Phone No.</label>
                        <input type="number" value={phone} name="username" onChange={(e) => setPhone(e.target.value)} id="username" placeholder=" " autocomplete="off" className="form-control-material" required />
    
                    </div>
                  
                    <button type="submit" className="btn btn-primary btn-ghost">Get OTP</button>
                    <div id="RecaptchaVerifier"></div>
                </form>
            </div>
        );
       
    }
    return(
        <Redirect to="/"/>
    );
    
}

export default Signin;