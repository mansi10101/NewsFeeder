import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => {

    const navLinkStyle = ({isActive}) => {
      return {
        fontWeight: isActive? 'bold': 'normal',
        color: "white",
        fontSize: 23,
        textDecoration: "none"
      }
    }
    return (
        <div>
        <nav className="navbar fixed-top navbar-expand-lg" style={{backgroundColor:"#CF1020"}}>
        <div className="container-fluid">
          <NavLink className="navbar-brand " style={{fontSize: 30, fontWeight:500, fontFamily:"revert",color:"white"}} to="#">NewsFeeder</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink  className="nav-Link" style={navLinkStyle} aria-current="page" to="/" >Home</NavLink>
              </li>
              <li className="nav-item" style={{marginLeft:"13px"}}>
                <NavLink to="/Business" className="nav-Link" style={navLinkStyle} >Business</NavLink>
              </li>
              <li className="nav-item" style={{marginLeft:"13px"}}>
                <NavLink to="/Entertainment" className="nav-Link"  style={navLinkStyle}>Entertainment</NavLink>
              </li>
              <li className="nav-item" style={{marginLeft:"13px"}}>
                <NavLink  to="/General" className="nav-Link" style={navLinkStyle} >General</NavLink>
              </li>
              <li className="nav-item" style={{marginLeft:"13px"}}>
                <NavLink to="/Health"  className="nav-Link" style={navLinkStyle} >Health</NavLink>
              </li>
              <li className="nav-item" style={{marginLeft:"13px"}}>
                <NavLink  to="/Science" className="nav-Link" style={navLinkStyle} >Science</NavLink>
              </li>
              <li className="nav-item" style={{marginLeft:"13px"}}>
                <NavLink  to="/Sports" className="nav-Link" style={navLinkStyle}>Sports</NavLink>
              </li>
              <li className="nav-item" style={{marginLeft:"13px"}}>
                <NavLink  to="/Technology" className="nav-Link" style={navLinkStyle}>Technology</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      </div>
    )
  }

export default Navbar
