import "../Searchpage/Searchpage.css";
import "../Main/MyMain.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Searchpage = () =>{

    
    const [videogiochi, setVideogiochi] = useState([]);
    const query = useSelector((state) => state.search.query); 

    useEffect(() => {
        const loadVideogiochi = async () => {
          try {
            const response = await axios.get("http://localhost:8080/api/videogiochi");
            setVideogiochi(response.data);
          } catch (error) {
            console.error("Errore nel caricare i videogiochi", error);
          }
        };
    
        loadVideogiochi();
      }, []);
    
      const filteredVideogiochi = videogiochi.filter((videogioco) =>
        videogioco.titolo.toLowerCase().includes(query.toLowerCase())
      );

      console.log(filteredVideogiochi)
    return(
        <>
    <Container fluid className="MainContainerSearch">
      <Container className="Sezione1">
      <Row className="gx-2 gy-2">
          <Link to={"/tendenza"}><h3 className="h3">In Tendenza <i class="bi bi-chevron-double-right text-white"></i></h3></Link>
        {filteredVideogiochi.slice(-10).map((videogioco,i)=>(
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
};
export default Searchpage;