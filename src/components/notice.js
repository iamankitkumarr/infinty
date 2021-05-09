const Notice = ({data}) => {
 
    return ( <div className="bg-primary py-5" id="courses">
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-lg-5">
          <h2 className="display-5 font-weight text-light">Notice</h2>
      
        </div>
      </div>

          {data.map((data,index)=>(
          
                  <div key={index} className="col-xl-4 col-sm-6 mb-5">
                  <div className="bg-white rounded shadow-sm py-5 px-4">
                     <h5 className="mb-0">{data.subject}</h5>
                     <h7 className="mb-0">{data.message} </h7>
                  </div>
                </div> 
         
          ))}
   
    </div>
  </div>  );
}
 
export default Notice;