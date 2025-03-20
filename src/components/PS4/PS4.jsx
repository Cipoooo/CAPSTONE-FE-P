import "../Xbox One/Xbox One.css";
import "../Main/MyMain.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PS4 = () =>{

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
            <div className="d-flex justify-content-center mt-3">
                <Link to={"/Playstation"}><button className="buttonXbox rounded-pill p-2 px-3 me-3">Playstation</button></Link>
                <Link to={"/PS5"}><button className="buttonXbox rounded-pill p-2 px-3">PS5</button></Link>
            </div>
              <Container className="Sezione1">
              <Row className="gx-2 gy-2">
                <h3 className="h3">In Tendenza <i class="bi bi-chevron-double-right text-white"></i></h3>
                {videogiochi.filter(videogioco => videogioco.piattaforma.includes("Xbox")).map((videogioco,i)=>(
                    <Col key={i} className="col-6 col-md-6 col-xl-3 col-xxl-2 px-0 d-inline">
                      <Link to={"/game"}><div className="GameBg">
                            <img className="ImgMain" height={"100px"} width={"100px"} src={videogioco.copertinaUrl} alt="CopertinaVideogioco" />
                            <div className="d-flex flex-column justify-content-centre"> 
                              <h6 className="text-white m-0 p-0">{videogioco.titolo}</h6>
                              <p className="text-danger m-0 p-0">{videogioco.prezzo}£</p>
                            </div>
                        </div></Link>
                    </Col>
                ))}
                </Row>
                </Container>
            </Container>
        </>
    );
};
export default PS4;