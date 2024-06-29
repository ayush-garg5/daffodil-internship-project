import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
import Logo from "./Logo.png"
import icon1 from "./icon1.png"
import icon2 from "./icon2.png"
import icon3 from "./icon3.png"

export const Header = () => {
  return (
    <nav className = "nav">
    <h2 className='heading'><Link to = "/" style={{ textDecoration: 'none', color: '#434446' }}><img src = {Logo} className='Logo'/>RaptorNet</Link></h2>
    <ul>
    <li><Link to = "/about" style={{ textDecoration: 'none', color: '#434446' }}><img src = {icon1} className='Logo'/></Link></li>
    <li><Link to = "/services" style={{ textDecoration: 'none', color: '#434446' }}><img src = {icon2} className='Logo'/></Link></li>
    <li><Link to = "/contact" style={{ textDecoration: 'none', color: '#434446' }}><img src = {icon3} className='Logo'/></Link></li>
    </ul>
    </nav>
  )
}
