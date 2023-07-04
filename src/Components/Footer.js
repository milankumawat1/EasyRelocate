import React from 'react'
import '../ComponentsCSS/Footer.css'
import footerCall from '../Attributes/FooterCall.svg'
import footerMessage from '../Attributes/FooterMessage.svg'
import footerGPS from '../Attributes/FooterGPS.svg'
// import Logo from '../Attributes/Logo.svg'
import Logo from '../Attributes/logo-color.png'
import crew from '../Attributes/crew.svg'
import { Map, GoogleApiWrapper } from "google-maps-react";

const Footer = (props) => {
    const { google } = props;
  return (
    <div className='foot'>
        <div className="random"></div>
        <div className="call-us-free">
            <div className="call-details">
                 <h1>Call Us For Free</h1>
                 <h6>Call us today and get your free quote in simple 3 steps</h6>
                 {/* <br /> */}
                <h2> <a href='tel:+919306539836'>+919306539836</a></h2>
                      
             </div>
             <img style={{width:"20%"}} src={crew} alt="" />
        </div>
        <div className="random"></div>
        <div className="footer-container">
            <div className="footer-upper-box">
                <div className="flexBoxes">
                    <div className='inner-divs'>
                    <img src={footerCall} alt="" />
                    <a href="tel:+919306539836">+919306539836</a>
                    </div>
                    {/* <br /> */}
                    <div className='inner-divs'>
                    <img src={footerMessage} alt="" />
                    <a href="mailto:pilaniyasudhir@gmail.com">pilaniyasudhir@gmail.com</a>  <br />
                    </div>
                    <div className='inner-divs'>
                    <img src={footerGPS} alt="" />
                    <a href='https://www.google.com/maps/search/Shop+no.+B+50+Sai+mohan+bhestan+surat+gujarat+Pincode%C2%A0395023/@21.1300434,72.8532635,16.76z?authuser=0&entry=ttu'>Shop no. B 50 Sai mohan bhestan surat gujarat Pincode 395023</a>
                    </div>
                </div>
                <div className="flexBoxes">
                    <img style={{ height:'200px',width:'200px'}} src={Logo} alt="" />
                    <div className="social-media-icons">
                        
                        

                    </div>
                </div>
                <div className="flexBoxes">
                    {/* <div className="map-container"> */}
                    {/* <Map
                    className="google-map"
                    google={google}
                    style={{
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                    zoom={10}
                    initialCenter={{
                      lat: 28.70406,
                      lng: 77.102493,
                    }}
                  /> */}
                    {/* </div> */}
                </div>
            </div>
            {/* <hr /> */}
            <p style={{marginLeft:'20px'}}>&copy; 2023 SpeedyShift, All rights reserved.</p>
        </div>
    </div>
  )
}

// export default GoogleApiWrapper({
//     apiKey: "AIzaSyAHZ8-Ovxvgpl_9NmgT0y7kMcQC94ZR1kI",
//   })(Footer);
  export default Footer;