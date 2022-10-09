import Carousel from "react-bootstrap/Carousel";
import Homeimg from "../image/Homeimg.png";
import "./SliderHeader.css";
import Header from "./Header";
import HeaderItems from "./HeaderItems";
// import Navbar from './Navbar'
import "./Navbar.css";
import logo from "../images/logo.png";
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import { useEffect } from "react";
function SliderHeader() {
  const [user, setUser] = useState([]);
  
  const fetchData = async () => {
    const response = await fetch("/api/getAllBanners");
    const data = await response.json();
    console.log(data.bannerData);
    setUser(data.bannerData);
  };  
  useEffect(()=>{
    fetchData()
  },[])



  return (
    <>
      <Navbar />
      <div>

        <Carousel  slide={false}>
        {user.map((use,i)=>(
          <Carousel.Item key={i}>
            <span className="carasoulImage">
            <img className="d-block w-100" src={use.addBannerImage} alt="First slide" /></span>
            <Carousel.Caption className="Carouselitem">
              <h2>Events are the name of the game</h2>
              <h3>At 18 Candleriggs</h3>
              <h4>{use.bannerStartDate.slice(0,16)}</h4>
              <Link to="/bookTickets">
                {" "}
                <button className="home_btn">Book Tickets</button>
              </Link>
            </Carousel.Caption>
        </Carousel.Item>
        ))}
        </Carousel>
        <Header />
        <HeaderItems />
      </div>
      <Footer />
    </>
  );
}

export default SliderHeader;
