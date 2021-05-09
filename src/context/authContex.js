import React,{createContext,useState,useEffect} from 'react';
import firebase from '../config'
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
   const [currentUser,setcurrentUser]= useState(null);

   useEffect(()=>{
firebase.auth().onAuthStateChanged(setcurrentUser)
   },[])

    return ( 
<AuthContext.Provider value={{currentUser,setcurrentUser}}>
    {props.children}
</AuthContext.Provider>
     );
}
 
export default AuthContextProvider;