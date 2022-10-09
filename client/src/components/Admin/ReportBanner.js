import React from "react";
import Candleriggs18 from "./AdminImages/Candleriggs18.png";
import AddEventLink from "./AdminImages/AddEventLink.png";
import Addbanner from "./AdminImages/Addbanner.png";
import write from "./AdminImages/write.png";
import { MdAlternateEmail, MdDelete } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import dashboardimage from "./AdminImages/dashboardimage.png";
import { AiOutlinePlus } from "react-icons/ai";
import Dashboardwrite from "./AdminImages/Dashboardwrite.png";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import dragCloud from "./AdminImages/dragCloud.png";
import "./ReportsAboutEvent.css";
import { useState } from "react";
import { useEffect } from "react";
import { RiFileList3Fill } from "react-icons/ri";
import axios from "axios";

export default function ReportBanner() {
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
  function deleteBanner(_id){
    fetch(`/api/deleteBanners/${_id}`,{
      method:"DELETE",
    }).then((result)=>{
    result.json().then((resp)=>{
    console.log(resp);
    fetchData();
    })
    })
    console.log(_id)
    }


    
  return (
    <>
      <div className="ReportContainer ">
        <div className="row container">
          <div className="ReportEventFirst col-1">
          <Link to="/">  <img className="candleriggs" src={Candleriggs18} alt="" /></Link>
            <div className="addEventLinks">
              <div className="addeventImage">
                <Link to="/addevent">
                  <img src={AddEventLink} alt="" />
                </Link>
                <div className="addeventSecond">
                  <span>
                    <img src={write} alt="" />
                    <Link to="/addbanner">
                      <img className="addbannerimg" src={Addbanner} alt="" />{" "}
                    </Link>
                  </span>
                  <div className="lists">
                  <RiFileList3Fill className="listIcon"/><Link to="/reportsBanner"> All Banners</Link>
                  </div>
                  <div className="lists">
                    <RiFileList3Fill className="listIcon" />
                    <Link to="/reportsEvents"> All Events</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ReportEventRightSide col col-sm-6 ">
            <div className="dashboardHeadings">
              <span className="DashboardBox">
                <img src={dashboardimage} alt="" />
                <img className="dashboardwrite" src={Dashboardwrite} alt="" />
              </span>
            </div>
            <div className="ReportsHeadings">
              <h5>Banners</h5>
              <div className="SearchAdd row">
                <div className="ReportSearch col-6">
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="&#128269; Search"
                  />
                </div>
                <div className="AddLeadForm col-6">
              <Link to="/addbanner">   <button>
                    Add Banner <AiOutlinePlus className="leadIcon" />{" "}
                  </button></Link> 
                </div>
              </div>
              <div className="reportTable">
                <table>
                  <tr className="tableheading">
                    <th colSpan="1">Banner Name</th>
                    <th colSpan="1">Start Date</th>
                    <th colSpan="1">End Date</th>
                    <th colSpan="1">Edit</th>
                    <th colSpan="1">Delete</th>
                  </tr>
                  {user && user.length ? user.map((userss, i) => (
                    <tr className="tableData"  key={i}>
                      <td>{userss.bannerName}</td>
                      {/* <td>{userss.price}</td> */}
                      <td>{userss.bannerStartDate.slice(0,10)}</td>
                      <td>{userss.bannerEndDate.slice(0,10)}</td>
                      <td>
                        <Link to={`/putbanner/${userss._id}`}>
                          <button >
                            <HiPencil />
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button  onClick={()=>deleteBanner(userss._id)}>
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                    )
                    
                  ):null}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}