import React from 'react';
import PropTypes from 'prop-types';
import './MovieItem.css';

import { Link } from 'react-router-dom';

const MovieItem = ({movie}) => (
  <Link to="/detail" className="movieItem">
    <div className="movieItem__poster">
      <img src={movie.poster} alt="" />
    </div>
    <div className="movieItem__detail">
      <div className="movieItem__name">{movie.name}</div>
      <div className="movieItem__score">观众评分 <span>{movie.score}</span></div>
      <div className="movieItem__director">导演：{movie.director}</div>
      {movie.actor && <div className="movieItem__actor">主演：{movie.actor}</div>}
      <div className="movieItem__tag">
        {movie.tags.map((tag, i) => {
          if(i%2){
            return (
              <div className="tTag tTag__red" key={tag}>{tag}</div>
            );
          }else{
            return (
              <div className="tTag tTag__blue" key={tag}>{tag}</div>
            );
          }
        })}
      </div>
    </div>
    <div className="movieItem__btn">
      <button className="tBtn">购票</button>
      <span className="movieItem__price">9,9</span>
    </div>
  </Link>
);

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
