import React, { useState,useEffect } from 'react'
import firebase from '../config'
const Gallery = () => {
    const [data,setData] = useState([''])
    const getData = async () => {
        let newData = []
        let ref = firebase.database().ref("image");
        ref.on("value",  function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                 let childKey = childSnapshot.key;
                let childData = childSnapshot.val();
                let notice = {
                    ...childData,id:childKey
                }
                newData.push(notice);
                setData([...newData]);
            });

        })

    }
    useEffect(()=>{
        getData()
    },[])

    return (<>
        <div className="container mt-5">
    <div className="row">
        <div className="col-12">
            <h1 className="page-title">Infinity Institute Barh</h1>
        <h3 className="gallery-title">Gallery</h3>
        <div className="row">
            {data.map((data)=>(
                 <a href={data.url} data-toggle="lightbox" data-gallery="example-gallery" className="col-lg-3 col-md-4 col-6 my-3">
                 <img src={data.url} className="img-fluid card"/>
             </a>
            ))}
        </div>
    </div>
</div>
</div>
    
    </>  );
}
 
export default Gallery;