import React from 'react'
import './Header.css'
import {RiArrowDownSLine} from 'react-icons/ri'
const Header = () => {
  return (
    <div className='Header'>
       
            <div className="top_header">
                <div className="heading">
                    <h1>What’s On</h1>
                </div>
                <div className="heading_right">
                    <span>Sort By <RiArrowDownSLine className='arrowDown'/></span>
                  
                </div>
            </div>
       
    </div>
  )
}

export default Header