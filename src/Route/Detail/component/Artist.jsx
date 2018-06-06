import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Artist.css';
/**
* fileName: 'Artist.jsx'
* createTime: 2018-05-31   15:27
* params: { param: mean
* desc: 详情页职员表
*/
class Artist extends Component {
  render() {
    const { artist } = this.props;
    return (
      <div className="mArtist">
        <ul className="mArtist__list">
          {artist.map(item => (
            <li key={item.name}>
              <a href="" className="artistInfo">
                <div className="artistInfo__image" style={{ backgroundImage: `url(${item.image})` }} />
                <div>
                  <dl className="artistInfo__name">{item.name}</dl>
                  <dd className="artistInfo__job">{item.job}</dd>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Artist.propTypes = {
  artist: PropTypes.array.isRequired,
};
export default Artist;
