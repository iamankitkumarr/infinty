import React,{createContext,useState,useEffect,useContext} from 'react';
import firebase from '../config'
import { AuthContext } from './authContex';

export const DataContext = createContext();


const DataContextProvider = (props)=>{
   const {Data,setData} = useState({name:""});
   const {currentUser} = useContext(AuthContext);
   useEffect(()=>{
    
    if(currentUser!== null){
      firebase.database().ref('users/' + currentUser.uid).once('value').then(function(snapshot) {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setData(snapshot.val())
        }
        else {
          console.log("No data available");
        }
      }).catch(function(error) {
        console.error(error);
      });
    }


})

    return ( 
        <DataContext.Provider value={{Data}}>
            {props.children}
        </DataContext.Provider>
       );

  

}

export default DataContextProvider



