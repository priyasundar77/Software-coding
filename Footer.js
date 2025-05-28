import React from 'react'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer">
   
    <div className="socialMedia">
        <InstagramIcon/>
        <FacebookIcon/>
        <XIcon/>
        <LinkedInIcon/>
        <WhatsAppIcon/>
    <p>@copy 2025 newgadgets.com</p>

    </div>
    </div>
    </>
  )
}

export default Footer
