import React from 'react'
import Profilepic from '../assets/image-amy.webp'

const Profile = () => {
    return (
        <div className='profile-amy'>
            <img className='amy-pic' src={Profilepic} alt="" />
            <div className='descrip'>
                <p className='amy-ttl'>We’re CreativTron,</p>
                <p className='amy-descp'>We love working with others to create beautiful design solutions. We’ve designed everything from brand illustrations
                    to complete mobile apps. We’re also handy with a camera!</p>
                <button className='red-btn'>Free Consultation</button>
            </div>
        </div>
    )
}

export default Profile