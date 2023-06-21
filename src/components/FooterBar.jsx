import React from 'react'
import Logo from  '../assets/logo.svg'
const FooterBar = () => {
    return (
        <>
            <div className='footer-bar'>
                <img className='logo' src={Logo} alt='logo'></img>
                <button className='black-btn'>Free Consultation</button>
            </div>
            <p style={{textAlign:"center", letterSpacing:"0.1rem"}}>Copyright ⓒ {(new Date()).getFullYear()} CreativTron</p>

        </>
        
    )
}

export default FooterBar