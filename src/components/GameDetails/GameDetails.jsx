import "../GameDetails/GameDetails.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { BiHeart, BiCart } from "react-icons/bi";

const GameDetails = () => {
    const { id } = useParams();
    const [game, setGame] = useState("");
    const [gameGenre, setGameGenre] = useState("");
    const [gameName, setGameName] = useState("")
    const [videogiochi, setVideogiochi] = useState([]);

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/videogiochi/${id}`
                );
                console.log(response.data);
                setTimeout(() => setGame(response.data), 500);
            } catch (error) {
                console.log(error, "errore nel loading dell API");
            }
        };
        fetchGame();
    }, [id]);


    useEffect(() => {
        if (game) {
            setGameGenre(game.genere);
            setGameName(game.titolo)
        }
    }, [game]);

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

    console.log(id);
    console.log(game);
    return (
        <>
            <Container className="product-page mt-4">
                <Row className="justify-content-center">
                    <Col xs={12} md={6} className="image-section">
                        <Image src={game.copertinaUrl} alt={game.titolo} fluid className="game-image" />
                    </Col>
                    <Col xs={12} md={6} className="details-section text-center">
                        <h1 className="game-title">{game.titolo}</h1>
                        <p className="game-description">{game.genere}</p>
                        <h3 className="game-price">{game.prezzo}€</h3>
                        <div className="button-group">
                            <Button variant="custom-buy" className="buy-button">
                                Aggiungi al carrello <BiCart className="fs-3 ms-2" />
                            </Button>
                            <Button variant="outline-custom-wishlist" className="wishlist-button">
                                <BiHeart className="fs-3" />
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <h3 className="mt-5">Prodotti Simili</h3>
                        {videogiochi
                            .slice(0, 30)
                            .filter((videogioco) => videogioco.genere === gameGenre && videogioco.titolo != gameName)
                            .map((videogioco, i) => (
                                <Col key={i} xs={12} sm={6} md={4} lg={3} className="mb-4">
                                    <Link style={{ textDecoration: "none" }} to={`/game/${videogioco.id}`}>
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
                </Container>
            </Container>
        </>
    );
};
export default GameDetails;
