import "../Login/Login.css";

import { useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () =>{


  const [username,setUsername] = useState('')
  const[email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const navigate = useNavigate();

  const handlesubmit = async (event) =>{
    event.preventDefault();

    const userData = {
      username : username,
      email: email,
      password: password
    }

    try {
      const response = await axios.post('http://localhost:8080/register', userData);
      if (response.status === 200) {
        navigate('/login');
      }
    } catch (error) {
      if (error.response) {
        setError('Errore nella registrazione: ' + error.response.data);
      } else {
        setError('Errore nella connessione al server. Riprova più tardi.');
      }
      console.error(error);
    }
  }

    return (
      <>
        <Container
          fluid
          className="ContainerLogin d-flex align-items-center justify-content-center"
        >
          <div className="flex">
            <form onSubmit={handlesubmit}>
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="email">
                <label className="text-white" htmlFor="input">
                  E-mail
                </label>
                <input type="email" placeholder="Write your email here" value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="password">
                <label className="text-white" htmlFor="input">
                  Password
                </label>
                <input type="password" placeholder="*********" value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="remember-forgot">
                <div className="checkboxP">
                  <input className="checkbox" type="checkbox" />
                  <p className="checkboxpp text-white mb-0 ms-2">Remember me</p>
                </div>
              </div>
              <div className="registerBtn">
                <button type="submit">Register</button>
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
            {error && <p>{error}</p>}
          </div>
        </Container>
      </>
    );
};
export default Register;