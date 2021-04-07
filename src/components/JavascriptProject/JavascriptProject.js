import React from 'react';
import hungry from '../../image/hungry.png'
import weatherImage from '../../image/weather.png'
import megaBusImage from '../../image/megabus.png'
 

const weatherLive = 'https://sksafa.github.io/weather-api-temp/';
const weatherCode = 'https://github.com/sksafa/weather-api-temp';

const hungryCode = 'https://github.com/sksafa/hungry-master';
const hungryLive = 'https://sksafa.github.io/hungry-master/';

const megaBusCode = 'https://github.com/sksafa/mega-bus';
const megaBusLive = 'https://sksafa.github.io/mega-bus/';


const JavascriptProject = () => {
    return (
        <div className="ReactProject bg">
            <h2 className="projectTitle mt-5" >Javascript Project </h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12" >
                        <div className="cardSection">
                            <img src={hungry} alt="" />
                            <h4>Hungry Master </h4>
                            <p>When user are searching by first letter of food items name, This site will be showing Meal Item , and when click Meal Items it will be show the details of particular Meal Items. </p>
                            <h4>Materials</h4>
                            <p>TheMealDb api,Bootstrap,html,css,Event Handler</p>
                            <a className="viewBtn" href={hungryLive} target="_blank">View Site</a>
                            <a className="codeBtn" href={hungryCode} target="_blank">Source Code</a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12" >
                        <div className="cardSection">
                            <img src={megaBusImage} alt="" />
                            <h4>Mega Bus Booking </h4>
                            <p>This Project Simple Bus ticket Booking and calculation information</p>
                            <h4>Materials</h4>
                            <p>Javascript,html,css </p>
                            <a className="viewBtn" href={megaBusLive} target="_blank">View Site</a>
                            <a className="codeBtn" href={megaBusCode} target="_blank">Source Code</a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12" >
                        <div className="cardSection">
                            <img src={weatherImage} alt="" />
                            <h4>City Weather </h4>
                            <p>User Can get information weather of a city by searching city name. show temperature,Weather Status etc</p>
                            <h4>Materials</h4>
                            <p>Weather api,Javascript,html,css</p>
                            <a className="viewBtn" href={weatherLive} target="_blank">View Site</a>
                            <a className="codeBtn" href={weatherCode} target="_blank">Source Code</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JavascriptProject;