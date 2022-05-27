import React from 'react';
import bdSport from '../../image/bdsport.png'
import clubList from '../../image/euroclube.png'
import firebase from '../../image/firebase.png'



const bdPlayer = 'https://goofy-johnson-6c402e.netlify.app/?fbclid=IwAR2s7ON0jfmN7uZlsOQr-AMhzJ9rrRWoFNHSbwJTYUJco7E0cOYKHusvrwI';

const euroClub = 'https://affectionate-easley-639787.netlify.app/';
const firebaseProject = 'https://react-auth-assignment.firebaseapp.com/'

const ReactProject = () => {
    return (
        <div className="MongoDb">
            <h2 className="text-center text-white pt-5 mt-5" >React Project</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12" >
                        <div className="mongoCard">
                            <img className="img-fluid" src={clubList} alt="" />
                            <h4 className="mt-2">European Football Club </h4>
                            <p>This site will be showing European Club List , and when click Explore Button it will be show the details of particular club information and short description about club </p>
                            <p><b>Technologies used:</b> React,React Router,useState, useEffect, usePram, Using Bootstrap,The sportDb api,font awesome ,responsive for mobile and desktop</p>
                            <a className="visitButton" href={euroClub} target="_blank">View Site</a>
                            <a className="codeButton" href="https://github.com/sksafa/european-club" target="_blank" >Client Code</a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12" >
                        <div className="mongoCard">
                            <img className="img-fluid" src={bdSport} alt="" />
                            <h4 className="mt-2">Create Team & Budget </h4>
                            <p>Selecting player for cricket team and showing information of how much player include in team and their salary. Calculated total selected player salary. </p>
                            <p><b>Technologies used:</b> React, useState, useEffect, usePram, React Bootstrap,Json Data,font awesome ,Event Handler</p>
                            <a className="visitButton" href={bdPlayer} target="_blank">View Site</a>
                            <a className="codeButton" href="https://github.com/sksafa/Team-budget" target="_blank">Client Code</a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12" >
                        <div className="mongoCard">
                            <img className="img-fluid" src={firebase} alt="" />
                            <h4 className="mt-2">Fast Ride </h4>
                            <p>This site will be showing various rider option for user, and when choice ride option select its turn into login page .then user can login manually or sign with google.</p>
                            <p><b>Technologies used:</b> Firebase authentication ,React,Context api,React Router, useState, useEffect, usePram, React Bootstrap,Json Data,font awesome</p>
                            <p> </p>
                            <a className="visitButton" href={firebaseProject} target="_blank">View Site</a>
                            <a className="codeButton" href="https://github.com/sksafa/fast-ride" target="_blank">Client Code</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReactProject;