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
        <div className="MongoDb">
            <h2 className="text-center text-white pt-5 mt-5" >Javascript Project </h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12" >
                        <div className="mongoCard">
                            <img className="img-fluid" src={hungry} alt="" />
                            <h4 className="mt-2">Hungry Master </h4>
                            <p>When user are searching by first letter of food items name, This site will be showing Meal Item , and when click Meal Items it will be show the details of particular Meal Items. </p>
                            <p><b>Technologies used:</b> TheMealDb api,Bootstrap,html,css,Event Handler</p>
                          
                            <a className="visitButton" href={hungryLive} target="_blank">View Site</a>
                            <a className="codeButton" href={hungryCode} target="_blank">Client Code</a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12" >
                        <div className="mongoCard">
                            <img className="img-fluid" src={megaBusImage} alt="" />
                            <h4  className="mt-2">Mega Bus Booking </h4>
                            <p>This Project Simple Bus ticket Booking and calculation information</p>
                            <p><b>Technologies used:</b> Javascript,html,css</p>
                           
                            <a className="visitButton" href={megaBusLive} target="_blank">View Site</a>
                            <a className="codeButton" href={megaBusCode} target="_blank">Client Code</a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12" >
                        <div className="mongoCard">
                            <img className="img-fluid" src={weatherImage} alt="" />
                            <h4  className="mt-2">City Weather </h4>
                            <p>User Can get information weather of a city by searching city name. show temperature,Weather Status etc</p>
                            <p><b>Technologies used:</b>Weather api,Javascript,html,css</p>
                            <a className="visitButton" href={weatherLive} target="_blank">View Site</a>
                            <a className="codeButton" href={weatherCode} target="_blank">Client Code</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JavascriptProject;