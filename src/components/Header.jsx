import React from 'react'
import Logo from  '../assets/logo.svg'
const Header = () => {
    return (
        <nav className='nav-bar'>
            <img className='logo' src={Logo} alt='logo'></img>
            <button className='black-btn'>Free Consultation</button>
        </nav>
    )
}

export default Header