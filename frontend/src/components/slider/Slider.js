import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { sliderData } from './slider-data';
import { useNavigate } from 'react-router-dom';
import './Slider.scss';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlay = true; // Set to true for automatic play
  const intervalTime = 5000; // Interval time for auto slide in milliseconds
  const slideInterval = useRef(null);
  const navigate = useNavigate();

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? sliderData.length - 1 : prevSlide - 1));
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide === sliderData.length - 1 ? 0 : prevSlide + 1));
  }, []);

  // Function to start auto scroll
  const auto = useCallback(() => {
    slideInterval.current = setInterval(nextSlide, intervalTime);
  }, [nextSlide, intervalTime]);

  // Cleanup function to clear interval
  const clear = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    setCurrentSlide(0); // Initialize slide to first slide
  }, []);

  useEffect(() => {
    if (autoPlay) {
      auto();
    }
    return () => clear(); // Cleanup interval on component unmount
  }, [autoPlay, auto]);

  return (
    <div className='slider'>
      <AiOutlineArrowLeft className='Arrow prev' onClick={prevSlide} />
      <AiOutlineArrowRight className='Arrow next' onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div key={index} className={index === currentSlide ? 'slide current' : 'slide'}>
            {index === currentSlide && (
              <>
                <img src={image} alt={heading} />
                <div className='content'>
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <button className='--btn --btn-primary' onClick={() => navigate("/shop")}>
                    Shop Now
                  </button>
                </div>
                <span className='span1'></span>
                <span className='span2'></span>
                <span className='span3'></span>
                <span className='span4'></span>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
