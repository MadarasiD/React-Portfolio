import React from 'react'
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import  "../styles/Navbar.css"
import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';


const Navbar = () => {
  return (
    <div className="navbar">

      <div className="navbar-left">
        <p>Madarasi Dániel <br />Front End Developer</p>
      </div>


      <div className="navbar-right">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/portolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>

          <button>
              <ReorderIcon />
          </button>
      </div>


    </div>
  )
}

export default Navbar












