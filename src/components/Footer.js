import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">

        <div className="socialMedia">
        <a rel="stylesheet" href="https://www.instagram.com/" > <Instagram  /> <span>Instagram</span></a><br />
        <a rel="stylesheet" href="https://www.twitter.com/" > <Twitter /> <span>Twitter</span></a> <br /> 
        <a rel="stylesheet" href="https://www.facebook.com/" >  <Facebook /> <span>Facebook</span></a> <br />
        <a rel="stylesheet" href="https://www.linkedin.com/" > <LinkedIn /> <span>LinkedIn</span></a> <br />
        <a rel="stylesheet" href="https://github.com/MadarasiD" >  <GitHub /> <span>GitHub</span></a>
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