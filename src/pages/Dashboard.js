
import  firebase from '../config'
import {Redirect} from 'react-router-dom'
import { useContext,useState,useEffect } from 'react';
import { AuthContext } from '../context/authContex';




const Dashboard = () => {
   const {currentUser} = useContext(AuthContext);
   const [data,setData] = useState("bc");
   const [load ,setLoad] = useState("loading")

useEffect(()=>{
if(currentUser!= null){
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
},load)
 


    if (currentUser != null){
      return(<div className="container">
          <table class="table">
  <thead>
    <tr>
      <th scope="col"> <h1>Hi {data.name}</h1></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">name</th>
      <td>{data.name}</td>
      <th scope="row">email</th>
      <td>{data.email}</td>
    </tr>
    <tr>
    <th scope="row">phone</th>
      <td>{data.phone}</td>
      <th scope="row">gender</th>
      <td>{data.gender}</td>
    </tr>
    <tr>
    <th scope="row">class</th>
      <td>{data.studentclass}</td>
      <th scope="row">school</th>
      <td>{data.school}</td>
    </tr>
    <tr>
    <th scope="row">DOB</th>
      <td>{data.dob}</td>
      <th scope="row">nationality</th>
      <td>{data.nationality}</td>
    </tr>
    <tr>
    <th scope="row">course</th>
      <td>{data.course}</td>
    </tr>
    
  </tbody>
</table>
            
              <button className="btn btn-danger" onClick={()=>{
        firebase.auth().signOut()
        
        }}>logout</button>
        <a targrt="_blank" href='https://www.instamojo.com/@infinitybarh' className="btn btn-success ml-5" >Payment</a>
              <br/><br/><br/><br/><br/>
              
      </div>);
    }
   return (
     <Redirect to='/'/>
   );
}
 
export default Dashboard;