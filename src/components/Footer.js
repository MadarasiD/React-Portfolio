import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">

        <div className="socialMedia">

          <Instagram /><br /> <Twitter /><br /> <Facebook /><br /> <LinkedIn /><br /> <GitHub />

        </div>

        <p>2022 &copy; Madarasi Dániel - Front End Developer</p>

    </div>
  )
}

export default Footer