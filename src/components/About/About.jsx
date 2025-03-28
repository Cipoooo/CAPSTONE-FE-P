import { Container } from "react-bootstrap";
import "../About/About.css";

const About = () =>{
    return(
        <>
        <Container fluid className="ContainerAbout p-5 d-flex flex-column"> 
        <h1 className="titolo">Descrizione Progetto:</h1>
        <p className="text-white fs-5">Questo progetto è un e-commerce basato sulla vendita di videogiochi in formato digitale ispirato dal sito online di InstantGaming. Stato sviluppato con React-Bootstrap per il Front-End e Spring-Boot (e successivamente Spring security)per il Back-End,
           il sito mirerà a fornire un esperienza facile e diretta per il consumer che sta cercando di comprare senza troppe difficoltà i propri videogiochi preferiti. Per utilizzare il sito non servirà nessun account, ma in futuro per sfruttare tutte le sue potenzialità l utente dovrà prima registrarsi,fare il login, e in seguito aggiungere 
           i prodotti nella propria wishlist e carrello se cosi si vuole. I pagamenti verranno eseguiti utilizzando la famosa piattaforma chiamata Stripe (utilizzata da giganti come per esempio: Amazon). Dopo ogni pagamento all'utente verrà restituita tramite mail "(utilizzando Spring Mail)",
           il codice/key del suo videogioco, che potra poi utilizzare per scaricarlo. Sebbene non completo questo sito fa da base almeno per il lato FrontEnd, per un qualsiasi tipo di store e-commerce.
           Dal lato Back-end troviamo l'API dei videogiochi che ho creato, contenente piu di 100 giochi e che inoltre, è facilmente modificabile e espandibile.      
        </p>
        <br />
        <br />
        <ul className="text-white">
            <h3 className="titolo fs-3 fw-semi-bold mb-3">Future Modifiche al Progetto :</h3>
            <li>Migioramento BE</li>
            <li>Opzioni di cookies</li>
            <li>Miglioramento della schermata profilo con pannelli di statistiche e customizzazione dell utente</li>
            <li>Miglioramento API videogioco</li>
            <li>Miglioramento sulle note legali</li>
            <li>Aggiunta di GiftCards</li>
            <li>Aggiunta di piu filtri di ricerca</li>
            <li>Miglioramento della responsiveness delle pagine</li>
        </ul>
        <br />
        <p className=" text-white">Ecco il link che quando messo nell' URL del proprio browser vi porterà alla repository su GitHub del BackEnd di questo progetto : <a style={{textDecoration:"none", color:"violet"}} href="https://github.com/Cipoooo/CAPSTONE-BE-P.git">https://github.com/Cipoooo/CAPSTONE-BE-P.git</a></p>
        <br />
        <h3 className="titolo">Skill aquisite durante il mio percorso con EPICODE :</h3>
        <p className="text-white"> Oltre alle soft skill come il team-work guadagnate con il duro lavoro con i miei compagni durante le build-week e tutte le varie lingue di programmazione e non (HTML,CSS,Js,Java,SQL) che sono alla base
            del full-stack developer, durante il corso abbiamo imparato ad usare molti software come appunto PgAdmin4, Postman Stripe, Spring Initializer e Spring Mail per il back-end, ma anche tutti i sfotware da cui dipende un progetto con React, come Sass, Bootstrap
            React-Router-Dom, Redux, TypeScript (Da approfondire). Spero dunque in futuro di ampliare le mie conoscenze sia sul lato codice e lingue di programmazione sia su lato di Software esterni per semplicizzare i progetti.
        </p>
        <br />
        <h3 className="titolo">Riflessioni sul mio percorso:</h3>
        <p className="text-white">Il corso mi ha insegnato molto, sebbene fosse la mia prima volta a programmare in lingue di programmazione come Js e Java, sono riuscito ad acquisire nuove conoscenze.Alla fine del corso mi reputo un programmatore con basi definite nel front-end
            ma che deve ancora lavorare molto per poter essere chiamato un vero e proprio Front-end developer.Stesso ragionamento per quanto riguarda la parte di Back-end, soprattutto nell' ambito della security, parte fondamentale di un sito web.Spero che con il giusto tempo e impegno arrivero un giorno a poter essere 
            definito un vero e proprio full stack-developer, ma c' è ancora molto da imparare.
        </p>
        </Container>
       
        </>
    );
};
export default About;