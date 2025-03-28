import "../Profilo/Profilo.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profilo = () => {


  const [sezioneAttiva, setSezioneAttiva] = useState("pannello");

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
      <Container sm className="ContainerProfilo">
      <Row style={{ width: "100%" }}>
        <Col className="col-12 mt-3 text-start">
          <h1 className="text-white mb-3">Welcome | Welcom  Back :</h1>
          <div className="d-flex align-items-start mb-5 justify-content-start">
            <Link to="/" className="LinkP mb-0 text-white fs-5">
              Home
            </Link>
            <span className="text-white mx-2 fs-5">{">"}</span>
            <p className="LinkP mb-0 text-white fs-5">Profilo</p>
          </div>
          <div className="text-white d-flex flex-column align-items-center">
            <img
              src="../src/assets/avatar2.jpg"
              height="120px"
              width="130px"
              className="rounded-circle my-3"
              alt="avatar"
            />
            <p className="fw-5 fs-2">Gabriele Cipolloni</p>
          </div>
        </Col>
        <Col className="col-12 mt-4">
          <div className="d-lg-flex d-none flex-row justify-content-between">
            <div className="d-flex">
              {["pannello", "ordini", "wishlist", "libreria", "recensioni"].map((sezione) => (
                <button
                  key={sezione}
                  className={`ProfiloLink ${sezioneAttiva === sezione ? "active" : ""}`}
                  onClick={() => setSezioneAttiva(sezione)}
                >
                  {sezione.charAt(0).toUpperCase() + sezione.slice(1)}
                </button>
              ))}
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-gear text-white fs-4"></i>
              <button className="ProfiloLink">Settings</button>
            </div>
          </div>
          <hr className="hr" />
          <div className="text-white mt-4">
            {sezioneAttiva === "pannello" && 
            <>
            <Row className="g-3">
              <Col className="col-12 col-md-6 p-3 py-4 rounded-2 bg-secondary d-flex align-items-center justify-content-center">
              <p className="text-white mb-0 fs-5 fw-semi-bold">Profilo creato il: 19/11/2024</p>
              </Col>
              <Col className="col-12 col-md-6 p-3 py-4 rounded-2 d-flex bg-secondary align-items-center justify-content-center">
              <p className="text-white mb-0 fs-5 fw-semi-bold">Pagamenti totali di : 139.98 EUR</p>
              </Col>
            </Row>
            
            </>
            }
            {sezioneAttiva === "ordini" && <p>Ecco i tuoi ordini.</p>}
            {sezioneAttiva === "wishlist" && <p>Lista desideri.</p>}
            {sezioneAttiva === "libreria" && <p>La tua libreria giochi.</p>}
            {sezioneAttiva === "recensioni" && <p>Le tue recensioni.</p>}
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};
export default Profilo;