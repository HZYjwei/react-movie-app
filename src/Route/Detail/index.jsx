import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';


import BaseInfo from './component/BaseInfo';
import ScoreSummary from './component/ScoreSummary';
import CollapsibleText from '../../component/CollapsibleText';
import Artist from './component/Artist';
import LineLink from '../../component/LineLink';

import Comment from './container/Comment';
import ImageSlider from './container/ImageSlider';

import request from '../../helpers/request';
import './index.css';

const propTypes = {

};



class Detail extends Component {
  state = {
    artist: [],
    showSlider: false
  }

  componentWillMount() {
    this.getArtist();
  }

  getArtist = async () => {
    const data = await request('/artist');
    // console.log(data);
    if (data && data.length) {
      this.setState({
        artist: data
      });
    }
  }

  toggleSlider = () => {
    this.setState(prevState => ({
      showSlider: !prevState.showSlider
    }));
  }

  render() {
    const { artist, showSlider } = this.state;
    return (
      <div className="detail">
        <div className="detail__top">
          <div className="tOperator">
            <div className="tOperator__icon tOperator__icon--back" onClick={() => {window.history.back();}}></div>
            <div className="tOperator__icon tOperator__icon--share"></div>
          </div>
          <BaseInfo onShowImage={this.toggleSlider} />
        </div>
        <div className="detail__content">
          <div className="detail__module">
            <ScoreSummary />
          </div>
          <div className="detail__module">
            <CollapsibleText lineHeight={28} lines={3}>
              <div className="detail__overview">
                秦风（刘昊然饰）接到唐仁（王宝强饰）的邀请来纽约参加其与阿香的婚礼。壕气逼人的唐仁迎接秦风，极尽招摇。岂料“婚礼”是唐仁为巨额奖金而参加的世界名侦大赛，比赛的内容是寻找杀害唐人街教父七叔的孙子的凶手。受骗的秦风怒极欲走，却被纽约华人刑警陈英送来的讯息所吸引。七叔孙子的死法离奇，寻人上升为悬赏缉凶。“名侦探”们各显“其能”，鸡飞狗跳。
              </div>
            </CollapsibleText>
          </div>
          <div className="detail__module">
            <h3 className="detail__moduleTitle">演职人员</h3>
            <Artist artist={artist} />
          </div>
          <div className="detail__module">
            <h3 className="detail__moduleTitle">热门评论</h3>
            <Comment />
          </div>
          <div className="detail__module">
            <h3 className="detail__moduleTitle">影片资料</h3>
            <div>
              <LineLink title="幕后花絮" />
              <LineLink title="台词精选" />
              <LineLink title="出品发行" />
            </div>
          </div>
        </div>
        <Link to="/seat" className="detail__buyBtn">选座购票</Link>
        {showSlider && <ImageSlider onCloseSlider={this.toggleSlider} />}
      </div>
    );
  }
}


Detail.propTypes = propTypes;


export default Detail;
