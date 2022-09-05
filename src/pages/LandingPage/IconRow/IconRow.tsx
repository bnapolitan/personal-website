//Packages
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

//Images
import SolutionsArchitect from "../../../assets/images/SolutionsArchitect.png"
import ReactImg from "../../../assets/images/React.png"
import Docker from "../../../assets/images/Docker.webp"
import Go from "../../../assets/images/Go-Logo_Blue.png"

//Project files
import "./IconRow.scss";

function IconRow() {
    return (
        <>
            <Container className="iconContainer">
                <Row>
                    <Col className="iconContainer__text" lg={3}>
                        <h3>Specialties</h3>
                    </Col>
                </Row>

                <Row className="iconContainer__row">
                    <Col className="picContainer">
                        <Image className="pic" src={SolutionsArchitect} />
                    </Col>
                    <Col className="picContainer">
                        <Image className="pic reactPic" src={ReactImg} />
                    </Col>
                    <Col className="picContainer">
                        <Image className="pic" src={Docker} />
                    </Col>
                    <Col className="picContainer">
                        <Image className="pic" src={Go} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default IconRow;
