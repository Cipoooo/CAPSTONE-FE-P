import "../Profilo/Profilo.css";
import {Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profilo = () =>{

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
        <Container sm className="ContainerProfilo">
            <Row style={{width:"90%"}}>
                <Col className="col-12 mt-3">
                <h1 className="text-white mb-3">Welcome Back :</h1>
                <div className="d-flex align-items-center ">
                  <Link to={"/"} style={{textDecoration:"none"}}><p className="LinkP mb-0 text-white fs-5">Home</p></Link><span className="text-white mx-2 fs-5"> {">"} </span>
                  <p className="LinkP mb-0 text-white fs-5"> Profilo</p>
                </div>
                <div className="text-white d-flex flex-column align-items-center">
                <img src="../src/assets/avatar2.jpg" height={"120px"} width={"130px"} className="rounded-circle my-3" alt="avatar picture"/>
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
                <hr className="hr" />
                </Col>
                <Col className="col-12 mt-1">
                <h3 className="text-white my-3">In base a ciò che hai guardato :</h3>
                 <Row className="gx-2">
        {videogiochi.slice(85).map((videogioco,i)=>(
            <Col key={i} className="col-6 col-md-4 mb-2">
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
                </Col>
            </Row>
        </Container>
        </>
    );
};
export default Profilo;