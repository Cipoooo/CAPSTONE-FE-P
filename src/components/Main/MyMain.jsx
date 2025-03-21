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
    {/*<MyHeader></MyHeader>*/}
    <Container fluid className="HeroSection" id="HeaderStatic">
  <div className="HeroOverlay"></div>
  {videogiochi.length > 0 && (
    <img className="HeroImage" src={videogiochi[1].copertinaUrl} alt="Copertina gioco Elden Ring" />
  )}
  <div className="HeroContent">
    <h1 className="HeroTitle mt-3">Benvenuto su EpiGames </h1>
    <p className="HeroSubtitle">il miglior marketplace per giochi in versione digitale</p>
    <Link to="/search" className="HeroButton">Scopri Ora</Link>
  </div>
</Container>
    <Container fluid className="MainContainer">
      <Container className="Sezione1">
      <Row className="gx-2 gy-2">
        <h3 className="h3">In Tendenza <i class="bi bi-chevron-double-right text-white"></i></h3>
        {videogiochi.slice(94).map((videogioco,i)=>(
           <Col key={i} className="col-6 col-md-6 col-xl-3 col-xxl-2 px-0 d-inline">
              <div className="GameBg">
                    <Link to={`/game/${videogioco.id}`}><img className="ImgMain" height={"100px"} width={"100px"} src={videogioco.copertinaUrl} alt="CopertinaVideogioco" /></Link>
                    <div className="d-flex flex-column justify-content-centre"> 
                      <h6 className="text-white m-0 p-0">{videogioco.titolo}</h6>
                      <p className="text-danger m-0 p-0">{videogioco.prezzo}£</p>
                    </div>
                </div>
            </Col>
        ))}
        </Row>
        <br />
        <Row className="gx-2 gy-2">
        <h3 className="h3">Usciti da poco <i class="bi bi-chevron-double-right text-white"></i></h3>
        {videogiochi.slice(0,6).map((videogioco,i)=>(
            <Col key={i} className="col-6 col-md-6 col-xl-3 col-xxl-2 px-0 d-inline">
                <div className="GameBg">
                <Link to={`/game/${videogioco.id}`}><img className="ImgMain" height={"100px"} width={"100px"} src={videogioco.copertinaUrl} alt="CopertinaVideogioco" /></Link>
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
                <Link to={`/game/${videogioco.id}`}><img className="ImgMain" height={"100px"} width={"100px"} src={videogioco.copertinaUrl} alt="CopertinaVideogioco" /></Link>
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
          <Row className="d-flex">
            <Col className="col-6 col-md-4">
            <Row className="d-flex flex-column justify-content-center align-items-center">
              {videogiochi.slice(0,4).map((videogioco,i) => (
                <Col style={{width:"80%",maxHeight:"65%"}}  className="d-flex align-items-center flex-column">
                <Link to={`/game/${videogioco.id}`}><img id="Sezione3Colonna" width={"150px"} height={"150px"} src={videogioco.copertinaUrl} alt="Copertina Videogioco"></img></Link>
                <div className="d-flex mt-3">
                  <p id="DescrizioneGioco">{videogioco.titolo +"  -  "}</p>
                  <p id="DescrizioneGioco">{videogioco.prezzo}$</p>
                </div>
                </Col>
              ))}
            </Row>
            </Col>
            <Col className="col-6 col-md-4">
            <Row className="d-flex flex-column justify-content-center align-items-center">
              {videogiochi.slice(5,9).map((videogioco,i) => (
                <Col style={{width:"80%",maxHeight:"50%"}}  className="d-flex align-items-center flex-column">
                <Link to={`/game/${videogioco.id}`}><img id="Sezione3Colonna" width={"150px"} height={"150px"}  src={videogioco.copertinaUrl} alt="Copertina Videogioco"></img></Link>
                <div className="d-flex mt-3">
                  <p id="DescrizioneGioco">{videogioco.titolo  +"  -  "}</p>
                  <p id="DescrizioneGioco">{videogioco.prezzo }$</p>
                </div>
                </Col>
              ))}
            </Row>
            </Col>
            <Col className="d-none d-md-flex col-6 col-md-4">
            <Row className="d-flex flex-column justify-content-center align-items-center">
              {videogiochi.slice(10,14).map((videogioco,i) => (
                <Col  style={{width:"80%",maxHeight:"65%"}}  className="d-flex align-items-center flex-column">
                <Link to={`/game/${videogioco.id}`}><img id="Sezione3Colonna" width={"150px"} height={"150px"}  src={videogioco.copertinaUrl} alt="Copertina Videogioco"></img></Link>
                <div className="d-flex mt-3">
                  <p id="DescrizioneGioco">{videogioco.titolo  +"  -  "}</p>
                  <p id="DescrizioneGioco">{videogioco.prezzo}$</p>
                </div>
                </Col>
              ))}
            </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
   );
}    
export default MyMain;  