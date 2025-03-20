import { useState, useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, FormControl } from 'react-bootstrap';
import "../Navbar/MyNavbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../redux/action/query';
import { Link } from 'react-router-dom';
import {BiSearch} from 'react-icons/bi';

function MyNavbar() {
  const [showSearch, setShowSearch] = useState(false);
  const query = useSelector((state) => state.search.query);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    dispatch(setSearchQuery(searchText)); 

    if (searchText.length > 0) {
      navigate(`/search`);
    }
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar fixed='top' className={`w-100 text-white px-0 ${scrolled ? "scrolled-NavBg" : "NavBg"}`}>
      <Container className='d-flex justify-content-around px-0'>
        <Navbar.Brand>
          <Link to={"/"}>
            <img height={"50px"} width={"150px"} src='../src/assets/epicode_logo.png'/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <div className='SearchbarIcons'>
          <Link to={"/Xbox"}><img className='SearchbarImages' src='../src/assets/xbox.svg'/></Link>
          <Link to={"/Playstation"}><img className='SearchbarImages' src='../src/assets/playstation.svg'/></Link>
          <Link to={"/Nintendo"}><img className='SearchbarImages' src='../src/assets/nintendo-switch.svg'/></Link>
          <Link to={"/PC"}><img className='SearchbarImages' src='../src/assets/pc-display.svg'/></Link>
          <Nav>
            <Button className="SearchBtn" onClick={() => setShowSearch(!showSearch)}>
              <BiSearch className="fs-5 text-white" />
            </Button>
          </Nav>
        </div>

        <div className='d-flex'>
          <Nav>
            <Button className="SearchBtn" style={{ marginRight: "5px" }}>
              <Link to={"/carrello"}>
                <i className="bi bi-bag-fill text-white"></i>
              </Link>
            </Button>
          </Nav>
          <Nav>
            <div className="RegisterLogin">
              <Link to={"/profilo"}><i className="bi bi-person-fill fs-4 mx-2 text-white"></i></Link>
              <Link to={"/login"} className='RegisterLoginLink fs-5'>Login</Link>
            </div>
          </Nav>
        </div>
      </Container>
      {showSearch && (
        <div className="search-input-container">
          <FormControl
            type="text"
            placeholder="God of War, Elden Ring. RPG..."
            className="search-input"
            value={query}
            onChange={handleSearchChange}
            autoFocus
          />
        </div>
      )}
    </Navbar>
  );
}

export default MyNavbar;