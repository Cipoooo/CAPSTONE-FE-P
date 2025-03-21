import "../Login/Login.css";
import { Container } from "react-bootstrap";


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
        </div>
        </Container>
        </>
    );
};
export default Login;