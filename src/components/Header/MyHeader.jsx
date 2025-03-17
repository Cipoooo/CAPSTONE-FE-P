import "../Header/MyHeader.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from "react-bootstrap";


const MyHeader = () => {

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
  
    // Carica i videogiochi quando il componente si monta
    useEffect(() => {
      loadVideogiochi();
    }, []);
  

    return (
        <>
    <Container fluid>
        <Carousel className="Carousel">
        {videogiochi.slice(97).map((videogioco,i) => (
         <Carousel.Item className="CarouselItem" key={i} >
            <div className="CarouselImgContainer"> 
                <img className="CarouselImg" src={videogioco.copertinUrl}/>
            </div>
           <Carousel.Caption>
          <h3 className="CarouselTitle">{videogioco.titolo}</h3>
          <h4 className="CarouselTitle">{videogioco.piattaforma}</h4>
          <p className="CarouselPrice">{videogioco.prezzo}</p>
            </Carousel.Caption>
         </Carousel.Item>
         ))} 
        </Carousel>
    </Container>
        </>
    );
};
export default MyHeader;