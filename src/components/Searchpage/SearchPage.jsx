import "../Searchpage/Searchpage.css";
import "../Main/MyMain.css";
import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Dropdown,ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setGenre, setPlatform, setPriceRange } from "../../redux/action/filter";

const Searchpage = () =>{

    
    const [videogiochi, setVideogiochi] = useState([]);
    const query = useSelector((state) => state.search.query); 
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    const handleGenreChange = (genre) => {
      dispatch(setGenre(genre));
    };
  
    const handlePlatformChange = (platform) => {
      dispatch(setPlatform(platform));
    };
  
    const handlePriceChange = (priceRange) => {
      dispatch(setPriceRange(priceRange));
    };

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
    
      const filteredVideogiochi = videogiochi.filter((game) => {
        const matchesQuery = game.titolo.toLowerCase().includes(query.toLowerCase());
        const matchesGenre = filters.genre ? game.genere === filters.genre : true;
        const matchesPlatform = filters.platform ? game.piattaforma.includes(filters.platform) : true;
        const matchesPrice =game.prezzo >= filters.priceRange[0] && game.prezzo <= filters.priceRange[1];

        return matchesQuery && matchesGenre && matchesPlatform && matchesPrice;
      });
    return(
        <>
    <Container fluid className="MainContainerSearch">
      <Container className="FilterContainer mb-3 d-flex">
           <Dropdown as={ButtonGroup} className="ButtonGroup me-2">
          <Dropdown.Toggle className="ButtonGroupButton rounded-pill">
            {filters.genre ? filters.genre : "Genere"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleGenreChange("")}>Tutti i generi</Dropdown.Item>
          <Dropdown.Item onClick={() => handleGenreChange("RPG")}>RPG</Dropdown.Item>
          <Dropdown.Item onClick={() => handleGenreChange("Action")}>Azione</Dropdown.Item>
          <Dropdown.Item onClick={() => handleGenreChange("Strategy")}>Strategia</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="VerticalSpacerS"></div>
        <Dropdown as={ButtonGroup} className="ButtonGroup me-2">
          <Dropdown.Toggle className="ButtonGroupButton rounded-pill">
            {filters.platform ? filters.platform : "Piattaforma"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
          <Dropdown.Item onClick={() => handlePlatformChange("")}>Tutte le piattaforme</Dropdown.Item>
          <Dropdown.Item onClick={() => handlePlatformChange("PS4")}>PS4</Dropdown.Item>
          <Dropdown.Item onClick={() => handlePlatformChange("PS5")}>PS5</Dropdown.Item>
          <Dropdown.Item onClick={() => handlePlatformChange("Xbox one")}>Xbox one</Dropdown.Item>
          <Dropdown.Item onClick={() => handlePlatformChange("Xbox Series X/S")}>Xbox Series X/S</Dropdown.Item>
          <Dropdown.Item onClick={() => handlePlatformChange("PC")}>PC</Dropdown.Item>
          <Dropdown.Item onClick={() => handlePlatformChange("Nintendo")}>Nintendo Switch</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="VerticalSpacerS"></div>
        <Dropdown as={ButtonGroup} className="ButtonGroup me-2">
          <Dropdown.Toggle className="ButtonGroupButton rounded-pill">
            Prezzo: {filters.priceRange[1]}€
          </Dropdown.Toggle>
          <Dropdown.Menu>
          <Dropdown.Item onClick={() => handlePriceChange([0, 25])}>Fino a 25€</Dropdown.Item>
          <Dropdown.Item onClick={() => handlePriceChange([0, 50])}>Fino a 50€</Dropdown.Item>
          <Dropdown.Item onClick={() => handlePriceChange([0, 75])}>Fino a 75€</Dropdown.Item>
          <Dropdown.Item onClick={() => handlePriceChange([0, 100])}>Fino a 100€</Dropdown.Item>
          <Dropdown.Item onClick={() => handlePriceChange([0, 100])}>Fino a 200€</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <Container className="Sezione1">
      <Row className="gx-2 gy-2">
          <Link to={"/tendenza"}><h3 className="h3">In Tendenza <i class="bi bi-chevron-double-right text-white"></i></h3></Link>
        {filteredVideogiochi.slice(-0).map((videogioco,i)=>(
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