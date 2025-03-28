import "../Login/Login.css";
import { Container } from "react-bootstrap";

const Register = () =>{
    return (
      <>
        <Container
          fluid
          className="ContainerLogin d-flex align-items-center justify-content-center"
        >
          <div className="flex">
            <form>
              <div className="title">
                <h1 className="text-white">Register</h1>
              </div>
              <div className="email">
                <label className="text-white" htmlFor="input">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Write your desired username here"
                />
              </div>
              <div className="email">
                <label className="text-white" htmlFor="input">
                  E-mail
                </label>
                <input type="email" placeholder="Write your email here" />
              </div>
              <div className="password">
                <label className="text-white" htmlFor="input">
                  Password
                </label>
                <input type="password" placeholder="*********" />
              </div>
              <div className="remember-forgot">
                <div className="checkboxP">
                  <input className="checkbox" type="checkbox" />
                  <p className="checkboxpp text-white mb-0 ms-2">Remember me</p>
                </div>
              </div>
              <div className="registerBtn">
                <button>Register</button>
              </div>
              <div className="links mt-3">
                <p>
                  Already have an acccount?
                  <a className="register" href="/login">
                    Login here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </Container>
      </>
    );
};
export default Register;