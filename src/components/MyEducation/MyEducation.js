import React from 'react';
import './MyEducation.css'

const MyEducation = () => {
    return (
        <div className="myEducation">
            <div className="container">
                <h2 className="text-center text-white">My Education</h2>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="educationInfo">
                            <p className="yearText">2015-2019</p>
                            <h4>B.Sc in Computer Science And Engineering</h4>
                            <h5>University: Daffodil International University</h5>
                            <p>CGPA: 3.32 Out of 4.00 </p>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                    <div className="educationInfo">
                             <p className="yearText">2011-2013</p>
                            <h4>Higher Secondary Certificate</h4>
                            <h5>College: Rajshahi Govt. City College</h5>
                            <p>GPA: 5.00 out of 5.00</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                    <div className="educationInfo">
                            <p className="yearText">2006-2011</p>
                            <h4>Secondary School Certificate</h4>
                            <h5>School: Taherpur High School</h5>
                            <p>GPA: 5.00 out of 5.00</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                    <div className="educationInfo">
                            <p className="yearText">2021-Continuing</p>
                            <h4>Complete Web Development Course</h4>
                            <h5>institution: Programing Hero</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyEducation;