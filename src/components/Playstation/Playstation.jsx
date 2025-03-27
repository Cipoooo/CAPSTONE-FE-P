import "../Xbox One/Xbox One.css";
import "../Main/MyMain.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col,Card,Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Playstation = () =>{

     const [videogiochi, setVideogiochi] = useState([]);
    
        const loadVideogiochi = async () => {
          try {
            const response = await axios.get('http://localhost:8080/api/videogiochi');
            setVideogiochi(response.data);
          } catch (error) {
            console.error("Errore nel caricare i videogiochi", error);
          }
        };
      
        useEffect(() => {
          loadVideogiochi();
        }, []);
    
        console.log(videogiochi)

    return(
        <>
         <Container sm className="MainContainerXbox">
         <div className="PlaystationImageContainer">
         <div className="HeaderOverlay">
         <i class="bi bi-playstation text-white steam-icon"></i>
              <h2 className="header-title">Scopri i migliori giochi per Playstation</h2>
              <p className="header-subtitle">Le ultime novità per PS4 e PS5</p>
            </div> 
            <div className="d-flex justify-content-center mt-3">
                <Link to={"/PS4"}><button className="buttonXbox rounded-pill p-2 mb-3 px-3 me-3">PS4</button></Link>
                <Link to={"/PS5"}><button className="buttonXbox rounded-pill p-2 px-3">PS5</button></Link>
            </div>
            </div>
            <Container className="Sezione1">
              <Row className="gx-4 gy-2">
                <h3 className="h3 mt-5">In Tendenza <i class="bi bi-chevron-double-right text-white"></i></h3>
                {videogiochi.filter(videogioco => !videogioco.piattaforma.includes("Xbox One, PC, Nintendo Switch,Xbox Series X/S")).map((videogioco,i)=>(
                   <Col key={i} xs={12} sm={6} md={4} lg={4} className="mb-4">
                   <Link
                     style={{ textDecoration: "none" }}
                     to={`/game/${videogioco.id}`}
                   >
                     <Card className="game-card">
                       <div className="GameImageContainer">
                         <Image
                           src={videogioco.copertinaUrl}
                           alt={videogioco.titolo}
                           className="game-image2"
                           fluid
                         />
                       </div>
                       <Card.Body className="game-info d-flex justify-content-between align-items-center">
                         <Card.Title className="game-title2">
                           {videogioco.titolo}
                         </Card.Title>
                         <Card.Text className="game-price2">
                           {videogioco.prezzo}€
                         </Card.Text>
                       </Card.Body>
                     </Card>
                   </Link>
                 </Col>
                ))}
                </Row>
                </Container>
            </Container>
        </>
    );
};
export default Playstation;