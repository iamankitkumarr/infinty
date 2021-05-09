import {Link ,Redirect} from 'react-router-dom';
import Team from '../components/team'
import Courses from '../components/courses'
import Homehead from '../components/homehead'
import { useContext,useState,useEffect } from 'react';
import { AuthContext } from '../context/authContex';
import firebase from '../config'
import Notice from '../components/notice'

const Home = () => {
   const {currentUser} = useContext(AuthContext);
   const [data, setData] = useState([])
   const getData = async () => {
    let newData = []
    let ref = firebase.database().ref("notice");
    ref.on("value",  function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
             let childKey = childSnapshot.key;
            let childData = childSnapshot.val();
            let notice = {
                ...childData,id:childKey
            }
            newData.push(notice);
            setData([...newData,newData]);
        });

    })

}
useEffect(()=>{
    getData()
},[])


    if(currentUser==null){
        return ( <><header>
            <div id="section-1">
                <div id="div-1">
                    <h1 id="heading">Shape your future</h1>
                    <p id="subheading">Prepare for your exam by the best teachers in town.</p>
                    <Link to="/registration" id="register">REGISTER NOW</Link>
                </div>
            </div>
            <div>
                <h1 style={{textAlign:"center"}}>Notice</h1>
              
               <marquee>{data.map(data=>(
                   <h3>{data.message}</h3>
               ))}</marquee>
            </div>
        </header>
      <Homehead/>
    <Team/>
    <Courses/>
        </> );
    }
    return (
        <Redirect to='/dashboard'/>
      );

}
 
export default Home;