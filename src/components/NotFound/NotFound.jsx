import { Container } from "react-bootstrap";
import "../NotFound/NotFound.css";
import { BiDizzy } from "react-icons/bi";
import { Link } from "react-router-dom";

const NotFound = () =>{

    return(
        <>
        <Container className="w-100 d-flex flex-column justify-content-center">
            <div style={{marginTop:"100px"}} className="d-flex justify-content-center align-items-center">
                <h1 className="Notfound">ERROR 404 <br /> NOT FOUND</h1>
                <BiDizzy className="Dizzy"></BiDizzy>
            </div>
            <p className="text-white text-center mt-3 fs-5">Ooops...it seems that the page you were looking for wasn't found. <br /> To return home click on the button "Go to homepage"</p>
            <div className="d-flex justify-content-center mt-3" style={{marginBottom:"700px"}}>
             <Link to={"/"}><button className="Gohome">Go to homepage</button></Link>
            </div>  
        </Container>
        </>
    );
};
export default NotFound;