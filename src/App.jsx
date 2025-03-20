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
import Searchpage from './components/Searchpage/SearchPage.jsx';
import Xbox from './components/Xbox/Xbox.jsx';
import XboxSeries from './components/Xbox Series/Xbox Series.jsx';
import XboxOne from './components/Xbox One/Xbox One.jsx';
import PlayStation from './components/Playstation/Playstation.jsx';
import PS4 from './components/PS4/PS4.jsx';
import PS5 from './components/PS5/Ps5.jsx';
import Nintendo from './components/Nintendo/Nintendo.jsx';
import PC from './components/PC/PC.jsx';
import NotFound from './components/NotFound/NotFound.jsx';


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
        <Route path="/search" element={<Searchpage></Searchpage>}></Route>
        <Route path="/Xbox" element={<Xbox></Xbox>}></Route>
        <Route path="/XboxSeries" element={<XboxSeries></XboxSeries>}></Route>
        <Route path="/XboxOne" element={<XboxOne></XboxOne>}></Route>
        <Route path="/Playstation" element={<PlayStation></PlayStation>}></Route>
        <Route path="/PS4" element={<PS4></PS4>}></Route>
        <Route path="/PS5" element={<PS5></PS5>}></Route>
        <Route path="/Nintendo" element={<Nintendo></Nintendo>}></Route>
        <Route path="/PC" element={<PC></PC>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
