import React from 'react'
import HeroImage from '../assets/Home2.jpg'
import "../styles/Home.css"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className="home" style={{backgroundImage: `url(${HeroImage})`}}>
        <div className="homecontainer">
          <div className="loader">
            <h2>Hello, my name is Dani.</h2>
            <p>I am a Front End Developer</p>
          </div>
            <Link to="/menu">
                <button>Contact me!</button>
            </Link>
        </div>
    </div>
  )
}

export default Home