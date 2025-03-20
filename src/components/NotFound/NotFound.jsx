import { Container } from "react-bootstrap";
import "../NotFound/NotFound.css";
import { BiDizzy } from "react-icons/bi";
import { Link } from "react-router-dom";

const NotFound = () =>{

    return(
        <>
        <Container className="w-50 d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-center align-items-center">
                <h1>ERROR 404 NOT FOUND</h1>
                <BiDizzy className="Dizzy"></BiDizzy>
            </div>
            <p className="text-white text-center fs-5">Ooops...it seems that the page you were looking for wasn't found. To return home click on the button "Go to homepage"</p>
            <Link to={"/"}><div className="d-flex justify-content-center">
            <button className="Gohome">Go to homepage</button>
            </div></Link>
        </Container>
        </>
    );
};
export default NotFound;