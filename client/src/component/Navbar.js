import React from 'react'
import "./Navbar.css"
import logo from "../images/logo.png"
import {FaSearch} from "react-icons/fa"
import Home from '../component/Home'
import Footer from '../component/Footer'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light" style={{boxShadow:" 0px 0px 16px 0px rgb(0 0 0 / 25%)"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={logo} style={{marginLeft: "1.6rem"}}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    
    <form action="#" style={{color:"#9E9D9D"}} className="firstSearchBar search">
                    <input type="text" className="search__input" placeholder="Search"/>
                    <button className="search__button">
                        <svg className="search__icon">
                            <FaSearch style={{"color":"#9E9D9D"}}/>
                        </svg>
                    </button>
                </form>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{gap: "1.5rem",
    fontSize: "18px"}}>
        <li className="nav-item">
         <a href=""   style={{"textDecoration":"none"}}>
         <Link className="nav-link active " aria-current="page" to="/">Home</Link>
         </a>
        </li>
        <li className="nav-item">
          <a href=""   style={{"textDecoration":"none"}}>
          <Link className="nav-link active " aria-current="page" to="/SliderHeader">What's On</Link>
          </a>
         
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Venue">Book Venue</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Gallery">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#footermain">Contact Us</a>
        </li>
        <li className="nav-item">
         <form action="#" style={{color:"#9E9D9D"}} className="secondSearchBar search">
                    <input type="text" className=" search__input" placeholder="Search"/>
                    <button className="search__button">
                        <svg className="search__icon">
                            <FaSearch style={{"color":"#9E9D9D"}}/>
                        </svg>
                    </button>
                </form>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/* <Home/>
     <Footer/> */}
    </div>
  )
}

export default Navbar