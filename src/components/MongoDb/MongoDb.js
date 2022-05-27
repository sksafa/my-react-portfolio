import React from 'react';
import './MongoDb.css'
import mongo from '../../image/mongo.png'
import cl from '../../image/cl.png'
const timeZone = 'https://nodeassignment10.web.app/'

const MongoDb = () => {
    return (
        <div className="MongoDb">
            <h2 className="text-center text-white pt-5 mt-5" >Full Stack Project</h2>
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-sm-12" >
                        <div className="mongoCard">
                            <img className="img-fluid" src={cl} alt="" />
                            <h4 className="mt-2">Queak Cleaning Agency </h4>
                            <li>A customer can order a service and create review that is saved in the database.</li>
                            <li>An admin can see orders in the database and mark them if it’s on going, done or pending.</li>
                            <li>An admin can add a new service which will be added in the service section and save in database.</li>
                            <li>An admin can add another admin, create, delete service</li>
                            <li><b>Technologies used:</b> React, Bootstrap5, MongoDB, Node, Express, Firebase, Stripe.</li>
                            <a className="visitButton" href="https://quickcleannode.web.app/" target="_blank">View Site</a>
                            <a className="codeButton" href="https://github.com/sksafa/queak-cleaning" target="_blank">Client Code</a>
                            <a className="serverButton" href="https://github.com/sksafa/queak-cleaning-server" target="_blank">Server Code</a>
                        </div>
                    </div>




                    <div className="col-md-6 col-sm-12" >
                        <div className="mongoCard">
                            <img className="img-fluid" src={mongo} alt="" />
                            <h4 className="mt-2">Time Zone E-Com </h4>
                            <li> This site will be showing various watch of various brand.</li>
                            <li>Products can be added and removed from the database.</li>
                            <li>A customer order watch and save in database.</li>
                            <li>Filtering and showing order history for individual email.</li>
                            <li><b>Technologies used:</b> React, Bootstrap5, MongoDB, Node, Express, Firebase.</li>
                            <a className="visitButton" href={timeZone} target="_blank">View Site</a>
                            <a className="codeButton" href="https://github.com/sksafa/time-zone" target="_blank">Client Code</a>
                            <a className="serverButton" href="https://github.com/sksafa/time-zone-serverf" target="_blank">Server Code</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MongoDb;