//Packages
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

//Images
// import BackgroundImage from "../../assets/images/Dope_Mountains.jpg"

//Project files
import "./Gallery.scss";
import PictureRow from './PictureRow/PictureRow';

function Gallery() {
    return (
        <>
            <Container className="containerCurrentProjects">

                <PictureRow />
                
            </Container>
        </>
    );
}

export default Gallery;
