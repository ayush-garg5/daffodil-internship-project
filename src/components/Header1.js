import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

export const Header1 = () => {
  return (
    <nav className = "nav1">
    
    <ul>
    <li><Link to = "/staff" style={{ textDecoration: 'none', color: '#434446' , fontFamily: 'Arial Unicode MS' }}>Staff</Link></li>
    <li><Link to = "/parent" style={{ textDecoration: 'none', color: '#434446' , fontFamily: 'Arial Unicode MS' }}>Parent</Link></li>
    <li><Link to = "/student" style={{ textDecoration: 'none', color: '#434446' , fontFamily: 'Arial Unicode MS'  }}>Student</Link></li>
    <li><Link to = "/contractor" style={{ textDecoration: 'none', color: '#434446', fontFamily: 'Arial Unicode MS' }}>Contractor</Link></li>
    </ul>
    </nav>
  )
}
