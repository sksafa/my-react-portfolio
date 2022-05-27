import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link to="/home"  className="navComponent" ><span className="logoStyle">SAFAWAT</span> HOSSAIN</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav navOption  ">
                           <Link to="" className="navComponent" >Home</Link>
                           <Link to="/experience" className="navComponent" >Work Experience</Link>
                           <Link to="/service" className="navComponent" >Service</Link>
                           <Link to="/Skill" className="navComponent" >Skills</Link>
                           <Link to="/Project" className="navComponent" >Project</Link>
                           <Link to="/Education" className="navComponent">Education</Link>
                           <Link to="/Contact" className="navComponent" >Contact</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;