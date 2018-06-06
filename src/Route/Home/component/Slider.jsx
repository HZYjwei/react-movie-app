import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import './Slider.css';


const PosterSlider = ({ data }) => {
  const settings = {
    dots: true,
    autoplay: true,
    className: 'slider',
    dotsClass: 'slider__dots'
  };
  return (
    <Slider {...settings} >
      {
        data.map(item => (
          <div key={item.image}>
            <img src={item.image} alt="" />
          </div>
        ))
      }
    </Slider >
  );
};

PosterSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PosterSlider;
