import React from "react";
import "./Homes1.css";
// import image from 'react-bootstrap/image'
import Image1 from './image/Image1.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardImg from "react-bootstrap/esm/CardImg";


const homes1 = () => {
    return (
        <>
            <div className="body">
                <Card className="card">
                    <Card.Body className="card-body">

                        <Card.Text className="card-text" >
                            <div className="hr-div">
                                <hr className="hr-1" />
                                <hr className="hr-2" />
                            </div>
                            <h3 className="font-weight-bold card-text-h mt-2">Asia's No.1 Bug Bounty Platform
                                <br /> & <br />
                                Cyber Security Academy</h3>
                            <br />
                            <p className="fs-5 card-text-p"> Buggify has fast triage & Less Response time for Security Researchers Enhanced Security Solutions for
                                Companies High Quality Study Resources for students willing to make future in Cyber Security</p>
                            <br />
                            <div className="second-hr-div">
                                <hr className="second-hr-1" />
                                <hr className="second-hr-2" />
                            </div><br /><br /><br /><br />
                            <Button className="home-button mt-2">Why Buggify</Button>
                        </Card.Text>
                        <Card.Img src="{Image1}" className="card-img" />
                    </Card.Body>
                </Card>

            </div>
        </>
    )
}

export default homes1;