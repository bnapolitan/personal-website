//Packages
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

//Images
// import BackgroundImage from "../../assets/images/Dope_Mountains.jpg"
import Godafoss from "../../assets/images/Godafoss.jpg"
import C1 from "../../assets/images/C1_Campus.jpg"
import BenShoe from "../../assets/images/Ben_in_The_Shoe.jpg"
import Tubing from "../../assets/images/Tubing.jpeg"
import BoyBand from "../../assets/images/BoyBand.jpg"
import IcelandNolan from "../../assets/images/IcelandNolanFjallsarlon.jpg"
import Skiing from "../../assets/images/Skiing_1.jpg"

//Project files
import "./Gallery.scss";
import PictureRow from './PictureRow/PictureRow';

function Gallery() {
    return (
        <>
            <Container className="containerCurrentProjects">

                <PictureRow pictureList={[Godafoss, C1, BenShoe, Tubing, BoyBand, IcelandNolan, Skiing]} />
                
            </Container>
        </>
    );
}

export default Gallery;
