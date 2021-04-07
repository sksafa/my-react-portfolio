import React from 'react';
import banner from '../../image/p1.png'
import './Banner.css'
import bgImage from '../../image/pic2.jpg'
//import bgImage from '../../image/pic2.jpg'
import bgImage22 from '../../image/pic5.jpg'
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
    const style = {
        // backgroundImage:` url(${bgImage})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div style={style}>
            <div className="overly">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 middle">
                            <div className="caption">
                                <h1 className="blueHeading">I'M SAFAWAT HOSSAIN </h1>
                                <h1 className="whiteHeading">I'M A FRONT END DEVELOPER</h1>
                                <p className="pTag">A full stack allaround designer that placerat in massa consectetur</p>

                                <div className="socialIcon">
                                    <a className="github" rel="noreferrer" href="https://github.com/sksafa?tab=repositories" target="_blank">{github}</a>
                                    <a className="facebook" rel="noreferrer" href="https://www.facebook.com/sksafa45/" target="_blank">{facebook}</a>
                                    <a className="instagram" rel="noreferrer" href="https://www.instagram.com/sksafa45/" target="_blank">{instagram}</a>
                                    <a className="twitter" rel="noreferrer" href="https://twitter.com/sksafa45" target="_blank">{twitter}</a>
                                    <a className="linkind" rel="noreferrer" href="https://www.linkedin.com/in/sksafa/" target="_blank">{LinkedIn}</a>
                                </div>
                                <Link to="/Project">
                                    <button className="bannerButton">See Project</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="rightSection">
                                <div className="rightImg">
                                    <img src={bgImage22} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;