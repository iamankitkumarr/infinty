import {Link} from 'react-router-dom';
import React from 'react';
const Footer = () => {
    let d = new Date();
     let year = d.getFullYear()
    return ( <footer id="dk-footer" className="dk-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-4">
                            <div className="dk-footer-box-info">
                                <a href="index.html" className="footer-logo">
                                   
                                </a>
                                <p className="footer-info-text">
                                   

INFINITY INSTITUTE is an organization that aims at building a better India by providing high-quality education to the budding IX, X, XI, XII Science students of our country.
                                </p>
                                <div className="footer-social-link">
                                    <h3>Follow us</h3>
                                    <ul>
                                        <li>
                                            <a target='_blank' href="https://www.facebook.com/Infinityinstitutebarh">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                       
                                        
                                    </ul>
                                </div>
                           
                            </div>
                          
                            <div className="footer-awarad">
                                
                                <p>Address <br/>
NH-31, Opp Savita Cinema Hall
Barh(Patna) - 803213</p>
                            </div>
                        </div>
                        
                        <div className="col-md-12 col-lg-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="contact-us">
                                        <div className="contact-icon">
                                            <i className="fa fa-map-o" aria-hidden="true"></i>
                                        </div>
                                      
                                        <div className="contact-info">
                                            <h3>Email</h3>
                                            <p>admin@infinityinstitutebarh.com</p>
                                        </div>
                                        
                                    </div>
                                  
                                </div>
                            
                                <div className="col-md-6">
                                    <div className="contact-us contact-us-last">
                                        <div className="contact-icon">
                                            <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                                        </div>
                                    
                                        <div className="contact-info">
                                            <h3>9631492402,<br/> 06132242402</h3>
                                            <p>Phone</p>
                                        </div>
                                    
                                    </div>
                                 
                                </div>
                              
                            </div>
                            
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="footer-widget footer-left-widget">
                                        <ul>
                                            <li>
                                                <Link to="/about">About us</Link>
                                            </li>
                                            <li>
                                                <Link to="/gallery">Gallery</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/feedback">Feedback</Link>
                                            </li>
                                        </ul>
                                    </div>
                                 
                                </div>
                              
                            </div>
                        
                        </div>
                     
                    </div>
                  
                </div>
               
        
        
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                {}
                                <span>{`Copyright © ${year} Infinity Institute `}</span>
                            </div>
                          
                            <div className="col-md-6">
                                <div className="copyright-menu">
                                    <ul>
                                    <li>
                                                <Link to="/about">About us</Link>
                                            </li>
                                            <li>
                                                <Link to="/gallery">Gallery</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/feedback">Feedback</Link>
                                            </li>
                                    </ul>
                                </div>
                            </div>
                        
                        </div>
                     
                    </div>
               
                </div>
               
               
               
        </footer>
        );
}
 
export default Footer;
