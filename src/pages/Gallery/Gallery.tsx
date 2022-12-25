//Packages
import { Container } from "react-bootstrap";

//Images
// import BackgroundImage from "../../assets/images/Dope_Mountains.jpg"
import BenShoe from "../../assets/images/Ben_in_The_Shoe.jpg";
import BoyBand from "../../assets/images/BoyBand.jpg";
import C1 from "../../assets/images/C1_Campus.jpg";
import Godafoss from "../../assets/images/Godafoss.jpg";
import IcelandNolan from "../../assets/images/IcelandNolanFjallsarlon.jpg";
import Skiing from "../../assets/images/Skiing_1.jpg";
import Tubing from "../../assets/images/Tubing.jpeg";

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
