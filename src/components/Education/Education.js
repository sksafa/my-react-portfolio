import React from 'react';
import './Education.css'

const Education = () => {
    return (
        <div>
            <div className="container mt-5">
                <h2 className="text-center pt-5 text1">My Academic Curriculum</h2>
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="totalDegree">
                            <div className="degree d-flex justify-content-between">
                                <h4>B.Sc in Computer Science And Engineering </h4>
                                <h4>April-2015 - June-2019</h4>
                            </div>
                            <li>University: Daffodil International University</li>
                            <li>CGPA: 3.32</li>
                            <li>Division: Dhaka</li>
                        </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                        <div className="totalDegree">
                            <div className="degree d-flex justify-content-between">
                                <h4>Higher Secondary Certificate </h4>
                                <h4>2011 - 2013</h4>
                            </div>
                            <li>College: Rajshahi Govt. City College</li>
                            <li>Board: Rajshahi</li>
                            <li>Division: Rajshahi</li>
                            <li>GPA: 5.00</li>
                        </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                        <div className="totalDegree">
                            <div className="degree d-flex justify-content-between">
                                <h4>Secondary School Certificate </h4>
                                <h4>2006 - 2011</h4>
                            </div>
                            <li>School: Taherpur High School</li>
                            <li>Board: Rajshahi</li>
                            <li>Division: Rajshahi</li>
                            <li>GPA: 5.00</li>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Education;