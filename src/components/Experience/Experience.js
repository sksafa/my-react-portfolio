import React from 'react';
import './Experience.css'

const Experience = () => {
    return (
        <div className='experience'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center"><h4 className="heading"><span className="logoStyle">Work</span> Experience</h4></div>
                    <div className="col-md-6 col-sm-12">
                        <div className="workArea">
                            <h3>Executive Software Engineer</h3>
                            <h4>AT BYSL GLOBAL TECHNOLOGY</h4>
                            <h6>Since September 2021 to Continue</h6>
                            <p>I have been working as a Executive Software Engineer since october 2021 at BYSL GLOBAL TECHNOLOGY . I am a hardworking ,dedicated IT person. I have completed more than 10 projects which are fully professional.</p>
                            <p>Develop single page web applications from front to backend using React, Express, Mongose.</p>
                            <p>Implemented enhancements that improve web fuctionality and responsiveness.
                            </p>
                            <p>Implemented user authentication, role, login, register, jwt, private and protected route in website.</p>
                            <p>Build Filter, Find, Search, Get, Post, Delete functionality in a website by using redux.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="projectArea">
                            <h3>Some Projects</h3>
                            <div className="projectSample">
                                <a href="https://kxtransports.com/" target="_blank" rel="noopener noreferrer">Kx Transports</a>
                                <a href="https://academist.vercel.app/" target="_blank" rel="noopener noreferrer">Academist</a>
                                <a href="https://quickcleannode.web.app/" target="_blank" rel="noopener noreferrer">
                                    Quick Cleaning
                                </a>
                                <a href="https://newspaper420-ede7a.web.app/" target="_blank" rel="noopener noreferrer">News Park</a>
                                <a href="https://nodeassignment10.web.app/" target="_blank" rel="noopener noreferrer">Watch Ecom</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;