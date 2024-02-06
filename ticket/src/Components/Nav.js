import React from 'react'
import './Nav.css'
import { IoMdLock } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { FaArrowLeft } from "react-icons/fa";
import { BsFillQuestionCircleFill } from "react-icons/bs";



const Nav = () => {
  return (
    <div className='navigation'>
        <div className='nav'>
        <FaArrowLeft style={{display:'none'}} className='leftarrow' />
            <p className='logo'>tickete</p>

            <p><IoMdLock size={20} className='navicon'/>checkout</p>
            <BsFillQuestionCircleFill style={{display:'none'}}  className='questionmark' />

            <p id='help'><GoQuestion size={20} className='navicon' />help</p>
        </div>
        <div className='ticket'>
                <h1>Holding your tickets for 30:00</h1>
        </div>
    </div>
  )
}

export default Nav