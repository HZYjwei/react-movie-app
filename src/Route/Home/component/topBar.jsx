//rsc
import React from 'react';
import PropTypes from 'prop-types';
import "./TopBar.css";

const TopBar = ({city, showCityLayer}) => (
  <div className="topBar">
    <div className="topBar__city" onClick={showCityLayer}>{ city }</div>
    <div className="topBar__search">搜索</div>
    <div className="topBar__scan"></div>
  </div>
);

TopBar.propTypes = {
  city: PropTypes.string.isRequired,
  showCityLayer: PropTypes.func.isRequired
};

export default TopBar;
