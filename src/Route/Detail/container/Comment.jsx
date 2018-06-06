import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import ScoreDistribute from '../component/ScoreDistribute';
import TagList from '../component/TagList';
import CommentList from '../component/CommentList';

import request from '../../../helpers/request';
const propTypes = {

};


class componentName extends Component {
  state = {
    tags: [],
    comments: [],
    currentTag: '',
  }

  componentWillMount() {
    this.getData();
  }

  getData = async () => {
    const { tags, list } = await request('/comment');
    this.setState({
      tags,
      comments: list,
      currentTag: tags[0] ? tags[0].text : ''
    });
  }

  changeCurrentTag = (tag) => {
    if (tag !== this.state.currentTag) {
      this.setState({
        currentTag: tag
      });
    }
  }

  toggleZan = (commentid) => {
    this.setState(prevState => ({
      comments: prevState.comments.map(comment => {
        if (commentid === comment.id) {
          const obj = {
            ...comment,

            zan: comment.isZan ? --comment.zan : ++comment.zan,
            isZan: !comment.isZan
          };
          return obj;
        }


        return comment;
      })
    })
    );
  }

  render() {
    const { tags, comments, currentTag } = this.state;

    const filterComments = comments.filter(item => (item.tag === currentTag));
    return (
      <div className="mComment">
        <ScoreDistribute />
        <div style={{ marginTop: '10px' }}>
          <TagList tags={tags} currentTag={currentTag} changeCurrentTag={this.changeCurrentTag} />
        </div>
        <div style={{ marginTop: '10px' }}>
          <CommentList onClickZan={this.toggleZan} comments={filterComments} />
        </div>
      </div>
    );
  }
}


componentName.propTypes = propTypes;


export default componentName;
