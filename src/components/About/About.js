import React from 'react';
import './About.css';
import ab from '../../image/ab.jpg';

const About = () => {
    return (
        <section className="aboutSection pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <img className="img-fluid imageStyle" src={ab} alt="" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <div className="aboutDes">
                            <h2>About Me</h2>
                            <p>I'm an enthusiastic, responsible and hard working IT person. I’m always hungry for new technologies, a great fascination with programming and web development.

                            I’m comfortable with Javascript (ES6), Node.js, React.js, Redux, Express.Js, Bootstrap, Material UI, HTML5, CSS3, Firebase, and MongoDB.</p>
                            <p>I want to be Professional Full Stack Developer, it's my dream.I love to learn new tech and new languages.</p>
                           
                        </div>
                       
                        <div className="">
                        <h2 className="text-white">Basic Info</h2>
                            <div className="row aboutInfo">
                            
                                <div className="col-md-6">
                                    <table>
                                        <tr>
                                            <td><p>Date Of Birth: </p></td>
                                            <td><p> 12 April 1996</p></td>
                                        </tr>
                                        <tr>
                                            <td><p>Email:</p></td>
                                            <td><p>safawatdeveloper@gmail.com</p></td>
                                        </tr>
                                        <tr>
                                            <td><p>website:</p></td>
                                            <td><p>www.sksafa.com</p></td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="col-md-6">
                                    <table>
                                        <tr>
                                            <td><p>Phone:</p></td>
                                            <td><p>+8801974594119</p></td>
                                        </tr>
                                        <tr>
                                            <td><p>Address:</p></td>
                                            <td><p>Joarshahara, Dhaka</p></td>
                                        </tr>
                                        <tr>
                                            <td><p>Work Status: </p></td>
                                            <td><p>  Available</p></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;