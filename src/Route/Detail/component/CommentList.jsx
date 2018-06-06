import React from 'react';
import PropTypes from 'prop-types';

import Star from '../../../component/Star';
import CollapsibleText from '../../../component/CollapsibleText';

import './CommentList.css';
const propTypes = {
  comments: PropTypes.array.isRequired,
  onClickZan: PropTypes.func.isRequired,
};


const CommentList = ({ comments, onClickZan}) => {
  return (
    <ul className="commentList">
      {comments.map(item => {
        const avator = item.avator || '/source/default-avatar.jpg';
        return (
          <li key={item.id}>
            <div className="commentItem">
              <div className="commentUser">
                <div className="commentUser__avator" style={{ backgroundImage: `url(${avator})` }}></div>
                <div className="commentUser__detail">
                  <div className="commentUser__name">{item.name}</div>
                  <div className="commentUser__score">
                    <Star value={item.score} size={10} />
                    <span className="commentUser__value">{item.score}</span>
                  </div>
                </div>
              </div>
              <CollapsibleText>
                {item.content}
              </CollapsibleText>
              <div className="commentItem__detail">
                <div className="commentItem__time">{item.time}</div>
                <div onClick={() => { onClickZan(item.id); }} className={`commentItem__zan ${item.isZan && 'commentItem__zan--active'}`}>
                  <i /> {item.zan}
                </div>
              </div>
            </div>
          </li>
        );
      })
      }
    </ul>
  );
};


CommentList.propTypes = propTypes;


export default CommentList;
