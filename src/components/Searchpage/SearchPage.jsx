import "../Searchpage/Searchpage.css";
import "../Main/MyMain.css";
import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Dropdown,Card,Image} from "react-bootstrap";
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
      <Container fluid className="FilterContainer mb-3 d-flex">
           <Dropdown  className="ButtonGroup me-2">
          <Dropdown.Toggle className="ButtonGroupButton">
            {filters.genre ? filters.genre : "Genere"}
          </Dropdown.Toggle>
          <Dropdown.Menu className="DropdownMenu">
          <Dropdown.Item className="DropdownItem" onClick={() => handleGenreChange("")}>Tutti i generi</Dropdown.Item>
          <Dropdown.Item className="DropdownItem" onClick={() => handleGenreChange("RPG")}>RPG</Dropdown.Item>
          <Dropdown.Item className="DropdownItem" onClick={() => handleGenreChange("Action")}>Azione</Dropdown.Item>
          <Dropdown.Item className="DropdownItem" onClick={() => handleGenreChange("Strategy")}>Strategia</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="VerticalSpacerS"></div>
        <Dropdown  className="ButtonGroup me-2">
          <Dropdown.Toggle className="ButtonGroupButton">
            {filters.platform ? filters.platform : "Piattaforma"}
          </Dropdown.Toggle>
          <Dropdown.Menu className="DropdownMenu">
          <Dropdown.Item className="DropdownItem" onClick={() => handlePlatformChange("")}>Tutte le piattaforme</Dropdown.Item>
          <Dropdown.Item className="DropdownItem" onClick={() => handlePlatformChange("PS4")}>PS4</Dropdown.Item>
          <Dropdown.Item className="DropdownItem" onClick={() => handlePlatformChange("PS5")}>PS5</Dropdown.Item>
          <Dropdown.Item className="DropdownItem" onClick={() => handlePlatformChange("Xbox one")}>Xbox one</Dropdown.Item>
          <Dropdown.Item className="DropdownItem" onClick={() => handlePlatformChange("Xbox Series X/S")}>Xbox Series X/S</Dropdown.Item>
          <Dropdown.Item className="DropdownItem" onClick={() => handlePlatformChange("PC")}>PC</Dropdown.Item>
          <Dropdown.Item className="DropdownItem" onClick={() => handlePlatformChange("Nintendo")}>Nintendo Switch</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="VerticalSpacerS"></div>
        <Dropdown  className="ButtonGroup me-2">
          <Dropdown.Toggle className="ButtonGroupButton">
            Prezzo: {filters.priceRange[1]}€
          </Dropdown.Toggle>
          <Dropdown.Menu className="DropdownMenu">
          <Dropdown.Item className="DropdownItem" onClick={() => handlePriceChange([0, 25])}>Fino a 25€</Dropdown.Item>
          <Dropdown.Item className="DropdownItem" onClick={() => handlePriceChange([0, 50])}>Fino a 50€</Dropdown.Item>
          <Dropdown.Item className="DropdownItem" onClick={() => handlePriceChange([0, 75])}>Fino a 75€</Dropdown.Item>
          <Dropdown.Item className="DropdownItem" onClick={() => handlePriceChange([0, 100])}>Fino a 100€</Dropdown.Item>
          <Dropdown.Item className="DropdownItem" onClick={() => handlePriceChange([0, 200])}>Fino a 200€</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <Container className="Sezione1 d-none d-md-flex">
      <Row className="gx-4 gy-2">
        <h3 className="h3">In Tendenza <i class="bi bi-chevron-double-right text-white"></i></h3>
        {filteredVideogiochi.slice(0).map((videogioco,i)=>(
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
        <br />
        </Container>
          <Container fluid className="Sezione1 d-md-none my-3 ">
            <h3 className="h3">In Tendenza <i className="bi bi-chevron-double-right text-white"></i></h3>
            <div className="scroll-container">
              <Row className="gx-3 gy-2 flex-nowrap">
                {filteredVideogiochi.slice(0, 10).map((videogioco, i) => (
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
          <Container fluid className="Sezione1 d-md-none my-3 ">
            <h3 className="h3">In Tendenza <i className="bi bi-chevron-double-right text-white"></i></h3>
            <div className="scroll-container">
              <Row className="gx-3 gy-2 flex-nowrap">
                {filteredVideogiochi.slice(10, 20).map((videogioco, i) => (
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
          <Container fluid className="Sezione1 d-md-none my-3 ">
            <h3 className="h3">In Tendenza <i className="bi bi-chevron-double-right text-white"></i></h3>
            <div className="scroll-container">
              <Row className="gx-3 gy-2 flex-nowrap">
                {filteredVideogiochi.slice(20, 30).map((videogioco, i) => (
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
          <Container fluid className="Sezione1 d-md-none my-3 ">
            <h3 className="h3">In Tendenza <i className="bi bi-chevron-double-right text-white"></i></h3>
            <div className="scroll-container">
              <Row className="gx-3 gy-2 flex-nowrap">
                {filteredVideogiochi.slice(30, 40).map((videogioco, i) => (
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
          <Container fluid className="Sezione1 d-md-none my-3 ">
            <h3 className="h3">In Tendenza <i className="bi bi-chevron-double-right text-white"></i></h3>
            <div className="scroll-container">
              <Row className="gx-3 gy-2 flex-nowrap">
                {filteredVideogiochi.slice(40, 50).map((videogioco, i) => (
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
          <Container fluid className="Sezione1 d-md-none my-3 ">
            <h3 className="h3">In Tendenza <i className="bi bi-chevron-double-right text-white"></i></h3>
            <div className="scroll-container">
              <Row className="gx-3 gy-2 flex-nowrap">
                {filteredVideogiochi.slice(50, 60).map((videogioco, i) => (
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
          <Container fluid className="Sezione1 d-md-none my-3 ">
            <h3 className="h3">In Tendenza <i className="bi bi-chevron-double-right text-white"></i></h3>
            <div className="scroll-container">
              <Row className="gx-3 gy-2 flex-nowrap">
                {filteredVideogiochi.slice(60, 70).map((videogioco, i) => (
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
          <Container fluid className="Sezione1 d-md-none my-3 ">
            <h3 className="h3">In Tendenza <i className="bi bi-chevron-double-right text-white"></i></h3>
            <div className="scroll-container">
              <Row className="gx-3 gy-2 flex-nowrap">
                {filteredVideogiochi.slice(70, 80).map((videogioco, i) => (
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
          <Container fluid className="Sezione1 d-md-none my-3 ">
            <h3 className="h3">In Tendenza <i className="bi bi-chevron-double-right text-white"></i></h3>
            <div className="scroll-container">
              <Row className="gx-3 gy-2 flex-nowrap">
                {filteredVideogiochi.slice(80, 90).map((videogioco, i) => (
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
          <Container fluid className="Sezione1 d-md-none my-3 ">
            <h3 className="h3">In Tendenza <i className="bi bi-chevron-double-right text-white"></i></h3>
            <div className="scroll-container">
              <Row className="gx-3 gy-2 flex-nowrap">
                {filteredVideogiochi.slice(-10).map((videogioco, i) => (
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
        </Container>
      </>
    );
};
export default Searchpage;