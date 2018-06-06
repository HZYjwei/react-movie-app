import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import './ImageSlider.css';


const propTypes = {
  onCloseSlider: PropTypes.func.isRequired,
};


class ImageSlider extends Component {
  state = {
    index: 1,
  }

  changeIndex = (index) => {
    this.setState({
      index: index + 1
    });
  }
  render() {
    const setting = {
      className: 'imageSlider__content',
      afterChange: this.changeIndex
    };
    const { onCloseSlider } = this.props;
    return (
      <div className="imageSlider" onClick={ onCloseSlider }>
        <div className="imageSlider__index">
          {this.state.index} / 6
        </div>
        <Slider {...setting}>
          <div className="imageSlider__item">
            <img src="/source/image/asset1.jpeg" alt="" className="imageSlider__img" />
          </div>
          <div className="imageSlider__item">
            <img src="/source/image/asset2.jpeg" alt="" className="imageSlider__img" />
          </div>
          <div className="imageSlider__item">
            <img src="/source/image/asset3.jpeg" alt="" className="imageSlider__img" />
          </div>
          <div className="imageSlider__item">
            <img src="/source/image/asset4.jpeg" alt="" className="imageSlider__img" />
          </div>
          <div className="imageSlider__item">
            <img src="/source/image/asset5.jpeg" alt="" className="imageSlider__img" />
          </div>
          <div className="imageSlider__item">
            <img src="/source/image/asset6.jpeg" alt="" className="imageSlider__img" />
          </div>
        </Slider>
      </div>
    );
  }
}


ImageSlider.propTypes = propTypes;


export default ImageSlider;
