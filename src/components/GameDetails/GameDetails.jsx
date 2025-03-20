import "../GameDetails/GameDetails.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const GameDetails = () => {

    const {id} = useParams();
    const [game, setGame] = useState("");
    
    useEffect(() =>{
    const fetchGame = async () =>{
        try{
            const response = await axios.get(`http://localhost:8080/api/videogiochi/${id}`);
            console.log(response.data)
            setTimeout(() => setGame(response.data), 500) ;
        }catch(error){
            console.log(error, "errore nel loading dell API")
        }
    };
    fetchGame();
},[id]);    

console.log(id)
console.log(game)
    return (
        <>
        <Container fluid className="SgHeader">
            <h1 className="text-white">{game.titolo}</h1>
        </Container>
        </>
    );
};
export default GameDetails;