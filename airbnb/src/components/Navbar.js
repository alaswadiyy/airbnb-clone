import React from "react"
import './style.css'
import airbnb from '../images/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src={airbnb} alt="airbnb" className="nav--logo" />
        </nav>
    )
}