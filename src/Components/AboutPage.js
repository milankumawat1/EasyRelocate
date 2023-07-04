import React from 'react'
import '../ComponentsCSS/AboutPage.css'
import AboutPoints from '../Attributes/AboutUsPoints.svg'
import aboutusframe from '../Attributes/aboutFrame.svg'
function AboutPage() {
  return (
    <div id='aboutus'>
        <div  className="about-page">
            <div className="left-text">
                <img src={aboutusframe} alt="" /> 
                <br /><br />
                <h1>Who We are ?</h1> <br />
                <p>Pilania Trans Movers started operations in Surat and soon became a highly regarded company in the industry. We take pride in the integrity and integrity of our services, that is why we simplify the moving process, so that you know exactly what to expect. At Pilania Trans Movers, we work hard to provide the right solutions for your needs, start with an analysis during our initial contact and when your luggage is delivered then ends with your complete satisfaction.</p>
                <div className="points">
                       <div className="point">
                       <img src={AboutPoints} alt="" />
                        <h2>Residential Moving</h2>
                        </div>
                        <div className="point">
                       <img src={AboutPoints} alt="" />
                        <h2>Residential Moving</h2>
                        </div>
                </div>
                        <div className="points">
                        <div className="point">
                       <img src={AboutPoints} alt="" />
                        <h2>Residential Moving</h2>
                        </div>
                        
                        <div className="point">
                       <img src={AboutPoints} alt="" />
                        <h2>Residential Moving</h2>
                        </div>
                        </div>
                        <div className="points">
                        <div className="point">
                       <img src={AboutPoints} alt="" />
                        <h2>Residential Moving</h2>
                        </div>
                        <div className="point">
                       <img src={AboutPoints} alt="" />
                        <h2>Residential Moving</h2>
                        </div>
                </div>
            </div>
            <div className="right-img">
                <div className="experience">
                    <h1>25+</h1>
                    <h2>Years Of Experience</h2>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default AboutPage