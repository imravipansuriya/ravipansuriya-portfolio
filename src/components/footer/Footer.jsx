import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'></a>
      <ul className='permalinks'>
        <li><a href="#">Home</a> </li>
        <li><a href="#about">About</a> </li>
        <li><a href="#experience">Experience</a> </li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a> </li>
      </ul>
      <div className='footer-socials'>
        <a href="https://www.facebook.com/ravipansuriya999/" target="_blank"><BsFacebook/></a>
        <a href="https://www.instagram.com/_ravi_pansuriya_/" target="_blank"><AiFillInstagram/></a>
      </div>
      <div className='footer-copyright'>
        <small>&copy; RP. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer