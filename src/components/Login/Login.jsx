import "../Login/Login.css";
import {Row,Col, Container } from "react-bootstrap";
import { BiVector } from "react-icons/bi";


const Login = () =>{
    return(
        <>
        <Container className="ContainerBg ">
        <Row className="w-100 gx-auto">
        <Col className="col-lg-6 d-none d-lg-block d-flex flex-column">
        <div className="d-flex">
            <h1 className="text-white fs-1 fw-bold">Benvenuto | Bentornato su EpiGames</h1>
        </div>
        <img src="../src/assets/epicode_logo_symbol.png" width={"75%"} height={"75%"} alt="Epicode Logo" />
        </Col>
        <Col className="flex col-12 col-lg-6 d-flex">  
        <form>
            <div className="title">
            <h1>Login</h1>
            </div>
            <div className="email">
                <label htmlFor="input">E-mail</label>
                <input type="email" placeholder="Write your email here"/>
            </div>
            <div className="password"> 
                <label htmlFor="input">Password</label>
                <input type="password" placeholder="*********"/>
            </div>
            <div className="remember-forgot">
                <a href="#">Forgot your password?</a>
                <a className="ms-2" href="/register">Don' t have an account?</a>
            </div>
                <div className="loginBtn mt-3">
                    <button>Login</button>
                </div>
        </form>
        </Col>  
        </Row>
       
        </Container>
        </>
    );
};
export default Login;