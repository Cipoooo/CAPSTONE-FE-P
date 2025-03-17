import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, FormControl } from 'react-bootstrap';
import "../Navbar/MyNavbar.css";
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';

function MyNavbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Funzione per gestire il cambio del valore dell'input
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 0) {
      navigate(`/search?q=${e.target.value}`);
    }
  };

  return (
    <Navbar fixed='top' className="Navbg w-100 text-white px-0 ">
      <Container className='d-flex justify-content-around px-0'>
        <Navbar.Brand>
          <Link to={"/"}>
            <img height={"30px"} width={"30px"} src='https://imgs.search.brave.com/NGepRJmgPKnbvsANF10fZJRr4bfP9dY3rJ39DMuDxb0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGluc2RpY3Rp/b25hcnkuY29tL2lt/YWdlcy90aHVtYi9o/YXJlXzI5Mjc0MDU3/Ml8yNTAuanBnP3Zl/cnNpb249Ni4wLjY4'/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <div className='SearchbarIcons'>
          <Link to={"/xbox"}><img className='SearchbarImages' src='../src/assets/xbox.svg'/></Link>
          <Link to={"/playstation"}><img className='SearchbarImages' src='../src/assets/playstation.svg'/></Link>
          <Link to={"/nintendo"}><img className='SearchbarImages' src='../src/assets/nintendo-switch.svg'/></Link>
          <Link to={"/pc"}><img className='SearchbarImages' src='../src/assets/pc-display.svg'/></Link>
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