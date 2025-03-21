import "../Footer/MyFooter.css";

const Footer = () =>{
  return(
      <>
  <footer className="Footer">
    <div  className="FooterBg">
       <div className="container container-lg d-flex justify-content-between">
        <div className="d-flex">
        <a id="social" href="https://www.facebook.com/"><i style={{fontSize :"2.5rem"}} className="text-secondary bi bi-facebook"></i></a>
        <a id="social" href="https://www.instagram.com/"><i style={{fontSize :"2.5rem"}} className="text-secondary ms-3 bi bi-instagram"></i></a>
        <a id="social" href="https://x.com/"><i style={{fontSize :"2.5rem"}} className="text-secondary ms-3 bi bi-twitter"></i></a>
        <a id="social" href="https://www.youtube.com/"><i style={{fontSize :"2.5rem"}} className="text-secondary ms-3 mb-2 bi bi-youtube"></i></a>
        </div>
        <div>
        <img height={"50px"} width={"50px"} className="me-2 mt-1" src='../src/assets/epicode_logo_symbol.png'/>
        </div>        
       </div>
       <div className="container container-lg mt-2">
        <div className="row gy-2">
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <a href="" className="FooterLinks">Gift Cards</a>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <a href="" className="FooterLinks">Games</a>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <a href="" className="FooterLinks">Terms of use</a>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <a href="" className="FooterLinks">Privacy</a>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <a href="" className="FooterLinks">Legal Notices</a>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <a href="" className="FooterLinks">Cookie Preferences</a>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <a href="" className="FooterLinks">Corporate Information</a>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <a href="" className="FooterLinks">Contact us</a>
          </div>
        </div>
       </div>
       <div className="container-lg d-flex">
        <button className="FooterBtn" style={{fontSize: "0.8rem"}}>Service code</button>
        <button className="FooterBtn" style={{fontSize: "0.8rem"}}><a href="#"><i class="bi bi-arrow-up-square fs-5 text-secondary"></i></a></button>
       </div>
       <div className="container-lg d-flex pt-2 ">
        <i style={{fontSize: "0.8rem"}} className="bi bi-c-circle text-black pb-0 pe-1"></i>
        <p style={{fontSize: "0.8rem", color: "rgba(3, 3, 3, 0.97)"}} >2025 EpiGames,inc.</p>
       </div>
    </div>
  </footer>
      </>
  );
};
export default Footer;

