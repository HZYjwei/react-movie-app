import React from 'react';
import PropTypes from 'prop-types';
import './TagList.css';

const propTypes = {
  tags: PropTypes.array.isRequired,
  currentTag: PropTypes.string.isRequired,
};


const TagList = ({ tags, currentTag, changeCurrentTag }) => {
  return (
    <div className="tagList">
        { tags.map(item => (<span onClick={() => {changeCurrentTag(item.text);}} className={`tagList__item ${currentTag === item.text ? 'tagList__item--active' : ''}` } key={item.text}>{ item.text } { item.count }</span>)) }
    </div>
  );
};


TagList.propTypes = propTypes;


export default TagList;
