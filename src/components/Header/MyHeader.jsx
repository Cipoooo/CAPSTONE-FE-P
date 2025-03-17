import "../Header/MyHeader.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from "react-bootstrap";


const MyHeader = () => {

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
  

    return (
        <>
      <Container lg className="Carousel d-flex justify-content-center">
      <Carousel style={{width:"50%", height:"60%",}}>
      {videogiochi.slice(-3).map((videogiocho,i) => (
        <Carousel.Item interval={1000} key={i}>
        <img src={videogiocho.copertinaUrl} width={"100%"} height={"400"}/>
        <Carousel.Caption>
          <h3>{videogiocho.titolo}</h3>
          <p>{videogiocho.prezzo}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
      </Container> 
    {/*<Container fluid>
        <Carousel className="Carousel">
        {videogiochi.slice(-3).map((videogioco,i) => (
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
    </Container>*/}
        </>
    );
};
export default MyHeader;