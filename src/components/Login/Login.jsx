import { Container } from "react-bootstrap";
import "../Login/Login.css";

const Login = () => {
    return(
        <>
    <Container fluid className="ContainerLogin d-flex align-items-center justify-content-center">
         <div className="flex rounded-3">  
        <form>
            <div className="title">
            <h1 className="text-white">Login</h1>
            </div>
            <div className="email text-white">
                <label htmlFor="input">E-mail</label>
                <input type="email" placeholder="Write your email here"/>
            </div>
            <div className="password text-white"> 
                <label htmlFor="input">Password</label>
                <input type="password" placeholder="*********"/>
            </div>
            <div className="remember-forgot">
                <div className="checkboxP">
                     <input className="checkbox" type="checkbox"/><p className="text-white mb-0 ms-2">Remember me</p>
                </div>
                <a href="#">Forgot your password?</a>
            </div>
                <div className="loginBtn my-3 px-2">
                    <button>Login</button>
                </div>
                <div className="links">
                    <p>Don' t have an acccount?<a className="register ms-2 fs-5" href="/register">Register</a></p>
                </div>
        </form>
    </div>
    </Container>
   
        </>
    );
};
export default Login;