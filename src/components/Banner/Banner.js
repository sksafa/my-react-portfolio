import React from 'react';
import './Banner.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const facebook = <FontAwesomeIcon icon={faFacebookF} />
const github = <FontAwesomeIcon icon={faGithub} />
const instagram = <FontAwesomeIcon icon={faInstagram} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const LinkedIn = <FontAwesomeIcon icon={faLinkedinIn} />


const Banner = () => {
    // const style = {
    //     // backgroundImage:` url(${bgImage})`,
    //     backgroundPosition: 'center center',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat'
    // }
    return (
        <div className="bannerSection pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 middle">
                            <div className="caption">
                                <h1 className="blueHeading">Hello, I'm Safawat Hossain </h1>
                                <h1 className="whiteHeading">I'm A Software Engineer</h1>

                                <div className="socialIcon">
                                    <a className="github" rel="noreferrer" href="https://github.com/sksafa?tab=repositories" target="_blank">{github}</a>
                                    <a className="facebook" rel="noreferrer" href="https://www.facebook.com/sksafa45/" target="_blank">{facebook}</a>
                                    <a className="instagram" rel="noreferrer" href="https://www.instagram.com/sksafa45/" target="_blank">{instagram}</a>
                                    <a className="twitter" rel="noreferrer" href="https://twitter.com/sksafa45" target="_blank">{twitter}</a>
                                    <a className="linkind" rel="noreferrer" href="https://www.linkedin.com/in/sksafa/" target="_blank">{LinkedIn}</a>
                                </div>
                               
                                   <a className="bannerButton" href="https://drive.google.com/file/d/1V2rvgnmKfLrNdU50GdwZvxmQ6CvwYm6J/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
                                   
                                  <Link to="./project">
                                      <button className="projectButton ml-3">See My Project</button>
                                  </Link>

                                  
                               
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
        </div>
    );
};
export default Banner;