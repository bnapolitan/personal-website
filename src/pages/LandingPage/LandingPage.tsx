//Packages
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//Images
import BackgroundImage from "../../assets/images/LandingImage.jpg"
import IconRow from "./IconRow/IconRow";

//Project files
import "./LandingPage.scss";

function LandingPage() {
    return (
        <>
            <Container className="landingContainer noPadding">
                <Container>
                    <Image className="landingPageBackground" src={BackgroundImage} alt="Beautiful mountain landscape" />
                </Container>

                <Container>
                    <Row className="buttonRow">
                        <Col>
                            <Link className="noHyperlink" to="/current-projects">
                                <Container className="col__hoverButton center">
                                    <h3>Current Projects</h3>
                                </Container>
                            </Link>
                        </Col>
                        <Col>
                            <Link className="noHyperlink" to="/gallery">
                                <Container className="col__hoverButton middleButton center">
                                    <h3>Gallery</h3>
                                </Container>
                            </Link>
                        </Col>
                        <Col>
                            <Link className="noHyperlink" to="/contact">
                                <Container className="col__hoverButton center">
                                    <h3>Contact</h3>
                                </Container>
                            </Link>
                        </Col>
                    </Row>
                </Container>

                <IconRow />
            </Container>
        </>
    );
}

export default LandingPage;