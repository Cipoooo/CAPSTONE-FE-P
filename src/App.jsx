import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import axios from 'axios';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Container, Row, Col, Card, Button,} from 'react-bootstrap';
import MyNavbar from "./components/Navbar/MyNavbar";
import MyMain from './components/Main/MyMain';
import MyFooter from './components/Footer/MyFooter';
import Carrello from "./components/Carrello/Carrello";
import Profilo from './components/Profilo/Profilo';
import SingleGame from './components/SingleGame/SingleGame.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';


const App = () => {
  const [videogiochi, setVideogiochi] = useState([]);

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

  return (
    <Container fluid className='px-0'>
      <BrowserRouter>
      <MyNavbar></MyNavbar>
      <Routes>
        <Route path="/" element={<MyMain/>}></Route>
        <Route path='/carrello' element={<Carrello></Carrello>}></Route>
        <Route path='/profilo' element={<Profilo></Profilo>}></Route>
        <Route path='/game' element={<SingleGame></SingleGame>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <MyFooter></MyFooter>
      </BrowserRouter>
    </Container>
  );
};

export default App;
