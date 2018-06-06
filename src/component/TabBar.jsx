import React from 'react';
import './TabBar.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TabBar = ({ current }) => {
  return (
  // current === "movice" / "user"
  <div>
    <div className="tabBar">
      <Link to="/" className={`tabBar__btn ${current === "movie" ? "tabBar__btn--active" : ''}`}>
        <div className="tabBar__icon tabBar__icon--movie"></div>
        <div className="tabBar__text">电影</div>
      </Link>
      <Link to="/user" className={`tabBar__btn ${current === "user" ? "tabBar__btn--active" : ''}`}>
        <i className="tabBar__icon tabBar__icon--user"></i>
        <div className="tabBar__text">我的</div>
      </Link>
    </div>
  </div>
);
};

TabBar.protoTypes = {
  current : PropTypes.string.isRequired,
};

export default TabBar;
