import React from 'react'
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';


const Navbar = () => {
  return (
    <div className="navbar">

      <div className="navbar-left">
        <p>Madarasi Dániel</p>
      </div>

      <div className="navbar-right">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/portolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>

          <button>
              <ReorderIcon></ReorderIcon>
          </button>
      </div>


    </div>
  )
}

export default Navbar












