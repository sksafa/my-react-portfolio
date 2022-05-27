import React from 'react';
import { Link } from 'react-router-dom';
import './MyProject.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHockeyPuck } from '@fortawesome/free-solid-svg-icons';
import { faReact,faBootstrap  } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'


const react = <FontAwesomeIcon icon={faReact} />
const jsss = <FontAwesomeIcon icon={faJsSquare} />
const faHockey = <FontAwesomeIcon icon={faHockeyPuck} />
const Bootstrap = <FontAwesomeIcon icon={faBootstrap} />
const MyProject = () => {
    return (
        <div className="MyProject">
            <div className="container">
                <h2 className="text-center text-white">My Working Project</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="projectCard">
                            <p className="serviceIcon">{faHockey}</p>
                            <h2>Full Stack Project</h2>
                            <p>Here is some project based on React.js, Node.js, MongoDb, Express.js, Firebase, Stripe</p>
                            <Link to="/mongoDbProject">
                                <button className="projectDetailsBtn">See All Project</button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="projectCard">
                        <p className="serviceIcon">{react}</p>
                            <h2>React Project</h2>
                            <p>Here is some project based on React,Component,Props,React Routing,React hook, API</p>
                            <Link to="/ReactProject">
                                <button className="projectDetailsBtn">See All Project</button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="projectCard">
                        <p className="serviceIcon">{jsss}</p>
                            <h2>Javascript Project</h2>
                            <p>Here is some project based on Javascript js Es6,Dom,Event Handeller,Array Function,Object,Class,Json Api.</p>
                            <Link to="/JavascriptProject">
                                <button className="projectDetailsBtn">See All Project</button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="projectCard">
                        <p className="serviceIcon">{Bootstrap}</p>
                            <h2>Bootstrap Project</h2>
                            <p>Here is some project based on HTML5, CSS3, Bootstrap.</p>
                            <Link to="/BootstrapProject">
                                <button className="projectDetailsBtn">See All Project</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyProject;