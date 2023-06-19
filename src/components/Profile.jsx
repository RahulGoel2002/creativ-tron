import React from 'react'
import Profilepic from '../assets/image-amy.webp'

const Profile = () => {
    return (
        <div className='profile-amy'>
            <img className='amy-pic' src={Profilepic} alt="" />
            <div className='descrip'>
                <p className='amy-ttl'>I’m Amy, and I’d love to work on your next project</p>
                <p className='amy-descp'>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations
                    to complete mobile apps. I’m also handy with a camera!</p>
                <button className='red-btn'>Free Consultation</button>
            </div>
        </div>
    )
}

export default Profile