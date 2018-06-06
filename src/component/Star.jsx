import React from 'react';
import PropTypes from 'prop-types';
import './Star.css';
/**
* fileName: 'Star.jsx'
* author: 俞建伟
* createTime: 2018-05-31   11:30
* params: {value: 评分（10分制）,
            size: 星星的大小}
* desc:
*/
const Star = ({ value, size = 15 }) => (
  <div className="star" style={{ height: size, width: size * 5 ,backgroundSize: `${size}px ${size}px`}}>
      <div className="star__top" style={{width: `${value * 10}%`, backgroundSize: `${size}px ${size}px`}}></div>
  </div>
);

Star.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.number,
};

export default Star;
