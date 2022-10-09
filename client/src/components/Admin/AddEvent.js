import React from "react";
import "./AddEvent.css";
import Candleriggs18 from "./AdminImages/Candleriggs18.png";
import AddEventLink from "./AdminImages/AddEventLink.png";
import Addbanner from "./AdminImages/Addbanner.png";
import write from "./AdminImages/write.png";
import dashboardimage from "./AdminImages/dashboardimage.png";
import Dashboardwrite from "./AdminImages/Dashboardwrite.png";
import Lines from "./AdminImages/Lines.png";
import dragCloud from "./AdminImages/dragCloud.png";
import euro from "./AdminImages/euro.png";
import submitEvent from "./AdminImages/submitEvent.png";
import TimeDot from "./AdminImages/TimeDot.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { RiFileList3Fill } from "react-icons/ri";
import { useState, useEffect } from "react";
import axios from "axios";
export default function AddEvent() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    eventName: "",
    title: "",
    subTitle: "",
    eventLink: "",
    price: "",
    showStartHour: "",
    showStartMinute: "",
    showStartZone: "",
    doorOpenHour: 0,
    doorOpenMinute: 0,
    doorOpeningZone: "",
    date: null,
    eventStartHour: 0,
    eventStartMinute: 0,
    eventStartZone: "",
    eventEndHour: 0,
    eventEndMinute: 0,
    eventEndZone: "",
    eventStartDate: null,
    eventEndDate: null,
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState();
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [previews, setPreviews] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);


  useEffect(() => {
    if (!selectedFiles) {
      setPreviews(undefined);
      return;
    }

    const objectUrls = URL.createObjectURL(selectedFiles);
    setPreviews(objectUrls);

    return () => URL.revokeObjectURL(objectUrls);
  }, [selectedFiles]);


  const handleChange1 = (e) => {
    setSelectedFile(e.target.files[0]);

  }
  const handleChange2 = (e) => {
    setSelectedFiles(e.target.files[0]);
    
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
    // setSelectedFile(URL.createObjectURL(e.target.files[0]));
    // setSelectedFiles(URL.createObjectURL(e.target.files[0]));

    // const reader = new FileReader();
    // reader.onload = () => {
    //   if(reader.readyState === 2){
    //     setSelectedFile(reader.result)
    //   }
    // }
    // reader.readAsDataURL(e.target.files[0])
    // setSelectedFiles(e.target.files[0])
  };

  // const formData = {
  //   data: data,
  // };
  console.log(data);
  console.log(selectedFile);
  // console.log(selectedFiles)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    formData.append("selectedFiles", selectedFiles);
    formData.append("eventName", data.eventName);
    formData.append("title", data.title);
    formData.append("subTitle", data.subTitle);
    formData.append("eventLink", data.eventLink);
    formData.append("price", data.price);
    formData.append("showStartHour", data.showStartHour);
    formData.append("showStartMinute", data.showStartMinute);
    formData.append("showStartZone", data.showStartZone);
    formData.append("doorOpenHour", data.doorOpenHour);
    formData.append("doorOpenMinute", data.doorOpenMinute);
    formData.append("doorOpeningZone", data.doorOpeningZone);
    formData.append("date", data.date);
    formData.append("eventStartHour", data.eventStartHour);
    formData.append("eventStartMinute", data.eventStartMinute);
    formData.append("eventStartZone", data.eventStartZone);
    formData.append("eventEndHour", data.eventEndHour);
    formData.append("eventEndMinute", data.eventEndMinute);
    formData.append("eventEndZone", data.eventEndZone);
    formData.append("eventStartDate", data.eventStartDate);
    formData.append("eventEndDate", data.eventEndDate);
    try {
      const response = await axios({
        method: "post",
        url: "/api/createEvents",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(response);
      setData({
        eventName: "",
        title: "",
        subTitle: "",
        eventLink: "",
        price: "",
        showStartHour: 0,
        showStartMinute: 0,
        showStartZone: "",
        doorOpenHour: 0,
        doorOpenMinute: 0,
        doorOpeningZone: "",
        date: "",
        eventStartHour: 0,
        eventStartMinute: 0,
        eventStartZone: "",
        eventEndHour: 0,
        eventEndMinute: 0,
        eventEndZone: "",
        eventStartDate: "",
        eventEndDate: "",
      });
      navigate("/reportsevents");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="EventContainer ">
        <div className="row container">
          <div className="addEventFirst col-1">
            <Link to="/">
              {" "}
              <img className="candleriggs" src={Candleriggs18} alt="" />
            </Link>
            <div className="addEventLinks">
              <div className="addeventImage">
                <img src={AddEventLink} alt="" />
                <div className="addeventSecond">
                  <span>
                    <img src={write} alt="" />
                    <Link to="/addbanner">
                      <img className="addbannerimg" src={Addbanner} alt="" />{" "}
                    </Link>
                  </span>
                  <div className="lists">
                    <RiFileList3Fill className="listIcon" />
                    <Link to="/reportsBanner"> All Banners</Link>
                  </div>
                  <div className="lists">
                    <RiFileList3Fill className="listIcon" />
                    <Link to="/reportsEvents"> All Events</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="addEventRightSide col col-sm-6 ">
            <form onSubmit={handleSubmit}>
              <div className="dashboardHeadings">
                <span className="DashboardBox">
                  <img src={dashboardimage} alt="" />
                  <img className="dashboardwrite" src={Dashboardwrite} alt="" />
                </span>
              </div>
              <div className="h2">
                <h5>Add Event</h5>
              </div>
              <div className="uploadingBanner">
                <div className="dragingImageBanner">
                  <div className="dragingparaBanner">
                    <div className="row row-cols-md-2 g-4">
                      <div className="col">
                        <div className="uploadingBanner2">
                          <h5>Upload Main Image</h5>
                          <p>
                            Supports: JPG , PNG , SVG , GIF , JPEG (Max Size :
                            2MB)
                          </p>
                        </div>

                        <div className="LinesImagesBanner">
                          <img src={Lines} alt="" />
                        </div>

                        <div className="dragingpara2">
                          <label htmlFor="uploadMainImage">
                            <img src={dragCloud} alt="" />
                          </label>
                          <input
                            type="file"
                            id="uploadMainImage"
                            onChange={handleChange1}
                            accept="image/*"
                            style={{ display: "none" }}
                          ></input>
                          {/* <img src={selectedFile} /> */}

                          <p>Drag and drop or browse to choose a file</p>
                          {selectedFile && <img src={preview}/>}
                        </div>
                      </div>

                      <div style={{ marginLeft: "-7rem" }} className=" col">
                        <div className="uploadingBanner2">
                          <h5>Upload Main Image (Mobile version)</h5>
                          <p>
                            Supports: JPG , PNG , SVG , GIF , JPEG (Max Size :
                            2MB)
                          </p>
                        </div>
                        <div className="LinesImagesBanner">
                          <img src={Lines} alt="" />
                        </div>

                        <div className="dragingpara2">
                          <label htmlFor="uploadMobileImage">
                            <img src={dragCloud} alt="" />
                          </label>
                          <input
                            type="file"
                            id="uploadMobileImage"
                            onChange={handleChange2}
                            accept="image/*"
                            name=""
                            style={{ display: "none" }}
                          ></input>
                          <p>Drag and drop or browse to choose a file</p>
                          {/* <img src={selectedFiles}/> */}
                          {selectedFiles && <img src={previews}/>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="formStart">
                <div className="mb-3">
                  <label htmlFor="eventName" className="form-label">
                    Event Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter Name"
                    className="form-control"
                    id="eventName"
                    aria-describedby="emailHelp"
                    value={data.eventName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter Title"
                    className="form-control"
                    id="title"
                    aria-describedby="emailHelp"
                    value={data.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subTitle" className="form-label">
                    Sub Title
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter sub Title"
                    className="form-control"
                    id="subTitle"
                    aria-describedby="emailHelp"
                    value={data.subTitle}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="eventLink" className="form-label">
                    Event Link
                  </label>
                  <input
                    required
                    type="text"
                    placeholder=" Event Link"
                    className="form-control"
                    id="eventLink"
                    aria-describedby="emailHelp"
                    value={data.eventLink}
                    onChange={handleChange}
                  />
                </div>
                <div className="euroPlaceholder  mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>

                  <input
                    required
                    placeholder="£"
                    type="number"
                    className="form-control"
                    id="price"
                    aria-describedby="emailHelp"
                    value={data.price}
                    onChange={handleChange}
                  />
                </div>
                <br />
                <br />
                <div className="startTime startTimeEvent">
                  <div className="container">
                    <div className="row row-cols-4">
                      <div className="timeHeading col">
                        <p> Show Start Time</p>

                        <div className="TimeCols">
                          <div className="row row-cols-4">
                            <div className="col selectOption">
                              {/* <input
                                required
                                type="number"
                                min="1"
                                max="2"
                                id="showStartHour"
                                placeholder="00"
                                value={data.showStartHour}
                                onChange={handleChange}
                              /> */}
                              <select
                                required
                                value={data.showStartHour}
                                onChange={handleChange}
                                style={{
                                  "-webkit-appearance": "none",
                                  marginTop: "0.7rem",
                                }}
                                name="cars"
                                id="showStartHour"
                              >
                                <option></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                              </select>
                            </div>
                            <div className="imageCol selectImageBetween col">
                              <img src={TimeDot} alt="" />
                            </div>
                            <div className="secondInput selectOption col">
                              {/* <input
                                required
                                type="number"
                                id="showStartMinute"
                                placeholder="00"
                                value={data.showStartMinute}
                                onChange={handleChange}
                              /> */}
                              <select
                                required
                                value={data.showStartMinute}
                                onChange={handleChange}
                                style={{
                                  "-webkit-appearance": "none",
                                  marginLeft: "-1.3rem",
                                  marginTop: "0.7rem",
                                }}
                                name="cars"
                                id="showStartMinute"
                              >
                                <option></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                                <option>32</option>
                                <option>33</option>
                                <option>34</option>
                                <option>35</option>
                                <option>36</option>
                                <option>37</option>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                                <option>46</option>
                                <option>47</option>
                                <option>48</option>
                                <option>49</option>
                                <option>50</option>
                                <option>51</option>
                                <option>52</option>
                                <option>53</option>
                                <option>54</option>
                                <option>55</option>
                                <option>56</option>
                                <option>57</option>
                                <option>58</option>
                                <option>59</option>
                                <option>60</option>
                              </select>
                            </div>
                            <div className="col radio3">
                              {" "}
                              <div className="form-check">
                                {/* <input
                                  required
                                  className="form-check-inputE"
                                  type="radio"
                                  name="flexRadioDefaultE"
                                  id="showStartZone"
                                  value={data.showStartZone}
                                  onChange={handleChange}
                                /> */}
                                <label htmlFor="showStartZone"></label>
                                <select
                                  required
                                  value={data.showStartZone}
                                  onChange={handleChange}
                                  style={{ "-webkit-appearance": "none" }}
                                  name="cars"
                                  id="showStartZone"
                                >
                                  <option>Zone</option>
                                  <option>AM</option>
                                  <option>PM</option>
                                </select>
                              </div>
                              {/* <div className="form-check">
                                <input
                                  required
                                  className="form-check-inputE"
                                  type="radio"
                                  name="flexRadioDefaultE"
                                  id="showStartZone"
                                  value={data.showStartZone}
                                  onChange={handleChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="showStartZone"
                                >
                                  PM
                                </label>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="timeHeading col">
                        <p> Door Open Time </p>
                        <div className="TimeCols">
                          <div className="row row-cols-4">
                            <div className="col selectOption">
                              {/* <input
                                required
                                type="number"
                                placeholder="00"
                                id="doorOpenHour"
                                value={data.doorOpenHour}
                                onChange={handleChange}
                              /> */}
                              <label htmlFor="doorOpenHour"></label>
                              <select
                                required
                                className="selectClass"
                                value={data.doorOpenHour}
                                onChange={handleChange}
                                style={{ "-webkit-appearance": "none" }}
                                typeof="number"
                                name="cars"
                                id="doorOpenHour"
                              >
                                <option></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                              </select>
                            </div>
                            <div className="imageCol selectImageBetween col">
                              <img src={TimeDot} alt="" />
                            </div>
                            <div className="secondInput selectOption col">
                              {/* <input
                                required
                                type="number"
                                placeholder="00"
                                id="doorOpenMinute"
                                value={data.doorOpenMinute}
                                onChange={handleChange}
                              /> */}
                              <label htmlFor="doorOpenMinute"></label>
                              <select
                                required
                                className="selectClass selectClass2"
                                value={data.doorOpenMinute}
                                onChange={handleChange}
                                style={{ "-webkit-appearance": "none" }}
                                name="cars"
                                id="doorOpenMinute"
                              >
                                <option></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                                <option>32</option>
                                <option>33</option>
                                <option>34</option>
                                <option>35</option>
                                <option>36</option>
                                <option>37</option>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                                <option>46</option>
                                <option>47</option>
                                <option>48</option>
                                <option>49</option>
                                <option>50</option>
                                <option>51</option>
                                <option>52</option>
                                <option>53</option>
                                <option>54</option>
                                <option>55</option>
                                <option>56</option>
                                <option>57</option>
                                <option>58</option>
                                <option>59</option>
                                <option>60</option>
                              </select>
                            </div>
                            <div className="col radio3">
                              {" "}
                              <div className="form-check">
                                {/* <input
                                  required
                                  className="form-check-inputV"
                                  type="radio"
                                  name="flexRadioDefaultV"
                                  id="doorOpeningZone"
                                  value={data.doorOpeningZone}
                                  onChange={handleChange}
                                /> */}
                                <label htmlFor="doorOpeningZone"></label>
                                <select
                                  required
                                  value={data.doorOpeningZone}
                                  onChange={handleChange}
                                  style={{ "-webkit-appearance": "none" }}
                                  name="cars"
                                  id="doorOpeningZone"
                                >
                                  <option>Zone</option>
                                  <option>AM</option>
                                  <option>PM</option>
                                </select>
                              </div>
                              {/* <div className="form-check">
                                <input
                                  required
                                  className="form-check-inputV"
                                  type="radio"
                                  name="flexRadioDefaultV"
                                  id="doorOpeningZone"
                                  value={data.doorOpeningZone}
                                  onChange={handleChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="doorOpeningZone"
                                >
                                  PM
                                </label>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="timeHeading datenewStyle timeheadingDate col">
                        <p> Date</p>{" "}
                        <input
                          required
                          type="date"
                          name="date"
                          id="date"
                          style={{ marginTop: "1rem" }}
                          value={data.date}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col"></div>
                      <div className="timeHeading TimeHeadingTime col">
                        <p> Event Start Time </p>
                        <div className="TimeCols">
                          <div className="row row-cols-4">
                            <div className="col selectOption">
                              {/* <input
                                required
                                type="number"
                                placeholder="00"
                                id="eventStartHour"
                                value={data.eventStartHour}
                                onChange={handleChange}
                              /> */}
                              <label htmlFor="eventStartHour"></label>
                              <select
                                required
                                className="selectClass"
                                value={data.eventStartHour}
                                onChange={handleChange}
                                style={{ "-webkit-appearance": "none" }}
                                typeof="number"
                                name="cars"
                                id="eventStartHour"
                              >
                                <option></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                              </select>
                            </div>
                            <div className="imageCol selectImageBetween col">
                              <img src={TimeDot} alt="" />
                            </div>
                            <div className="secondInput selectOption col">
                              {/* <input
                                required
                                type="number"
                                placeholder="00"
                                id="eventStartMinute"
                                value={data.eventStartMinute}
                                onChange={handleChange}
                              /> */}
                              <label htmlFor="eventStartMinute"></label>
                              <select
                                required
                                className="selectClass selectClass2"
                                value={data.eventStartMinute}
                                onChange={handleChange}
                                style={{ "-webkit-appearance": "none" }}
                                name="cars"
                                id="eventStartMinute"
                              >
                                <option></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                                <option>32</option>
                                <option>33</option>
                                <option>34</option>
                                <option>35</option>
                                <option>36</option>
                                <option>37</option>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                                <option>46</option>
                                <option>47</option>
                                <option>48</option>
                                <option>49</option>
                                <option>50</option>
                                <option>51</option>
                                <option>52</option>
                                <option>53</option>
                                <option>54</option>
                                <option>55</option>
                                <option>56</option>
                                <option>57</option>
                                <option>58</option>
                                <option>59</option>
                                <option>60</option>
                              </select>
                            </div>
                            <div className="col radio3">
                              {" "}
                              <div className="form-check">
                                {/* <input
                                  required
                                  className="form-check-input0"
                                  type="radio"
                                  name="flexRadioDefault0"
                                  id="eventStartZone"
                                  value={data.eventStartZone}
                                  onChange={handleChange}
                                /> */}
                                <label htmlFor="eventStartZone"></label>
                                <select
                                  required
                                  value={data.eventStartZone}
                                  onChange={handleChange}
                                  style={{ "-webkit-appearance": "none" }}
                                  name="cars"
                                  id="eventStartZone"
                                >
                                  <option>Zone</option>
                                  <option>AM</option>
                                  <option>PM</option>
                                </select>
                              </div>
                              {/* <div className="form-check">
                                <input
                                  required
                                  className="form-check-input0"
                                  type="radio"
                                  name="flexRadioDefault0"
                                  id="eventStartZone"
                                  value={data.eventStartZone}
                                  onChange={handleChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="eventStartZone"
                                >
                                  PM
                                </label>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="timeHeading TimeHeadingTime col">
                        <p> Event End Time </p>
                        <div className="TimeCols">
                          <div className="row row-cols-4">
                            <div className="col selectOption">
                              {/* <input
                                required
                                type="number"
                                placeholder="00"
                                id="eventEndHour"
                                value={data.eventEndHour}
                                onChange={handleChange}
                              /> */}
                              <label htmlFor="eventEndHour"></label>
                              <select
                                required
                                className="selectClass"
                                value={data.eventEndHour}
                                onChange={handleChange}
                                style={{ "-webkit-appearance": "none" }}
                                typeof="number"
                                name="cars"
                                id="eventEndHour"
                              >
                                <option></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                              </select>
                            </div>
                            <div className="imageCol selectImageBetween col">
                              <img src={TimeDot} alt="" />
                            </div>
                            <div className="secondInput selectOption col">
                              {/* <input
                                required
                                type="number"
                                placeholder="00"
                                id="eventEndMinute"
                                value={data.eventEndMinute}
                                onChange={handleChange}
                              /> */}
                              <label htmlFor="eventEndMinute"></label>
                              <select
                                required
                                className="selectClass selectClass2"
                                value={data.eventEndMinute}
                                onChange={handleChange}
                                style={{ "-webkit-appearance": "none" }}
                                name="cars"
                                id="eventEndMinute"
                              >
                                <option></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                                <option>32</option>
                                <option>33</option>
                                <option>34</option>
                                <option>35</option>
                                <option>36</option>
                                <option>37</option>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                                <option>46</option>
                                <option>47</option>
                                <option>48</option>
                                <option>49</option>
                                <option>50</option>
                                <option>51</option>
                                <option>52</option>
                                <option>53</option>
                                <option>54</option>
                                <option>55</option>
                                <option>56</option>
                                <option>57</option>
                                <option>58</option>
                                <option>59</option>
                                <option>60</option>
                              </select>
                            </div>
                            <div className="col radio3">
                              {" "}
                              <div className="form-check">
                                {/* <input
                                  required
                                  className="form-check-inputN"
                                  type="radio"
                                  name="flexRadioDefaultN"
                                  id="eventEndZone"
                                  value={data.eventEndZone}
                                  onChange={handleChange}
                                /> */}
                                <label htmlFor="eventEndZone"></label>
                                <select
                                  required
                                  value={data.eventEndZone}
                                  onChange={handleChange}
                                  style={{ "-webkit-appearance": "none" }}
                                  name="cars"
                                  id="eventEndZone"
                                >
                                  <option>Zone</option>
                                  <option>AM</option>
                                  <option>PM</option>
                                </select>
                              </div>
                              {/* <div className="form-check">
                                <input
                                  required
                                  className="form-check-inputN"
                                  type="radio"
                                  name="flexRadioDefaultN"
                                  id="eventEndZone"
                                  value={data.eventEndZone}
                                  onChange={handleChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="eventEndZone"
                                >
                                  PM
                                </label>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="timeHeading datenewStyle timeheadingDate TimeHeadingTime col">
                        <p>Event Start Date</p>{" "}
                        <input
                          required
                          type="date"
                          name="date"
                          style={{ marginTop: "1rem" }}
                          id="eventStartDate"
                          value={data.eventStartDate}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="timeHeading datenewStyle timeheadingDate TimeHeadingTime col">
                        <p>Event End Date</p>{" "}
                        <input
                          required
                          type="date"
                          name="date"
                          id="eventEndDate"
                          style={{ marginTop: "1rem" }}
                          value={data.eventEndDate}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submitButton">
                  <button type="submit">
                    <img src={submitEvent} alt="" />
                    {/* submit */}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
