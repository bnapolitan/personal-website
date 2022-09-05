//Packages
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

//Project files
import styles from "./PictureRow.module.scss";

interface PictureRowProps {
    pictureList: string[]
}

function createPictureColumns(pictureList: string[])
{
    const pictureColumns: JSX.Element[] = [];

    let i=0;
    pictureList.forEach(pic => {
        pictureColumns.push(
            <Col key={i} className={styles.picContainer}>
                <Image className={styles.pic} src={pic} />
            </Col>
        );
        i++;
    })

    return pictureColumns;
}

function getUpTo4Pics(pictureColumns: JSX.Element[], startingIndex: number)
{
    const upTo4Pics: JSX.Element[] = [];
    for(let i=startingIndex; i<pictureColumns.length && i<startingIndex+4; i++)
    {
        upTo4Pics.push(pictureColumns[i]);
    }
    return upTo4Pics;
}

function createPictureGallery(props: PictureRowProps)
{
    const pictureColumns = createPictureColumns(props.pictureList);
    const listOfRows: JSX.Element[] = [];
    for(let i=0;i<pictureColumns.length;i+=4)
    {

        listOfRows.push(
            <Row key={i} className={styles.galleryContainer__row}>
                {getUpTo4Pics(pictureColumns, i)}
            </Row>
        );
    }

    return listOfRows;
}

function PictureRow(props: PictureRowProps) {

    return (
        <>
            <Container className={styles.galleryContainer}>
                {createPictureGallery(props)}
            </Container>
        </>
    );
}

export default PictureRow;
