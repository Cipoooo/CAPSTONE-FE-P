import "../Carrello/Carrello.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';


const Carrello = () =>{

    const [videogiochi, setVideogiochi] = useState([]);

    // Funzione per caricare i videogiochi dalla tua API
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
    
    return(
        <>
        <Container lg className="ContainerCarrello">
            <Row>
            <Col className="d-flex flex-column col-6 text-center text-white my-5">
            <h5>Il tuo Carrello è vuoto</h5>
            <h6>Non ci sono giochi nel tuo carrello, per cercare dei giochi clicca sul link Scopri di piu</h6>
            <a href="#" style={{textDecoration:"none", color:"white"}}>Scopri di piu</a>
            </Col>
            <Col className="d-flex flex-column col-6 text-white align-items-center my-5">
                <div>
                    Il tuo importo è di : 00.00$
                </div>
                <div className="mt-2">
                    <button className="OrdineBtn">Procedi all' ordine</button>
                </div>
            </Col>
            </Row>
        </Container>
        <Container lg className="ContainerCarrello2">
        <Row className="gx-3">
            <Col className="d-flex flex-column col-12 text-white text-center my-5">
            <h5 className="fw-3 fs-4">Aquista di nuovo :</h5>
            <h6>Non ci sono giochi che hai gia comprato, per cercare dei giochi clicca sul link Scopri di piu</h6>
            <Link to={"/search"}style={{textDecoration:"none", color:"white"}}>Scopri di piu</Link>
            </Col>
        </Row>
        </Container>
        <Container lg className="ContainerCarrello2">
        <Row className="gx-3 gy-3">
            <h5>Giochi che potrebbero piacerti:</h5>
            {videogiochi.slice(-12).map((videogioco,i) => (
                <Col key={i} className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <Card className="Cards bg-transparent">
                        <Card.Img src={videogioco.copertinaUrl} width={"50%"} height={"100%"} />
                        <Card.Body className="d-flex bg-transparent">
                            <Card.Title className="text-white">{videogioco.titolo + "   -   "}+{videogioco.prezzo}</Card.Title>
                        </Card.Body>
                    </Card>      
                </Col>
            ))}
        </Row>
        </Container>
        </>
    );
};
export default Carrello;