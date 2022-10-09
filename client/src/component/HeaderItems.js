import React from "react";
import "./HeaderItems.css";
import { AiFillCalendar } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { GiTicket } from "react-icons/gi";
import Vector from "../image/Vector.png";
import img1 from "../image/img1.png";
import img2 from "../image/img2.png";
import img3 from "../image/img3.png";
import header_item_image from "../image/header_item_image.png";
import We_Were_Here from "../image/We_Were_Here.png";
import header_top_img from "../image/header_top_img.png";
import whatsapp from "../image/whatsapp.png";
import { useState,useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const HeaderItems = () => {
  const [item,setItem]= useState([])
  useEffect(() => {
   fetch("/api/getAllEvents").then((result)=>{
    result.json().then((resp)=>{
      setItem(resp.eventData)
      console.log(resp.eventData)
      console.log(resp.eventData);
    })
   })
  }, [])

  return (<>
  
    
    <div className="HeaderItems">

{item.map((userss,i)=>{
  return(
 <div className="header_main" key={i}>
 <div className="header_img">
   <img src={userss.uploadMainImage}  className="imgheader" alt="" />
 </div>

 <label className="header_container">
   <div className="heading_item_top">
     <h1>{userss.eventName}</h1>
     <p className="para_main">{userss.title}</p>
     <p className="para_Child">{userss.subTitle}</p>
   </div>
   <div className="header_item_bottom">
     <span>
       <AiFillCalendar className="react_icon" /> {userss.eventStartDate.slice(0,16)}
     </span>
     <span>
       <AiFillClockCircle className="react_icon" />
       Show {userss.showStartHour}
       {userss.showStartZone} | Doors {userss.doorOpenHour}{userss.doorOpeningZone}
     </span>
     <span>
       <GiTicket className="react_icon" />
       Tickets <img src={Vector} alt="" /> {userss.price}
     </span>
   </div>

   <Link to="/bookTickets"><button>BookTicket</button></Link>
 </label>
</div>)
})}
      
      
      <div className="header_item_img container">
        <div className="we_are_here">
          <img src={header_top_img} className="header_top_img" alt="" />
          <img src={We_Were_Here} className="we_Were_Here" alt="" />
        </div>

        <div className="header_item_h1" style={{ fontFamily: "CHAWP" }}>
          <p>
            MTV Janey Godley Clean Bandit Ramond Nearns Nicholas macdonald
            Dmitri From Paris Alabama3 Des McLean Dragart Karen Dunbar Isaac
            Butterfield Paul Riley Ashley Storrie Groove Theory Soul Nation Gary
            Little Ro Campbell Adam Vincent Rowe Keith Carter Stuart Mitchell
            Motown Brothers Christina Bianco Jollyboat Chris Henry
          </p>
        </div>
        <div className="right_whatsapp_img">
          <img src={whatsapp} alt="" />
        </div>
      </div>
    </div>
    
    </>
  );
};

export default HeaderItems;
