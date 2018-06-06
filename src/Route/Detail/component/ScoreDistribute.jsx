import React from 'react';
import PropTypes from 'prop-types';

import Star from '../../../component/Star';
import './ScoreDistribute.css';


const propTypes = {

};


const ScoreDistribute = props => {
  const size = 8;
  return (
    <div className="scoreDistribute">
      <div className="score">
        <div className="score__value">9.3</div>
        <div className="score__desc">1000人评论</div>
      </div>
      <div className="distribute">
        <div>
          <div className="distribute__star">
            <Star value={9} size={size} />
            <div className="distribute__btm">
              <div className="distribute__top" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="distribute__star">
            <Star value={9} size={size} />
            <div className="distribute__btm">
              <div className="distribute__top" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="distribute__star">
            <Star value={6} size={size} />
            <div className="distribute__btm">
              <div className="distribute__top" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className="distribute__star">
            <Star value={4} size={size} />
            <div className="distribute__btm">
              <div className="distribute__top" style={{ width: '40%' }}></div>
            </div>
          </div>
          <div className="distribute__star">
            <Star value={2} size={size} />
            <div className="distribute__btm">
              <div className="distribute__top" style={{ width: '20%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


ScoreDistribute.propTypes = propTypes;


export default ScoreDistribute;
