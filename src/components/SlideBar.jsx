import { useState } from 'react'
import React from 'react'
import slide1 from '../assets/image-slide-1.jpg'
import slide2 from '../assets/image-slide-2.jpg'
import slide3 from '../assets/image-slide-3.jpg'
import slide4 from '../assets/image-slide-4.jpg'
import slide5 from '../assets/image-slide-5.jpg'
import arrowleft from '../assets/icon-arrow-left.svg'
import arrowright from '../assets/icon-arrow-right.svg'


const images = [slide1, slide2, slide3, slide4, slide5]


const SlideBar = () => {



    const [currentSlide, setCurrentSlide] = useState(0);

    const handleLeftClick = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleRightClick = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className='slide-container'>
            <div className='work'>
                <p>My Work</p>
            </div>
            <div className="carousel">
                {images.map((image, index) => {
                    let slideClass = 'slide';

                    if (index === currentSlide) {
                        slideClass += ' active';
                    } else if (index === currentSlide - 1 || (currentSlide === 0 && index === images.length - 1)) {
                        slideClass += ' prev';
                    } else if (index === currentSlide + 1 || (currentSlide === images.length - 1 && index === 0)) {
                        slideClass += ' next';
                    }

                    return (
                        <div key={image} className={slideClass}>
                            <img className='slide' src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    );
                })}
            </div>
            <div className='slider-btn'>
                <img onClick={handleLeftClick} className='arrow left' src={arrowleft} alt="" />
                <img onClick={handleRightClick} className='arrow right' src={arrowright} alt="" />
            </div>
        </div>
    )
}

export default SlideBar