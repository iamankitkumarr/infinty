import pic1 from '../image/AKASH.jpeg';
import pic2 from '../image/SUMIT.jpeg';
import pic3 from '../image/faculty3.jpeg';
import pic4 from '../image/faculty4.jpeg';


const Team = () => {
  const image = {
    width : 100,
    height: 100
  }
    return ( <div className="bg-light py-5" id="faculty">
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-lg-5">
          <h2 className="display-4 font-weight-light">Our Faculty</h2>
        </div>
      </div>
  
      <div className="row text-center">
        
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4"><img src={pic1} alt="" width="100" height="100" style={image} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 className="mb-0">Akash Singh</h5><span className="small text-uppercase text-muted">Chemistry Faculty</span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4"><img src={pic2} height="100" alt="" style={image} width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 className="mb-0">Sumit Suman</h5><span className="small text-uppercase text-muted">Maths Faculty</span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      
  
      
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4"><img src={pic3}  height="100" style={image} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 className="mb-0">Pushp Raaj</h5><span className="small text-uppercase text-muted">Bio Faculty</span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4"><img src={pic4} height="100" alt="" style={image} width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 className="mb-0">Abhishek Jha</h5><span className="small text-uppercase text-muted">Physics Faculty</span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
       
  
      </div>
    </div>
  </div> );
}
 
export default Team;