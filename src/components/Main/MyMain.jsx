import "../Main/MyMain.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyHeader from "../Header/MyHeader";

const MyMain = () => {
  const [videogiochi, setVideogiochi] = useState([]);
  const [caricaAltro, setCaricaAltro] = useState(false);

  const loadVideogiochi = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/videogiochi");
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
      <Container fluid className="HeroSection" id="HeaderStatic">
        <div className="HeroOverlay"></div>
        {videogiochi.length > 0 && (
          <img
            className="HeroImage"
            src={videogiochi[1].copertinaUrl}
            alt="Copertina gioco Elden Ring"
          />
        )}
        <div className="HeroContent">
          <h1 className="HeroTitle mt-5">Benvenuto su EpiGames </h1>
          <hr style={{height:"2px",borderWidth:"",borderColor:"#ffff"}} />
          <p className="HeroSubtitle">
            il miglior marketplace per giochi in versione digitale
          </p>
          <Link to="/search" className="HeroButton">
            Scopri Ora
          </Link>
        </div>
      </Container>
      <Container fluid className="MainContainer">
        <Container className="Sezione1">
          <Row className="gx-4 gy-2">
            <h3 className="h3">
              In Tendenza <i class="bi bi-chevron-double-right text-white"></i>
            </h3>
            {videogiochi.slice(94).map((videogioco, i) => (
              <Col key={i} xs={12} sm={6} md={4} lg={4} className="d-none d-md-block mb-4">
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
           <Container fluid className="Sezione1 d-md-none my-3 ">
            <div className="scroll-container">
              <Row className="gx-3 gy-2 flex-nowrap">
                {videogiochi.slice(0, 10).map((videogioco, i) => (
                  <Col key={i} xs={8} sm={6} md={4} lg={3} className="game-col">
                    <Link to={`/game/${videogioco.id}`} style={{ textDecoration: "none" }}>
                      <Card className="game-card">
                        <div className="GameImageContainer">
                          <Image src={videogioco.copertinaUrl} alt={videogioco.titolo} className="game-image2" fluid />
                        </div>
                        <Card.Body className="game-info d-flex justify-content-between align-items-center">
                          <Card.Title className="game-title2">{videogioco.titolo}</Card.Title>
                          <Card.Text className="game-price2">{videogioco.prezzo}€</Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
          <br />
          <Row className="gx-4 gy-2">
            <h3 className="h3">
              Usciti da poco{" "}
              <i class="bi bi-chevron-double-right text-white"></i>
            </h3>
            <Container fluid className="Sezione1 d-md-none my-3 ">
            <div className="scroll-container">
              <Row className="gx-3 gy-2 flex-nowrap">
                {videogiochi.slice(10, 20).map((videogioco, i) => (
                  <Col key={i} xs={8} sm={6} md={4} lg={3} className="game-col">
                    <Link to={`/game/${videogioco.id}`} style={{ textDecoration: "none" }}>
                      <Card className="game-card">
                        <div className="GameImageContainer">
                          <Image src={videogioco.copertinaUrl} alt={videogioco.titolo} className="game-image2" fluid />
                        </div>
                        <Card.Body className="game-info d-flex justify-content-between align-items-center">
                          <Card.Title className="game-title2">{videogioco.titolo}</Card.Title>
                          <Card.Text className="game-price2">{videogioco.prezzo}€</Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
            {videogiochi.slice(0, 6).map((videogioco, i) => (
              <Col key={i} xs={12} sm={6} md={4} lg={4} className="d-none d-md-block mb-4">
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
        <br />
        <Container fluid className="PlatformBg">
           <div className="d-flex justify-content-evenly">
            <div className="d-flex align-items-center">
              <a href="/playstation">
                <img
                  className="PlatformLogo"
                  src="../src/assets/playstation.svg"
                  alt=""
                />
              </a>
              <div className="d-flex flex-column ms-2">
                <h5 className="mb-0 fs-5 d-none d-md-inline">Playstation</h5>
                <h6 className="mb-0 fs-6 d-none d-lg-inline">PS4-PS5</h6>
              </div>
            </div>
            <div className="VerticalSpacer"></div>
            <div className="d-flex align-items-center">
              <a href="/xbox">
                <img
                  className="PlatformLogo"
                  src="../src/assets/xbox.svg"
                  alt=""
                />
              </a>
              <div className="d-flex flex-column ms-2">
                <h5 className="mb-0 fs-5 d-none d-md-inline">XBOX</h5>
                <h6 className="mb-0 fs-6 d-none d-lg-inline">
                  XBOX One-XBOX Series S\X
                </h6>
              </div>
            </div>
            <div className="VerticalSpacer"></div>
            <div className="d-flex align-items-center">
              <a href="/nintendo">
                <img
                  className="PlatformLogo"
                  src="../src/assets/nintendo-switch.svg"
                  alt=""
                />
              </a>
              <div className="d-flex flex-column ms-2">
                <h5 className="mb-0 fs-5 d-none d-md-inline">Nintendo</h5>
                <h6 className="mb-0 fs-6 d-none d-lg-inline">
                  Con oltre 1000 giochi.
                </h6>
              </div>
            </div>
            <div className="VerticalSpacer"></div>
            <div className="d-flex align-items-center">
              <a href="/pc">
                <img
                  className="PlatformLogo"
                  src="../src/assets/pc-display.svg"
                  alt=""
                />
              </a>
              <div className="d-flex flex-column ms-2">
                <h5 className="mb-0 fs-5 d-none d-md-inline">PC</h5>
                <h6 className="mb-0 fs-6 d-none d-lg-block">
                  Con oltre 1000 giochi.
                </h6>
              </div>
            </div>
          </div>
        </Container>
        <br />
        <Container className="Sezione2" style={{ width: "60%" }}>
          <h3 className="text-white fw-bold">Ti Consigliamo :</h3>
          <br />
          <Row className="gx-4 gy-2">
            {videogiochi.slice(85).map((videogioco, i) => (
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
        <br />
        <Container fluid className="PlatformBg">
        <div className="d-flex justify-content-evenly">
            <div className="d-flex align-items-center">
              <i className="fs-1 pe-3 bi bi-cloud-download"></i>
              <div className="d-flex flex-column">
                <h5 className="mb-0  d-none d-sm-inline">Download Veloce</h5>
                <h6 className="mb-0  d-none d-lg-inline">
                  Disponibile su tutte le piattaforme
                </h6>
              </div>
            </div>
            <div className="VerticalSpacer"></div>
            <div className="d-flex align-items-center">
              <i className="fs-1 pe-3 bi bi-safe"></i>
              <div className="d-flex flex-column">
                <h5 className="mb-0  d-none d-sm-inline">Pagamenti Sicuri</h5>
                <h6 className="mb-0  d-none d-lg-inline">
                  Grazie alla piattaforma Stripe
                </h6>
              </div>
            </div>
            <div className="VerticalSpacer"></div>
            <div className="d-flex align-items-center">
              <i className="fs-1 pe-3 bi bi-shield-fill-check"></i>
              <div className="d-flex flex-column">
                <h5 className="mb-0  d-none d-sm-inline">Sito Protetto</h5>
                <h6 className="mb-0  d-none d-lg-inline">
                  Con oltre 1000 giochi.
                </h6>
              </div>
            </div>
            <div className="VerticalSpacer"></div>
          </div>
        </Container>
        <Container fluid className="ContainerGiocoSingolo" >
          <div className="GiocoSingoloImage"></div>
          <div className="ContainerGiocoSingoloInfo">
            <p className="GiocoTitolo">Warhammer 40.000: <br /> Space Marine2</p>
            <p className="GiocoPrezzo">69.99$</p>
          </div>
        </Container>
        <Container className="Sezione3">
          <Row className="d-flex">
            <Col className="col-6 col-md-4">
              <Row className="d-flex flex-column justify-content-center align-items-center">
                {videogiochi.slice(0, 4).map((videogioco, i) => (
                  <Col
                    style={{ width: "80%", maxHeight: "65%" }}
                    className="d-flex align-items-center flex-column"
                  >
                    <Link to={`/game/${videogioco.id}`}>
                      <img
                        id="Sezione3Colonna"
                        width={"150px"}
                        height={"150px"}
                        src={videogioco.copertinaUrl}
                        alt="Copertina Videogioco"
                      ></img>
                    </Link>
                    <div className="d-flex mt-3">
                      <p id="DescrizioneGioco">{videogioco.titolo + "  -  "}</p>
                      <p id="DescrizioneGioco">{videogioco.prezzo}$</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col className="col-6 col-md-4">
              <Row className="d-flex flex-column justify-content-center align-items-center">
                {videogiochi.slice(5, 9).map((videogioco, i) => (
                  <Col
                    style={{ width: "80%", maxHeight: "50%" }}
                    className="d-flex align-items-center flex-column"
                  >
                    <Link to={`/game/${videogioco.id}`}>
                      <img
                        id="Sezione3Colonna"
                        width={"150px"}
                        height={"150px"}
                        src={videogioco.copertinaUrl}
                        alt="Copertina Videogioco"
                      ></img>
                    </Link>
                    <div className="d-flex mt-3">
                      <p id="DescrizioneGioco">{videogioco.titolo + "  -  "}</p>
                      <p id="DescrizioneGioco">{videogioco.prezzo}$</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col className="d-none d-md-flex col-6 col-md-4">
              <Row className="d-flex flex-column justify-content-center align-items-center">
                {videogiochi.slice(10, 14).map((videogioco, i) => (
                  <Col
                    style={{ width: "80%", maxHeight: "65%" }}
                    className="d-flex align-items-center flex-column"
                  >
                    <Link to={`/game/${videogioco.id}`}>
                      <img
                        id="Sezione3Colonna"
                        width={"150px"}
                        height={"150px"}
                        src={videogioco.copertinaUrl}
                        alt="Copertina Videogioco"
                      ></img>
                    </Link>
                    <div className="d-flex mt-3">
                      <p id="DescrizioneGioco">{videogioco.titolo + "  -  "}</p>
                      <p id="DescrizioneGioco">{videogioco.prezzo}$</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="d-flex justify-content-center mt-3">
          <button
            onClick={() => {
              setCaricaAltro(true);
            }}
            className={
              caricaAltro == false
                ? "btnCarica btn bg-transparent border-none outline-0 text-white"
                : "d-none"
            }
          >
            Carica tutti i giochi
          </button>
        </div>
        <Container
          className={caricaAltro == true ? "d-block" : "d-none"}
          style={{ width: "100%" }}
        >
          <br />
          <h3 className="text-white fs-1 mb-3 fw-semibold">Tutti i giochi :</h3>
          <Row className="gx-4 gy-2">
            {videogiochi.map((videogioco, i) => (
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
export default MyMain;
