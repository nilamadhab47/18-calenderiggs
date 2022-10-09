import React from "react";
import "./Footer.css";
import {IoIosMail } from 'react-icons/io';
import {BsFillTelephoneFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <div id="footermain" className="footer">
      <div className="email">
        <div className="email-box">
          <h5 >Get Event Updates</h5>
          <div className="form-box">
          <form>
            <input placeholder="Enter email address" type="email" />
            <button>Submit</button>
          </form>
          </div>
          
         
        </div>
        <div className="contact">
            <h4>Contact Us</h4>
            <p> <span  style={{"fontSize":"25px"  }}><IoIosMail/></span> events@18candleriggs.com</p>
            <p> <span  style={{"fontSize":"25px"  }}> <BsFillTelephoneFill/> </span>  07936 558303</p>
          </div>
      </div>
    </div>
  );
};

export default Footer;
