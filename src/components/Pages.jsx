import React from 'react'
import "./style.css"
import backGround from "./images/links2.jpg"
import { Link  } from "react-router-dom";


const About = () => {
  return (
    <div className='alLinks'>
      <h1>ABOUT</h1>,
        <div className='bgLinks'>
         <img className='bgImg' src={backGround} alt="backGround" />
       
        </div>
    </div>
  )
}

const Contact = () => {
    return(
      <div>
        <div className='alLinks'>
            <h1>CONTACT</h1>
        </div>,
        <div className='bgLinks'>
         <img className='bgImg' src={backGround} alt="backGround" />
       
        </div>
        </div>
    )
}

const Services = () => {
    return (

     <div>
        <div className='alLinks'>
            <h1>FEEDBACK</h1>
        </div>,
        <div className='bgLinks'>
         <img className='bgImg' src={backGround} alt="backGround" />
       
        </div>
        </div>
    
    )
  }

export {About , Contact, Services}
 