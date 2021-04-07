import React from 'react';
import mongo from '../../image/mongo.png'
const timeZone = 'https://nodeassignment10.web.app/'

const MongoDb = () => {
    return (
        <div className="ReactProject bg">
            <h2 className="projectTitle pt-5 mt-5" >Node Js ,MongoDb Project</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 col-sm-12" >
                        <div className="cardSection">
                            <img src={mongo} alt="" />
                            <h4>Time Zone </h4>
                            <p>This site will be showing various watch of various brand , and when click buy now Button it will be show the order info of product of selected product.when click checkout it will be confirm the order and user can view his order list. A user can also add product and delete product. </p>
                            <h4>Materials</h4>
                            <p>Node Js,Express Js,MongoDb Curd,React,React Router,useState, useEffect, usePram, Using Bootstrap,The sportDb api,font awesome ,responsive for mobile and desktop</p>
                            <a className="viewBtn" href={timeZone} target="_blank">View Site</a>
                            <a className="codeBtn" href="">Source Code</a>
                        </div>
                    </div>
                    <div className="col-md-3"></div>

                </div>
            </div>
        </div>
    );
};

export default MongoDb;