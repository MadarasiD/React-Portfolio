import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">

        <div className="socialMedia">
        <a rel="stylesheet" href="/" ><Instagram  /> <span>Instagram</span></a><br />
          <Twitter /> <span>Twitter</span> <br /> 
          <Facebook /> <span>Facebook</span> <br />
          <LinkedIn /> <span>LinkedIn</span> <br />
          <GitHub /> <span>GitHub</span>
        </div>


        <div className="monogram">

        <p>2022 &copy; Madarasi Dániel - Front End Developer</p>

        </div>

        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    </div>
  )
}

export default Footer