import React from "react";
import "./Venue.css";
import Main_Carousel from "../component/Main_Carousel";
// import "./Navbar.css";
import FirstEventI from "./venues/FirstEventI.png";
import SecondEventI from "./venues/SecondEventI.png";
// import logoCand from "../components/venues/logoCand.png";
import ImageCornerNew1 from "../image/ImageCornerNew1.png";
import ImageCornerNew2 from "../image/ImageCornerNew2.png";

import whatsapp from "./venues/whatsapp.png";
import FirstCollec from "./venues/FirstCollec.png";
import SecondCollec from "./venues/SecondCollec.png";
import ThirdCollec from "./venues/ThirdCollec.png";
import FourthCollec from "./venues/FourthCollec.png";
import FifthCollec from "./venues/FifthCollec.png";
import Footer from "./Footer";
import "./Navbar.css";
import logo from "../images/logo.png";
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";
export default function Venue() {
  return (
    <>
    <Navbar/>
      <div className="venuesStarting">
        <div
          className="event_rowStart event_main_section row row-cols-1 row-cols-md-2 g-4 container"
          style={{ "margin-top": "3rem" }}
        >
          <div className="event_Col1 col container">
            <img src={FirstEventI} className="card-img-top" alt="..." />
            <div className="card-body card-items card_heading  ">
              <h5 className="card-title cardEight   ">
                At 18 Candelriggs we make it happen{" "}
              </h5>
            </div>
          </div>
          <div className="event_Col2 col container">
            <div className="card-body card-position card_heading">
              <h5 className="card-title cardEvent ">
                Events are the name of the game
              </h5>
            </div>
            <img src={SecondEventI} className="card-img-top" alt="..." />
          </div>
        </div>
        {/* <Main_Carousel/> */}
        {/* book venue */}
        <div className="Book_Venue_container container">
          <h3>Book Venue</h3>
          <div className="Book_carasouel">
            <Main_Carousel />
          </div>
          <div className="Book_Venue_description">
            <p>
              In the heart of Glasgow is one of the oldest and most stylish
              districts “The Merchant City” 18 Candelriggs is a purpose built
              thriving event space, set with its own stage and awesome sound,
              the perfect location to host your next premium event holding up to
              200 people with late license, with great food and delicious
              cocktails.
            </p>

            <section>
              Venue booking enquiries are simple, click the whatsapp icon and
              speak directly to a manager, let us check the date and see if we
              can make your event a night to remember,
            </section>
            <p>
              18 Candelriggs has catered to Live Bands, DJs, Comedians and even
              an award night for MTV.
            </p>
            <p> At 18 Candelriggs we make it happen, let’s chat.</p>
          </div>
          <div className="Book_button">
            <a href="/"> Book Venue</a>
          </div>
        </div>
      </div>

      <section className="section_main_container">
        <div className="section_main_left">
          <span className="span_image">
            <img src={ImageCornerNew1} alt="" />
          </span>
          <div className="top_image">
            <img src={FirstCollec} alt="" />
            <img src={SecondCollec} alt="" />
          </div>
          <div className="horizontal_image">
            <img src={ThirdCollec} alt="" />
            <img src={FourthCollec} alt="" />
          </div>
          <div className="main_horizontal_img">
            <img src={FifthCollec} alt="" />
          </div>
          <img src={ImageCornerNew2} className="corner_left" alt="" />
        </div>
      </section>
      <div className="right_section">
        <div className="para_section">
          <p>
            A one-stop cabaret lounge in the heart of Merchant City, 18
            Candleriggs (formerly known as Wild Cabaret) knows no bounds when it
            comes to unique dabbles, daring nights and dashing shows.
          </p>
          <p>
            Echoing its eccentric entertainment, the decor is markedly Art Deco.
            Gilded in gold, with a bar boasting its name up in Hollywood-style
            lights, these two spaces epitomize showbiz and glistening sass.
            Sashay down to a table of baroque seats and let the show commence.
          </p>
          <p>
            Events are the name of the game at 18 Candleriggs, where live music
            and cabaret reign supreme. From burlesque shows and circus troupes
            to comedy nights and luxe shows, it's at the top of its game when it
            comes to providing guests with a wholly unique drinking and dining
            experience in the city. Top hats? Sparkles? And feather boas? These
            all come as standard.
          </p>
        </div>
      </div>

      <div className="whatsappImage">
        <div className="whatsapp">
          <a href="/">
            <img src={whatsapp} alt="" />
          </a>
          <h5>Chat with us</h5>
        </div>
      </div>
      <Footer/>
    </>
  );
}
