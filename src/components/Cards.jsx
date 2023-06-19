import React from 'react'
import Graphics from '../assets/pattern-graphic-design.svg'
import UiUx from '../assets/pattern-ui-ux.svg'
import apps from '../assets/pattern-apps.svg'
import Illustrations from '../assets/pattern-illustrations.svg'
import Photography from '../assets/pattern-photography.svg'
import Motion from '../assets/pattern-motion-graphics.svg'

const Cards = () => {
    return (
        <div className='cards'>
            <div className='card graphic'>
                <img src={Graphics} alt="" />
                <p className='cards-description'>Graphic Design</p>
            </div>
            <div className='card uiux'>
                <img src={UiUx} alt="" />
                <p className='cards-description'>UI/UX</p>
            </div>
            <div className='card apps'>
                <img src={apps} alt="" />
                <p className='cards-description'>Apps</p>
            </div>
            <div className='card illustrations'>
                <img src={Illustrations} alt="" />
                <p className='cards-description'>Illustrations</p>
            </div>
            <div className='card photography'>
                <img src={Photography} alt="" />
                <p className='cards-description'>Photography</p>
            </div>
            <div className='card motion'>
                <img src={Motion} alt="" />
                <p className='cards-description'>Motion Graphics</p>
            </div>
        </div>
    )
}

export default Cards