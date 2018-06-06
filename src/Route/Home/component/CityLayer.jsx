import React, { Component } from 'react';
import PropTypes from 'prop-types';
import request from '../../../helpers/request';
import './CityLayer.css';

const propTypes = {
  onClose: PropTypes.func.isRequired,
  onSelected:PropTypes.func.isRequired,
};


class CityLayer extends Component {
  state = {
    data: [],
    all: {}
  }
  getData = async () => {
    const data = await request('/city');
    const { hot, all } = data;
    console.log(hot);
    console.log(all);
    this.setState({
      hot: hot,
      all: all
    });
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    const {onClose, onSelected} = this.props;
    const { hot, all } = this.state;
    const alphaKey = Object.keys(all);
    return (
      <div className="cityLayer">
        <div className="cityLayer__title">
          <div className="cityLayer__close" onClick={onClose}>关闭</div>
          选择城市
        </div>
        <div className="cityLayer__content">
          <div className="cityBlock" id="定位">
            <div className="cityBlock__label">定位城市</div>
            <div className="cityBlock__wrap">
              <div className="cityBlock__item">杭州</div>
            </div>
          </div>
          <div className="cityBlock" id="热门">
            <div className="cityBlock__label">热门城市</div>
            <div className="cityBlock__wrap">
              {hot && hot.map(item => {
                return (
                  <div key={item.cityCode} onClick={() => {onSelected(item.regionName);onClose();}} className="cityBlock__item">{item.regionName}</div>
                );
              })}
            </div>
          </div>
          {alphaKey.map(item => {
            const citys = all[item];
            return (
              <div key={item} className="cityList" id={item}>
                <div className="cityList__label" id="">{item}</div>
                <div className="cityList__wrap">
                  {citys.map(city => <div key={city.cityCode} onClick={() => {onSelected(city.regionName);onClose();}} className="cityList__item">{city.regionName}</div> )}
                </div>
              </div>
            );
          })}
      </div>
      <div className="cityLayer__index cityIndex">
        <ul className="cityIndex__list">
          <li className="cityIndex__item"><a href="#定位">定位</a></li>
          <li className="cityIndex__item"><a href="#热门">热门</a></li>
          {
            alphaKey.map(item => <li key={item} className="cityIndex__item"><a href={'#' + item}>{item}</a></li>)
          }

        </ul>
      </div>
      </div >
    );
  }
}


CityLayer.propTypes = propTypes;


export default CityLayer;
