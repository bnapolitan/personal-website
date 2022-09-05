//Packages
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

//Images
// import BackgroundImage from "../../assets/images/Dope_Mountains.jpg"

//Project files
import "./CurrentProjects.scss";

function CurrentProjects() {
    return (
        <>
            <Container className="containerCurrentProjects">
                <Row>
                    <Col>
                        <h3>Capital One ExamApp</h3>
                        <i className="bi bi-laptop text-warning" style={{ fontSize: 100 }}></i>
                    </Col>
                    <Col>
                        <h3>Capital One Cloud Resiliency Platform</h3>
                        <i className="bi bi-laptop text-warning" style={{ fontSize: 100 }}></i>
                    </Col>
                    <Col>
                        <h3>This Site!</h3>
                        <i className="bi bi-laptop text-warning" style={{ fontSize: 100 }}></i>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CurrentProjects;
