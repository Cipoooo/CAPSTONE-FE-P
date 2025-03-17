import "../Main/MyMain.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyHeader from "../Header/MyHeader";

const  MyMain = () => {

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

   return(
    <>
    <MyHeader></MyHeader>
    <Container fluid className="MainContainer">
      <Container className="Sezione1">
      <Row className="gx-2 gy-2">
          <Link to={"/tendenza"}><h3 className="h3">In Tendenza <i class="bi bi-chevron-double-right text-white"></i></h3></Link>
        {videogiochi.slice(96).map((videogioco,i)=>(
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
        <br />
        <Row className="gx-2 gy-2">
          <Link to={"/new"}><h3 className="h3">Usciti da poco <i class="bi bi-chevron-double-right text-white"></i></h3></Link>
        {videogiochi.slice(96).map((videogioco,i)=>(
            <Col key={i} className="col-6 col-md-6 col-xl-3 col-xxl-2 px-0 d-inline">
                <div className="GameBg">
                    <img className="ImgMain" height={"100px"} width={"100px"} src={videogioco.copertinaUrl} alt="CopertinaVideogioco" />
                    <div className="d-flex flex-column justify-content-centre"> 
                      <h6 className="text-white m-0 p-0">{videogioco.titolo}</h6>
                      <p className="text-danger m-0 p-0">{videogioco.prezzo}£</p>
                    </div>
                </div>
            </Col>
        ))}
        </Row>
      </Container>
        <br />
        <Container fluid  className="PlatformBg">
          <div className="d-flex justify-content-evenly">
            <div className="d-flex align-items-center">
            <i className="fs-1 pe-3 bi bi-cloud-download"></i>
              <div className="d-flex flex-column">
                <h5 className="mb-0  d-none d-sm-inline">Download Veloce</h5>
                <h6 className="mb-0  d-none d-lg-inline">Disponibile su tutte le piattaforme</h6>
              </div>
            </div>
            <div className="VerticalSpacer"></div>
            <div className="d-flex align-items-center">
            <i className="fs-1 pe-3 bi bi-safe"></i>
              <div className="d-flex flex-column">
                <h5 className="mb-0  d-none d-sm-inline">Pagamenti Sicuri</h5>
                <h6 className="mb-0  d-none d-lg-inline">Grazie alla piattaforma Stripe</h6>
              </div>
            </div>
            <div className="VerticalSpacer"></div>
            <div className="d-flex align-items-center">
            <i className="fs-1 pe-3 bi bi-shield-fill-check"></i>
              <div className="d-flex flex-column">
                <h5 className="mb-0  d-none d-sm-inline">Sito Protetto</h5>
                <h6 className="mb-0  d-none d-lg-inline">Con oltre 1000 giochi.</h6>
              </div>
            </div>  
            <div className="VerticalSpacer"></div>
          </div>
        </Container>
        <br />
        <Container className="Sezione2" style={{width:"60%"}}>
        <h3 className="text-white fw-bold">Ti Consigliamo :</h3>
        <br />
        <Row className="gx-2 gy-2">
        {videogiochi.slice(85).map((videogioco,i)=>(
            <Col key={i} className="col-6 col-md-4">
                <div className="GameBg">
                    <img className="ImgMain" height={"100px"} width={"100px"} src={videogioco.copertinaUrl} alt="CopertinaVideogioco" />
                    <div className="d-flex flex-column justify-content-centre"> 
                      <h6 className="text-white m-0 p-0">{videogioco.titolo}</h6>
                      <p className="text-danger m-0 p-0">{videogioco.prezzo}£</p>
                    </div>
                </div>
            </Col>
        ))}
        </Row>
        </Container>
        <br />
        <Container fluid  className="PlatformBg">
          <div className="d-flex justify-content-evenly">
            <div className="d-flex align-items-center">
            <Link to={"/playstation"}><img className="PlatformLogo" src="../src/assets/playstation.svg" alt="" /></Link>
              <div className="d-flex flex-column ms-2">
                <h5 className="mb-0 fs-5 d-none d-md-inline">Playstation</h5>
                <h6 className="mb-0 fs-6 d-none d-lg-inline">PS4-PS5</h6>
              </div>
            </div>
            <div className="VerticalSpacer"></div>
            <div className="d-flex align-items-center">
            <Link to={"/xbox"}><img className="PlatformLogo" src="../src/assets/xbox.svg" alt="" /></Link>
              <div className="d-flex flex-column ms-2">
                <h5 className="mb-0 fs-5 d-none d-md-inline">XBOX</h5>
                <h6 className="mb-0 fs-6 d-none d-lg-inline">XBOX One-XBOX Series S\X</h6>
              </div>
            </div>
            <div className="VerticalSpacer"></div>
            <div className="d-flex align-items-center">
            <Link to={"/nintendo"}><img className="PlatformLogo" src="../src/assets/nintendo-switch.svg" alt="" /></Link>
              <div className="d-flex flex-column ms-2">
                <h5 className="mb-0 fs-5 d-none d-md-inline">Nintendo</h5>
                <h6 className="mb-0 fs-6 d-none d-lg-inline">Con oltre 1000 giochi.</h6>
              </div>
            </div>  
            <div className="VerticalSpacer"></div>
            <div className="d-flex align-items-center">
            <Link to={"/pc"}><img className="PlatformLogo" src="../src/assets/pc-display.svg" alt="" /></Link>
              <div className="d-flex flex-column ms-2">
                <h5 className="mb-0 fs-5 d-none d-md-inline">PC</h5>
                <h6 className="mb-0 fs-6 d-none d-lg-block">Con oltre 1000 giochi.</h6>
              </div>
            </div>  
          </div>
        </Container>
        <br />
        <Container className="Sezione3">
          <Link to={"/sake"}><h3 className="h3">On Sale <i class="bi bi-chevron-double-right text-white"></i></h3></Link>
          <Row className="gx-2 gy-2">
        {videogiochi.slice(-12).map((videogioco,i)=>(
            <Col key={i} className="col-6 col-md-4">
                <div className="GameBg">
                    <img className="ImgMain" height={"100px"} width={"100px"} src={videogioco.copertinaUrl} alt="CopertinaVideogioco" />
                    <div className="d-flex flex-column justify-content-centre"> 
                      <h6 className="text-white m-0 p-0">{videogioco.titolo}</h6>
                      <p className="text-danger m-0 p-0">{videogioco.prezzo}£</p>
                    </div>
                </div>
            </Col>
        ))}
        </Row>
        </Container>
      </Container>
    </>
   );
}    
export default MyMain;  