import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLaptopCode, faDesktop } from '@fortawesome/free-solid-svg-icons'

import './Service.css';
import Footer from '../Footer/Footer';



const coding = <FontAwesomeIcon icon={faCode} />
const laptop = <FontAwesomeIcon icon={faLaptopCode} />
const desktop = <FontAwesomeIcon icon={faDesktop} />

const Service = () => {
    return (
        <>
        <section className="serviceSection">
            <div className="container">
                <h1 className="text-center text-white">Awesome Services</h1>
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="serviceCard">
                            <p className="serviceIcon">{coding}</p>
                            <h3>Full Stack Developer </h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="serviceCard">
                            <p className="serviceIcon">{laptop}</p>
                            <h3>Front End Developer </h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="serviceCard">
                            <p className="serviceIcon">{desktop}</p>
                            <h3>Web Designer</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
      
         </>
    );
};

export default Service;