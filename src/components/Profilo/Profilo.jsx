import "../Profilo/Profilo.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profilo = () => {

  const [videogiochi, setVideogiochi] = useState([]);
  const [pannello,setPannello] = useState(true)
  const[ordini,setOrdini] = useState(false);
  const[wishlist,setWishlist] = useState(false);
  const[libreria,setLibreria] = useState(false);

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
          <Col className="col-12 mt-3">
            <h1 className="text-white mb-3">Welcome Back :</h1>
            <div className="d-flex align-items-center ">
              <Link to={"/"} style={{ textDecoration: "none" }}><p className="LinkP mb-0 text-white fs-5">Home</p></Link><span className="text-white mx-2 fs-5"> {">"} </span>
              <p className="LinkP mb-0 text-white fs-5"> Profilo</p>
            </div>
            <div className="text-white d-flex flex-column align-items-center">
              <img src="../src/assets/avatar2.jpg" height={"120px"} width={"130px"} className="rounded-circle my-3" alt="avatar picture" />
              <p className="fw-5 fs-2">ercipo0099</p>
            </div>
          </Col>
          <Col className="col-12 mt-4">
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <p className="ProfiloLink">Pannello </p>
                  <i className="bi bi-chevron-right text-white ms-2"></i>
                </div>
                <p className="ProfiloLink">I miei Ordini</p>
                <p className="ProfiloLink">Whishlist</p>
                <p className="ProfiloLink">Libreria</p>
                <p className="ProfiloLink">Recensioni</p>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-gear text-white"></i>
                <p className="ProfiloLink">Settings</p>
              </div>
            </div>
            <hr className="hr"/>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Profilo;