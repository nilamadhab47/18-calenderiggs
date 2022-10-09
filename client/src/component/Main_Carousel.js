import React from 'react'
import './Main_Carousel.css'
// import 
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import Slider from './Venue/Slider.png'
import Slider from './venues/Slider.png'
const Main_Carousel = () => {
  return (
    <Carousel className='main-slide'  autoPlay="true">
    <div>
        <img src={Slider}    className="imgslider"   />
    </div>
    <div>
        <img src={Slider}    className="imgslider"  />
    </div>
    <div>
        <img src={Slider}  className="imgslider" />
    </div>
    <div>
        <img src={Slider}    className="imgslider"   />
    </div>
    <div>
        <img src={Slider}    className="imgslider"  />
    </div>
    <div>
        <img src={Slider}  className="imgslider" />
    </div>
    <div>
        <img src={Slider}  className="imgslider" />
    </div>
</Carousel>
  )
}

export default Main_Carousel
