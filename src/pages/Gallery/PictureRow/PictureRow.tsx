//Packages
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

//Images
import Godafoss from "../../../assets/images/Godafoss.jpg"
import C1 from "../../../assets/images/C1_Campus.jpg"
import BenShoe from "../../../assets/images/Ben_in_The_Shoe.jpg"
import Tubing from "../../../assets/images/Tubing.jpeg"

//Project files
import styles from "./PictureRow.module.scss";

function PictureRow() {
    return (
        <>
            <Container className={styles.galleryContainer}>

                <Row className={styles.galleryContainer__row}>
                    <Col className={styles.picContainer}>
                        <Image className={styles.pic} src={Godafoss} />
                    </Col>
                    <Col className={styles.picContainer}>
                        <Image className={styles.pic} src={C1} />
                    </Col>
                    <Col className={styles.picContainer}>
                        <Image className={styles.pic} src={BenShoe} />
                    </Col>
                    <Col className={styles.picContainer}>
                        <Image className={styles.pic} src={Tubing} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PictureRow;
