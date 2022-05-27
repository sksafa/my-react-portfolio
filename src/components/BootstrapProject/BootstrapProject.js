import React from 'react';
import panda from '../../image/panda.png'
import landing from '../../image/elanding.png'
import pro from '../../image/pro.png'

const eLandingLive = 'https://sksafa.github.io/elanding-page/';
const eLandingCode = 'https://github.com/sksafa/elanding-page';

const pandaLive = 'https://sksafa.github.io/panda-commerce';
const pandaCode = 'https://github.com/sksafa/panda-commerce';

const proLive = 'https://sksafa.github.io/safawat-portfolio/'
const proCode = 'https://github.com/sksafa/safawat-portfolio'

const BootstrapProject = () => {
    return (
        <div className="MongoDb">
            <h2 className="text-center text-white pt-5 mt-5" >Bootstrap Project </h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12" >
                        <div className="mongoCard">
                            <img className="img-fluid" src={landing} alt="" />
                            <h4 className="mt-2">eLanding Page </h4>
                            <p> Ecommerce Landing Page for life style category </p>
                            <h4>Materials</h4>
                            <p>Html-5,Css-3,bootstrap 5</p>
                            <a className="visitButton"  href={eLandingLive} target="_blank">View Site</a>
                            <a className="codeButton" href={eLandingCode} target="_blank">Client Code</a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12" >
                        <div className="mongoCard">
                            <img className="img-fluid" src={panda} alt="" />
                            <h4 className="mt-2">Pandda Commerce </h4>
                            <p>This is Simple Landing page for ecommerce </p>
                            <h4>Materials</h4>
                            <p>Html-5,Css-3,bootstrap 5</p>
                            <a className="visitButton" href={pandaLive} target="_blank">View Site</a>
                            <a className="codeButton" href={pandaCode} target="_blank">Client Code</a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12" >
                        <div className="mongoCard">
                            <img className="img-fluid" src={pro} alt="" />
                            <h4 className="mt-2">Simple Portfolio</h4>
                            <p>This is Simple portfolio page for fun practice </p>
                            <h4>Materials</h4>
                            <p>Html-5,Css-3</p>
                            <a className="visitButton" href={proLive} target="_blank">View Site</a>
                            <a className="codeButton" href={proCode} target="_blank">Client Code</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BootstrapProject;