import React from 'react'
import Logo from  '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate()
    return (
        <nav className='nav-bar'>
            <div onClick={
                () => {
                    navigate("/")
                }
            }>
                <img className='logo' src={Logo} alt='logo'></img>
            </div>
            <button onClick={
                () => {
                    navigate("/cta")
                }
            } className='black-btn'>Free Consultation</button>
        </nav>
    )
}

export default Header