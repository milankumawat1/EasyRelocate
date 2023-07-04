import React, { useState } from "react";
import Homebackgroundimg from "../Attributes/Background Image.svg";
import call from "../Attributes/Call.png";
import location from "../Attributes/Location.png";
import "../ComponentsCSS/HomePage.css";
// import logo from "../Attributes/Logo.svg";
import logo from "../Attributes/logo-color.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faFacebookSquare,
  faLocationDot,
  faPhone, 
  faTimes
} from "@fortawesome/free-solid-svg-icons";
// library.add(faFontAwesomeIcon);
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function HomePage() {

  const[showClass, setshowClass]= useState(false);

  const toggleShow=()=>{
    setshowClass(!showClass);
  };
  const phoneNumber = '+919306539836'; // Replace with the desired phone number
  const message = 'MESSAGE'; // Replace with the desired message

  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  
  return (
    
    <div>
      <div className="Image-container">
        <div className="inner-container">
          <div className="logo-and-call-div">
            <img style={{ height:'100px',width:'150px',borderRadius:'10px'}}  src={logo} alt="" />
            <div className="call-and-address-div">
              <div className="call-and-address">
                <img src={call} alt="" />
                <div className="description">
                  <h1>Have any questions?</h1>
                  {/* <br /> */}
                  {/* <h2>9306539836</h2> */}
                  <a href="tel:+919306539836">9306539836</a>
                </div>
              </div>
              <div className="call-and-address">
                <img src={location} alt="" />
                <div className="description">
                  <h1>Here we are</h1>
                  <a href="https://www.google.com/maps/search/Shop+no.+B+50+Sai+mohan+bhestan+surat+gujarat+Pincode%C2%A0395023/@21.1300434,72.8532635,16.76z?authuser=0&entry=ttu">Shop no. B 50 <br/> Sai mohan bhestan surat gujarat
Pincode 395023</a>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-and-chat">
            <div className="navbar">
              <div className="page-links">
                <a href="#" className="active">Home</a>
                <a href="#aboutus">About Us</a>
                <a href="#services">Our Services</a>
                <a href="#contactus">Contact us</a>
                {/* <a href="">Our Branches</a> */}
              </div>
              <div className="social-and-quote">
                {/* <FontAwesomeIcon icon={faFontAwesomeIcon} /> */}
                <div className="social">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              <button id="contactus" className="free-quote">Get a free quote</button>
              </div>
            </div>
            <a href={url} className="chat-with-us">Chat With Us</a>
          </div>
          
          <div className="responsive-nav">
            <div className="responsivebar-top">
            <img className="res-logo" src={logo} alt="logo"></img>
            <div style={{display:"flex", padding:"5px"}}>
            <FontAwesomeIcon style={{color:"white", background:"green", padding:"5px", fontSize:"35px", borderRadius:"8px", margin:"5px"}} icon={faPhone}></FontAwesomeIcon>
            <div onClick={toggleShow} className={`element ${ showClass? "inv":"burger"}` }>
              <div className={`element ${ showClass? "inv":"line"}` }></div>
              <div className={`element ${ showClass? "inv":"line"}` }></div>
              <div className={`element ${ showClass? "inv":"line"}` }></div>
            </div>
            <FontAwesomeIcon onClick={toggleShow} className={`element ${ showClass? "cross":"inv"}` }  icon={faTimes}></FontAwesomeIcon>
            </div>
            </div>
            <div className={`element ${ showClass?"responsive-links":"inv" }`}>
              <a className="reponsive-top-link" href="#"s>Home</a>
                <a className="reponsive-top-link" href="">About Us</a>
                <a className="reponsive-top-link" href="#services">Our Services</a>
                <a className="reponsive-top-link" href="#contactus">Contact us</a>
                <a className="reponsive-top-link" href="">Our Branches</a>
                <div className="social-and-quote">
                {/* <FontAwesomeIcon icon={faFontAwesomeIcon} /> */}
                <div className="social">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              <a href="#contactus" className="free-quote">Get a free quote</a>
              </div>
              </div>
          </div>
          <div className="centeral-data">
            <h6>Want to move?</h6> <br />
            <h1>Big or small...</h1>
            <h1>we can handle it with care</h1> <br />
            <div className="lg-buttons">
              <a href="#simpleSteps" className="learn-more">Learn More</a>
              <a href="#contactus"  className="get-started">Get Started</a>
              
            </div>
          </div>
        </div>
        
      </div>
      <div className="moving-easy-div"> <br /><br />
          <div className="moving-div">
            <h1 className="h-frontpage">we make moving easy</h1>
          </div> <br /><br />
      </div>
      
    </div>
  );
}

export default HomePage;
