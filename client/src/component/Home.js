import React from "react";
import "./Home.css";
import {ImTicket} from "react-icons/im"
import {AiFillClockCircle, AiFillCalendar} from "react-icons/ai"
import image from "../images/image.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useState,useEffect } from "react";
import Footer from "./Footer";

const Home = () => {
  const [item,setItem]= useState([])
  useEffect(() => {
   fetch("/api/getAllEvents").then((result)=>{
    result.json().then((resp)=>{
      setItem(resp.eventData)
      console.log(resp.eventData)
    })
   })
  }, [])
 
  return (<>
    <Navbar/>
    <div className="container">
      <div className="f-cont">
        <div className="s-cont">
          <div className="t-cont">
            <h2 >VALENTINES BURLESQUE EVENING</h2>
            <h4>AT 18 CANDLERIGGS </h4>
            <h4>ON 14TH & 15TH FEB</h4>
          <Link to="/bookTickets"> <button>Book tickets</button></Link> 
            <h5>3 COURSE MEAL & SHOW INCLUDED $17 per person</h5>
          </div>
        </div>
      </div>

      <div className="wts-on">
        <div className="Link" style={{"display":"flex","justifyContent":"space-between"}}>
        <p style={{"margin":"auto","fontSize":"30px", "fontWeight":"700"}}>What's on</p>
    <p className="wtsView" style={{"margin-top":"15px","fontSize":"20px", "fontWeight":"500"}}>
    <Link style={{"textDecoration":"none","color":"Black","margin-top":"5px"}} to='SliderHeader'>View All</Link>
    </p>
        </div>
     
     
        <div
          className="allFrontImage row row-cols-1 row-cols-md-3 g-4"
         
        >
          
      {item.map((data,i)=>(
           <div className="col" key={i}>
           {/* <div className="card"> */}
             <img src={data.uploadMainImage} className="card-img-top" alt="..." />
             <div className="card-body background-color-home">
               <h5 className="card-title">{data.eventName}</h5>
               <p className="card-text">
              {data.title}
               </p>
               <p className="card-text text-1">
              {data.subTitle}
               </p>
               <p className="card-text text-2">
               <ImTicket/> Ticket ${data.price}
               </p>
               <p className="card-text text-2-a">
               <AiFillClockCircle/> Show{data.showStartHour} {data.showStartZone} | Doors{data.showStartMinute
} {data.showStartZone}
               </p>
               <p className="card-text date">
               <AiFillCalendar/> {data.eventStartDate.slice(0,16)}
               </p>
               <a href="/bookTickets" className="btn btn-primary button">
                Book Tickets
               </a>
             </div>
           {/* </div> */}
         </div>
  ))}
         
          <p className="DownImageLink" style={{"margin-top":"15px","fontSize":"20px", "fontWeight":"500"}}>
    <Link to='SliderHeader'>View All</Link>
    </p>
        </div>
      </div>
      <div>
      <div className="wts-on">
      <div className="Link" style={{"display":"flex","justifyContent":"space-between","marginBottom":"3rem"}}>
        <p style={{"margin":"auto","fontSize":"30px", "fontWeight":"700"}}>Must See Events</p>
    <p className="HideView" style={{"margin-top":"15px","fontSize":"20px", "fontWeight":"500"}}>
    <Link style={{"textDecoration":"none","color":"Black","margin-top":"5px"}} to='Venue'>View All</Link>
    </p>
   
        </div>
        

        <div className="container">

          <div className="images" style={{display: "flex"}}>
            <img src={image7} className="imageFirst images-events" style={{
              position:" relative",
              left: "8rem",
              zIndex: -1}}>
            </img>
            <img src={image5} className="images-events" style={{opacity: "1"}}>
            </img>
            <img src={image6} className="imageThird  images-events"
            style={{
              position: "relative",
    right: "8rem",
    zIndex: "-1"
            }}
            >
            </img>

          </div>
          <p className="DownImageLink downimagelink" style={{"margin-top":"15px","fontSize":"20px", "fontWeight":"500"}}>
    <Link style={{"textDecoration":"none","color":"Black","margin-top":"2rem"}} to='Venue'>View All</Link>
    </p>
        </div>




        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
