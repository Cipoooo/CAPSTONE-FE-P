import { Container } from "react-bootstrap";
import "../Login/Login.css";

const Login = () =>{
    return(
        <>
        <Container fluid className="ContainerBg">
    <div className="flex">  
        <form>
            <div className="title">
            <h1>Login</h1>
            </div>
            <div className="email">
                <label for="input">E-mail</label>
                <input type="email" placeholder="Write your email here"/>
            </div>
            <div className="password"> 
                <label for="input">Password</label>
                <input type="password" placeholder="*********"/>
            </div>
            <div className="remember-forgot">
                <div className="checkboxP">
                     <input className="checkbox" type="checkbox"/><p className="text-white" >Remember me</p>
                </div>
                <a href="#">Forgot your password?</a>
            </div>
                <div className="loginBtn">
                    <button>Login</button>
                </div>
                <div className="links mt-3">
                    <p>Don' t have an acccount?<a className="ms-2" href="/register">Register</a></p>
                </div>
        </form>
    </div>
        </Container>
        </>
    );
};
export default Login;