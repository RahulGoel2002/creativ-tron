import React from 'react'
import FooterBar from './FooterBar'

const FooterCard = () => {
    return (
        <div className='footer-card'>
            <div className='black-card'>
                <div className='card-items'>
                <p className='call'>Book a call with me</p>
                <p className='chat'>I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a
                    free consultation. Then we can move forward from there.</p>
                </div>
                <div>
                <button className='red-btn2'>Free Consultation</button>
                </div>
            </div>
            
            <FooterBar />
        </div>
    )
}

export default FooterCard