import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const facebook = <FontAwesomeIcon icon={faFacebookF} />
const github = <FontAwesomeIcon icon={faGithub} />
const instagram = <FontAwesomeIcon icon={faInstagram} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const LinkedIn = <FontAwesomeIcon icon={faLinkedinIn} />

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="footerAbout px-4">
                            <h4 className="text-white mb-4 mt-5"><span className="logoStyle">Safawat</span> Hossain</h4>
                            <p>This is safwat hossain. I have been working as a front end developer since September 2021 at <strong>BYSL GLOBAL TECHNOLOGY</strong> . I am a hardworking ,dedicated IT person. I have completed more than 10 projects which are fully professional.</p>
                        </div>
                    </div>
                    {/* <div className="col-md-2 col-sm-6 d-flex justify-content-center">
                        <div className="footerService">
                            <h4 className="text-white mt-5 mb-4">Services</h4>
                            <ul>
                                <li><a href="#">Full Stack Application</a></li>
                                <li><a href="#">Front End Developer</a></li>
                                <li><a href="#">Web Designer</a></li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center">
                        <div className="footerService">
                            <h4 className="text-white mt-5 mb-4">Recent Work</h4>
                            <ul>
                                <li><a href="https://kxtransports.com/" target="_blank" rel="noopener noreferrer">Kx Transport</a></li>
                                <li><a href="https://academist.vercel.app/" target="_blank" rel="noopener noreferrer">Academist</a></li>
                                <li><a href="https://newspaper420-ede7a.web.app/" target="_blank" rel="noopener noreferrer">Newspark</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-end">
                        <div className="footerService">
                            <h4 className="text-white mt-5 mb-4">Contact</h4>
                            <p>Phone: +8801814246749</p>
                            <p>Email: safawatdeveloper@gmail.com</p>
                            <p>Address: Kuril, Dhaka,Bangladesh </p>
                            <div className="socialIcon mt-5">
                            <a className="github" rel="noreferrer" href="https://github.com/sksafa?tab=repositories" target="_blank">{github}</a>
                            <a className="facebook" rel="noreferrer" href="https://www.facebook.com/sksafa45/" target="_blank">{facebook}</a>
                            <a className="instagram" rel="noreferrer" href="https://www.instagram.com/sksafa45/" target="_blank">{instagram}</a>
                            <a className="twitter" rel="noreferrer" href="https://twitter.com/sksafa45" target="_blank">{twitter}</a>
                            <a className="linkind" rel="noreferrer" href="https://www.linkedin.com/in/sksafa/" target="_blank">{LinkedIn}</a>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
          
        
           <div className="borderArea mb-5 mt-5 pt-5"></div>
            <div className="container">
                <div className="row">
                   <div className="col-12  ">
                   <p className="text-center text-white ">Copyright © 2021 safawat hossain</p>
                   </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;