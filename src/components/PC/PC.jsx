import "../Xbox One/Xbox One.css";
import "../Main/MyMain.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PC = () =>{

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
         <div className="PCImageContainer">
            <div className="HeaderOverlay">
              <i className="bi bi-steam text-white steam-icon"></i>
              <h2 className="header-title">Scopri i migliori giochi per PC</h2>
              <p className="header-subtitle">Le ultime novità su Steam e altre piattaforme</p>
            </div>
          </div>
            <Container className="Sezione1">
              <Row className="gx-2 gy-2">
                <h3 className="h3 mt-5">In Tendenza <i class="bi bi-chevron-double-right text-white"></i></h3>
                {videogiochi.filter(videogioco => videogioco.piattaforma.includes("PC")).map((videogioco,i)=>(
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
export default PC;