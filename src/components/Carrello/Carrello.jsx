import "../Carrello/Carrello.css";
import { Container, Row, Col,} from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { BiHeart, BiTrash } from "react-icons/bi";


const Carrello = () =>{

    const [videogiochi, setVideogiochi] = useState([]);
    const [isBagEmpty, setIsBagEmpty] = useState(false)

    // Funzione per caricare i videogiochi dalla tua API
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
        <Container className="ContainerCarrello">
            <Row className="mb-5">
                <Col className={isBagEmpty!=true?"ContainerCarrello1 col-12 col-lg-7": "ContainerCarrello1 bg-transparent col-12"}>
                <h1 className="text-white fs-1">Carrello</h1>
                <div className="d-flex">
                  <Link to={"/"} style={{textDecoration:"none"}}><p className="LinkP mb-0 text-white fs-5">Home</p></Link><span className="text-white mx-2 fs-5"> {">"} </span>
                <p className="LinkP mb-0 text-white fs-5 mb-5">Carrello</p>
                </div>
                {isBagEmpty ==true ?
                <div className="d-flex flex-column text-center">
                  <p className="text-white fs-4 mt-5">Non hai oggetti nel carrello, è ora di riempirlo!!!</p>
                  <br />
                  <div className="d-flex justify-content-center">
                   <Link to={"/search"}><button className="Aquisti">Inizia a fare acquisti</button></Link>
                  </div>
                <div style={{marginTop:"100px"}} className="d-flex flex-overflow">
                    <Link to={"/Xbox"} style={{textDecoration:"none"}} id="LinkCarrello" className="me-3 text-white fs-6">Xbox</Link>
                    <Link to={"/Playstation"} style={{textDecoration:"none"}} id="LinkCarrello" className="me-3 text-white fs-6">PlayStation</Link>
                    <Link to={"/Nintendo"} style={{textDecoration:"none"}} id="LinkCarrello" className="me-3 text-white fs-6">Nintendo</Link>
                    <Link to={"/PC"} style={{textDecoration:"none"}} id="LinkCarrello" className="me-3 text-white fs-6">Pc</Link>
                    <Link to={"/"} style={{textDecoration:"none"}} id="LinkCarrello" className="me-3 text-white fs-6">Home</Link>
                    <Link to={"/About"} style={{textDecoration:"none"}} id="LinkCarrello" className="me-3 text-white fs-6">About</Link>
                    <Link to={"/Profilo"} style={{textDecoration:"none"}} id="LinkCarrello" className="me-3 text-white fs-6">Profile</Link>
                </div>  
                </div> : 
                
                <div>
                {videogiochi.slice(0,2).map((videogioco,i) => (
                    <div className="ListItem">
                        <div className="d-flex justify-content-start align-items-center">
                            <img className=" me-5" src={videogioco.copertinaUrl} width={120} height={120} alt="Copertina videogiooc" />
                            <div className=" d-flex flex-column">
                                <div className="d-flex">
                                <p className="m-0 fs-5 text-white p-0">{videogioco.titolo +"   -    "}</p>
                                <p id="prezzo" className="fs-5 m-0 p-0">{videogioco.prezzo}</p>
                                </div>
                                <div>
                                    <button className="HeartTrashBtn"><BiHeart className="text-white fs-4 mt-3"></BiHeart></button>
                                    <button className="HeartTrashBtn"><BiTrash className="text-white fs-4 mt-3"></BiTrash></button>
                                </div>
                            </div>
                        </div>
                    </div>   
                ))}
                </div>}

                </Col>
                <Col style={{maxHeight:"500px",borderRadius:"30px"}} className={isBagEmpty !=true ? "ContainerCarrello2 d-flex flex-column col-12 col-lg-4 " :"ContainerCarrello2 d-none"}>
                <h1  className="text-white fs-2 fw-semibold my-3 me-5">Riepilogo Ordine:</h1>
                {isBagEmpty !==true ?
                <div className="d-flex flex-column" style={{marginRight:"90px"}}>
                  <p className="text-white">Oggetto({"Carrello.length"})</p>
                  <hr className="w-100 text-white border-solid mt-0"/>
                  <div className="d-flex flex-column ">
                    <p className="m-0 fs-5 text-white p-0"> Totale ordine:</p>
                    <p className="m-0 fs-5 text-white p-0">Di cui tot di 22,2%</p>
                    <p id="prezzo" className="fs-5 m-0 p-0">EUR 0,00</p>
                  </div>
                  <Link to={"/checkout"}><button className="toCheckout">Vai al checkout</button></Link>  
                  <br />
                </div> : ""}
                </Col>
            </Row>
        </Container>
        </>
    );
};
export default Carrello;