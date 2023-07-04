import React from "react";
import "../ComponentsCSS/ContactUs.css";
import contactUs from "../Attributes/contactUs.svg";
// import { useForm, ValidationError } from "@formspree/react";
function ContactUs() {
  
  return (
    <div id="contactus">
      <div className="contactUs">
        <img src={contactUs} alt="img" />
        <form  className="contact-container">
          <h1>Contact Us</h1>
<div className="row-1-input">
            <input type="text" name="" id="" placeholder="Your Name" />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            {/* <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /> */}
</div>
          <div className="row-1-input">
            <input id="message" name="message" placeholder="Subject" />
            <select placeholder="Business Department" name="" id="">
              <option value="">Home Relocate</option>
              <option value="">Office Shifting Services</option>
              <option value="">WAREHOUSING SERVICES</option>
              <option value="">CAR CARRIERS & TRANPORTATION</option>
            </select>
          </div>
          <textarea type="text" placeholder="Write you message" />
          <br />
          <button type="submit" >
            Send Message
          </button>
        </form>
      </div>
      {/* <br /> */}
    </div>
  );
}

export default ContactUs;