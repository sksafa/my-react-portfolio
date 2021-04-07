import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'

const Project = () => {
    return (
        <div className="projectHeight mt-5">
            <div className="container mt-5 mb-5">
                <h2 className="text-center mt-5 pt-5 mb-5 text1">My Working Project</h2>

                <div className="row">

                <div className="col-md-4">
                        <div className="project text-center">
                            <h2>React With Node js & Mongodb Project</h2>
                            <p>Here is some project based on React js.</p>
                            <Link to="/mongoDbProject">
                                <button className="projectDetailsBtn">See All Project</button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="project text-center">
                            <h2>React Project</h2>
                            <p>Here is some project based on React js.</p>
                            <Link to="/ReactProject">
                                <button className="projectDetailsBtn">See All Project</button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="project text-center">
                            <h2>Javascript Project</h2>
                            <p>Here is some project based on Javascript js.</p>
                            <Link to="/JavascriptProject">
                                <button className="projectDetailsBtn">See All Project</button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="project text-center">
                            <h2>Bootstrap Project</h2>
                            <p>Here is some project based on Bootstrap.</p>
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

export default Project;