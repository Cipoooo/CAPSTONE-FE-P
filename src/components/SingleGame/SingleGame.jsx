import { Container } from "react-bootstrap";
import "../SingleGame/SingleGame";

const SingleGame = () => {
    return (
        <>
        <Container fluid className="SgHeader">
            <div className="d-flex">
            <div>
                <div className="ImmagineBord">
                    <img src="../src/assets/playstation.svg" width={100} height={100} alt="" />
                </div>
            </div>
            <div>
                <h5>Nome gioco</h5>
                <h5>Prezzo gioco</h5>
                <div className="d-flex">
                <i className="bi bi-heart text-white"></i>
                <button>Aggiungi al Carrello</button>
                </div>
            </div>
            </div>
        </Container>
        </>
    );
};
export default SingleGame;