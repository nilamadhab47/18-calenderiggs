import React from 'react'
import Candleriggs18 from "./AdminImages/Candleriggs18.png";
import AddEventLink from "./AdminImages/AddEventLink.png";
import Addbanner from "./AdminImages/Addbanner.png";
import write from "./AdminImages/write.png";
import dashboardimage from "./AdminImages/dashboardimage.png";
import Dashboardwrite from "./AdminImages/Dashboardwrite.png";
import Lines from "./AdminImages/Lines.png";
import dragCloud from "./AdminImages/dragCloud.png";
import { Link,Navigate, useNavigate, useParams } from "react-router-dom";
import submitEvent from "./AdminImages/submitEvent.png";
import TimeDot from './AdminImages/TimeDot.png';
import {RiFileList3Fill} from 'react-icons/ri'
import "./AddBanner.css";
import axios from "axios";
import { useState,useEffect } from "react";

export default function PutBanner() {
  const navigate=useNavigate()
  const {_id}=useParams();
  console.log(_id);
  const [data,setData]=useState({
    // addBannerImage :,
    // addMobileBannerImage: ,
    bannerName:"",
    bannerLink:"",
    bannerStartHour:0,
  bannerStartMinute:0,
  bannerStartZone :"",
    bannerCloseHour:0,
    bannerCloseMinute:0,
    bannerCloseZone:"",
    bannerStartDate:"",
    bannerEndDate:"",
  })

  const [selectedFile,setSelectedFile]=useState(null);
  const [selectedFilephone,setSelectedFilePhone]=useState(null);
  const handleFileSelect=(e)=>{
    setData({...data,[e.target.id]:e.target.value});
    setSelectedFile(e.target.files[0]);
    setSelectedFilePhone(e.target.files[0]);
  }
  const fetchData = async () => {
    const response = await fetch(`/api/getBanners/${_id}`);
    const data = await response.json();
    console.log(data)
    setData(data);
  };  
  useEffect(()=>{
    fetchData()
  },[])



  const handleSubmit=async (e)=>{
    e.preventDefault();
    const formData= new FormData()
    formData.append("selectedFile",selectedFile)
    formData.append("selectedFilePhone",selectedFilephone)
    formData.append("addBannerImage",data.addBannerImage);
    formData.append("addMobileBannerImage",data.addMobileBannerImage);
    formData.append("bannerName",data.bannerName);
    formData.append("bannerLink",data.bannerLink);
    formData.append("bannerStartHour",data.bannerStartHour);
    formData.append("bannerStartMinute",data.bannerStartMinute);
    formData.append("bannerStartZone",data.bannerStartZone);
    formData.append("bannerCloseHour",data.bannerCloseHour);
    formData.append("bannerCloseMinute",data.bannerCloseMinute);
    formData.append("bannerCloseZone",data.bannerCloseZone);
    formData.append("bannerStartDate",data.bannerStartDate);
    formData.append("bannerEndDate",data.bannerEndDate);
   
    try{
      const response = await axios({
        method:"put",
        url:`/api/updateBanners/${_id}`,
        data: formData,
        headers:{ "Content-Type":"multipart/form-data"},
         
        })
        console.log(response);
       
        navigate("/reportsBanner")
       } catch(error){
          console.log(error);
        }
  }
  return (
     <>
        <div className="EventContainer ">
        <div className="row container">
          <div className="addEvent col-1">
          <Link to="/">  <img className="candleriggs" src={Candleriggs18} alt="" /></Link>
            <div className="addEventLinks">
              <div className="addeventImage">
              <Link to='/addevent'>   <img src={AddEventLink} alt="" /></Link>
                <div className="addeventSecond">
                  <span>
                    <img src={write} alt="" />
                   <img className="addbannerimg" src={Addbanner} alt="" />
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
          <div className="addBannerRightSide col col-sm-6 ">
            <form onSubmit={handleSubmit}>
            <div className="dashboardHeadings">
              <span className="DashboardBox">
                <img src={dashboardimage} alt="" />
                <img className="dashboardwrite" src={Dashboardwrite} alt="" />
              </span>
            </div>
            <div className="h2">
              <h5>Add Banner</h5>
            </div>
            <div className="uploadingBanner">
              <div className="dragingImageBanner">
                <div className="dragingparaBanner">
                  <div className="row row-cols-md-2 g-4">
                    <div className="col">
                    <div className="uploadingBanner2">
                <h5>Upload Main Image</h5>
                <p>Supports: JPG , PNG , SVG , GIF , JPEG (Max Size : 2MB)</p>
              </div>
            
                      <div className="LinesImagesBanner">
                        <img src={Lines} alt="" />
                    
                      </div>
                      
                      <div className="dragingpara2">
                        
                      <label htmlFor="addBannerImage" ><img src={dragCloud} alt="" /></label>
<input type="file" id="addBannerImage" onChange={handleFileSelect} accept="image/*" style={{display:"none"}}  ></input>
                        
                        <p>Drag and drop or browse to choose a file</p>
                      </div>
                      
                    </div>
                    
                    <div style={{marginLeft:"-7rem"}} className=" col">
                      <div className="uploadingBanner2">
                      <h5>Upload Main Image (Mobile version)</h5>
                <p>Supports: JPG , PNG , SVG , GIF , JPEG (Max Size : 2MB)</p></div>
                      <div className="LinesImagesBanner">

                        <img  src={Lines} alt="" />
                      </div>
                      
                      <div className="dragingpara2">
                        <label htmlFor="addMobileBannerImage" ><img src={dragCloud} alt="" /></label>
<input type="file" id="addMobileBannerImage"  onChange={handleFileSelect} accept="image/*" name="" style={{display:"none"}} ></input>
                        <p>Drag and drop or browse to choose a file</p>
                      </div>
                      
                    </div>
                  
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="formStartBanner">
                <div className="mb-3">
                  <label htmlFor="bannerName" className="form-label">
                 Banner Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter Banner Name"
                    className="form-control"
                    id="bannerName"   onChange={handleFileSelect}
                    aria-describedby="emailHelp" value={data.bannerName}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="bannerLink" className="form-label">
                   Banner Link 
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Banner Title"
                    className="form-control"
                    id="bannerLink"  onChange={handleFileSelect}
                    aria-describedby="emailHelp" value={data.bannerLink}
                  />
                </div>
               
             
                
                <br />
                <br />
                {/* //start time// */}
                <div className="startTime"> 
                <h5 >Banner Duration</h5>
                  <div className="container">
                    <div className="row row-cols-2">
                      <div className="timeHeading col">
                        <p> Start Time</p>
                        <div className="TimeCols timecols2">
  <div className="row row-cols-4">
    <div className="col">
      {/* <input required type="number" placeholder="00" id="bannerStartHour"  onChange={handleFileSelect} value={data.bannerStartHour} /> */}
      <label htmlFor="bannerStartHour"></label>
  <select required  onChange={handleFileSelect} value={data.bannerStartHour}  style={{"-webkit-appearance": "none"}} name="cars" id="bannerStartHour">
    <option ></option>
    <option >1</option>
    <option >2</option>
    <option >3</option>
    <option >4</option>
    <option >5</option>
    <option >6</option>
    <option >7</option>
    <option >8</option>
    <option >9</option>
    <option >10</option>
    <option >11</option>
    <option >12</option>
  </select>
      </div>
    
    <div className="col"><img src={TimeDot} alt="" /></div>
    <div className="secondInput secondInput2 col">
      {/* <input required type="number" placeholder="00" id="bannerStartMinute" value={data.bannerStartMinute} onChange={handleFileSelect} /> */}
      <label htmlFor="bannerStartMinute"></label>
  <select required value={data.bannerStartMinute} onChange={handleFileSelect}  style={{"-webkit-appearance": "none"}} name="cars" id="bannerStartMinute">
    <option></option>
    <option >1</option>
    <option >2</option>
    <option >3</option>
    <option >4</option>
    <option >5</option>
    <option >6</option>
    <option >7</option>
    <option >8</option>
    <option >9</option>
    <option >10</option>
    <option >11</option>
    <option >13</option>
    <option >14</option>
    <option >15</option>
    <option >16</option>
    <option >17</option>
    <option >18</option>
    <option >19</option>
    <option >20</option>
    <option >21</option>
    <option >22</option>
    <option >23</option>
    <option >24</option>
    <option >25</option>
    <option >26</option>
    <option >27</option>
    <option >28</option>
    <option >29</option>
    <option >30</option>
    <option >31</option>
    <option >32</option>
    <option >33</option>
    <option >34</option>
    <option >35</option>
    <option >36</option>
    <option >37</option>
    <option >38</option>
    <option >39</option>
    <option >40</option>
    <option >41</option>
    <option >42</option>
    <option >43</option>
    <option >44</option>
    <option >45</option>
    <option >46</option>
    <option >47</option>
    <option >48</option>
    <option >49</option>
    <option >50</option>
    <option >51</option>
    <option >52</option>
    <option >53</option>
    <option >54</option>
    <option >55</option>
    <option >56</option>
    <option >57</option>
    <option >58</option>
    <option >59</option>
    <option >60</option>

  </select>
      </div>
    <div className="col radio2">   <div className="form-check">
  {/* <input required className="form-check-input1" type="radio" name="flexRadioDefault1" id="bannerStartZone" value={data.bannerStartZone} onChange={handleFileSelect}/> */}
  <label htmlFor="bannerCloseHour"></label>
  <select required  value={data.bannerStartZone} onChange={handleFileSelect}  style={{"-webkit-appearance": "none"}}  name="cars" id="bannerStartZone">
    <option >Zone</option>
    <option >AM</option>
    <option >PM</option>
  </select>
</div>
</div>
    </div>
    </div>
                        
                      </div>
                      <div className="timeHeading BannerTimeHeading col">
                        <p>End Time </p>
                        <div className="TimeCols timecols2" >
  <div className="row row-cols-4">
    <div className="col">
      {/* <input required type="number" placeholder="00" id="bannerCloseHour" onChange={handleFileSelect}  value={data.bannerCloseHour}/> */}
      
      <label htmlFor="bannerCloseHour"></label>
  <select required  value={data.bannerCloseHour} onChange={handleFileSelect}  style={{"-webkit-appearance": "none"}} typeof="number" name="cars" id="bannerCloseHour">
    <option ></option>
    <option >1</option>
    <option >2</option>
    <option >3</option>
    <option >4</option>
    <option >5</option>
    <option >6</option>
    <option >7</option>
    <option >8</option>
    <option >9</option>
    <option>10</option>
    <option >11</option>
    <option >12</option>
  </select>
      </div>
    <div className="col"><img src={TimeDot} alt="" /></div>
    <div className="secondInput secondInput2 col">
      {/* <input required type="number" placeholder="00" id="bannerCloseMinute" value={data.bannerCloseMinute} onChange={handleFileSelect} /> */}
      <label htmlFor="bannerCloseMinute"></label>
  <select required  value={data.bannerCloseMinute} onChange={handleFileSelect}  style={{"-webkit-appearance": "none"}} name="cars" id="bannerCloseMinute">
    <option ></option>
    <option >1</option>
    <option >2</option>
    <option >3</option>
    <option >4</option>
    <option >5</option>
    <option >6</option>
    <option >7</option>
    <option >8</option>
    <option >9</option>
    <option >10</option>
    <option >11</option>
    <option >13</option>
    <option >14</option>
    <option >15</option>
    <option >16</option>
    <option >17</option>
    <option >18</option>
    <option >19</option>
    <option >20</option>
    <option >21</option>
    <option >22</option>
    <option >23</option>
    <option >24</option>
    <option >25</option>
    <option >26</option>
    <option >27</option>
    <option >28</option>
    <option >29</option>
    <option >30</option>
    <option >31</option>
    <option >32</option>
    <option >33</option>
    <option >34</option>
    <option >35</option>
    <option >36</option>
    <option >37</option>
    <option >38</option>
    <option >39</option>
    <option >40</option>
    <option >41</option>
    <option >42</option>
    <option >43</option>
    <option >44</option>
    <option >45</option>
    <option >46</option>
    <option >47</option>
    <option >48</option>
    <option >49</option>
    <option >50</option>
    <option >51</option>
    <option >52</option>
    <option >53</option>
    <option >54</option>
    <option >55</option>
    <option >56</option>
    <option >57</option>
    <option >58</option>
    <option >59</option>
    <option >60</option>

  </select>
      </div>
    <div className="col radio2">   <div className="form-check">
  {/* <input required className="form-check-input2" type="radio" name="flexRadioDefault2" id="bannerCloseZone" value={data.bannerCloseZone} onChange={handleFileSelect}/> */}
  <label htmlFor="bannerCloseZone"></label>
  <select required  value={data.bannerCloseZone}  onChange={handleFileSelect}  style={{"-webkit-appearance": "none"}}  name="cars" id="bannerCloseZone">
    <option >Zone</option>
    <option >AM</option>
    <option >PM</option>
  </select>
</div></div>
    </div>
    </div>
                      
                      </div>
                      <div className="timeHeading datenewStyle  TimeHeadingTime col">
                        <p>Banner Start Date</p> <input required type="date" name="date" id="bannerStartDate" onChange={handleFileSelect} value={data.bannerStartDate} />
                      </div>
                      <div className="timeHeading datenewStyle  TimeHeadingTime col">
                        <p>Banner End Date</p> <input required type="date" name="date" id="bannerEndDate" value={data.bannerEndDate} onChange={handleFileSelect} />
                      </div>
                      <br />
                      <br />
                    
                   
                    </div>
                  </div>
                </div>
                <div className="submitButton">
                  <button type="submit">
                    <img src={submitEvent} alt="" />
                    
                  </button>
                </div>
            </div>
            </form>
          
            </div>
          </div>
        </div>
    </>
  )
}
