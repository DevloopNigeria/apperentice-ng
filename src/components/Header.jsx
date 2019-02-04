import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from "../Img/logo.png"
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} width="auto" height="auto" className="d-inline-block align-top" alt="" /> 
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse mr-5 justify-content-around" id="navbarSupportedContent">
                    <form className="form-inline my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search skill" aria-label="Search" />
                        <span><i class="fa btn btn-secondary fa-search" id="searchIcon" aria-hidden="true" ></i></span>
                    </form>
                    <ul className="navbar-nav">
                        {/* <li className="nav-item ">
                            <NavLink className="nav-link" to="/"> HOME
                            <span className="sr-only">(current)</span>
                            </NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/"> HOME </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Skills"> SKILLS </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Partners"> PARTNERS </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Login"> LOGIN </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/About"> ABOUT </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
    
export default Header;