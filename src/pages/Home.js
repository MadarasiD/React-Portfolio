import React from 'react'
import HeroImage from '../assets/Home.jpg'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className="home" style={{backgroundImage: `url(${HeroImage})`}}>
        <div className="homecontainer">
            <h1>Front End Developer</h1>
            <p>I am a Front End Developer</p>

            <Link to="/menu">
                <button>gomb</button>
            </Link>
        </div>
    </div>
  )
}

export default Home