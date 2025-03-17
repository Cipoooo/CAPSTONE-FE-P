import "../Register/Register.css";
import { Container } from "react-bootstrap";

const Register = () =>{
    return(
        <>
         <Container fluid className="ContainerBg">
    <div className="flex">  
        <form>
            <div className="title">
            <h1>Register</h1>
            </div>
            <div className="email">
                <label for="input">Username</label>
                <input type="text" placeholder="Write your desired username here"/>
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
            </div>
                <div className="registerBtn">
                    <button>Register</button>
                </div>
                <div className="links mt-3">
                    <p>Already have an acccount?<a className="ms-2" href="/login">Login here</a></p>
                </div>
        </form>
    </div>
        </Container>
        </>
    );
};
export default Register;