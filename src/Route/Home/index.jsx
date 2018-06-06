//rccp
import React, { Component } from 'react';
// import RenderToBody from '../../component/RenderToBody';
import TopBar from './component/topBar';
import Slider from './component/Slider';

import MoveItem from './component/MovieItem';
import CityLayer from './component/CityLayer';
import TabBar from '../../component/TabBar';

import request from '../../helpers/request';

import './index.css';

const propTypes = {

};


class Home extends Component {
  state = {
    city: '',//城市
    poster: [],//slick的海报
    movie: [],//电影列表
    cityLayerVisible: false,//城市浮层
  }

  showCityLayer = () => {
    this.setState({
      cityLayerVisible: true
    });
  }

  hideCityLayer = () => {
    console.log(this.state);
    this.setState({
      cityLayerVisible: false
    });
  }

  selectCity = (city) => {
    this.setState({
      city: city
    });
  }

  componentWillMount() {
    this.getData();
    // this.getCity();
  }

  getData = async () => {
    const data = await request('/index');
    const { city, movie, poster, cityLayerVisible } = data;
    this.setState({
      city: city,
      movie: movie,
      poster: poster,
      cityLayerVisible: cityLayerVisible
    });
  }

  getCity = async () => {
    const data = await request('/city');
  }

  render() {
    const { city, poster, movie, cityLayerVisible } = this.state;

    return (
      <div className="home">
        <TopBar city={city} showCityLayer={this.showCityLayer} />
        <div className="home__slider">
          <div className="home__slider__sliderWrap">
            <Slider data={poster} />
          </div>
        </div>
        <ul className="home__content">
          {movie.map(item => (
            <li key={item.name}><MoveItem movie={item} /></li>
          ))}
        </ul>
        <TabBar current='movie' />
        {cityLayerVisible && <CityLayer onClose={this.hideCityLayer} onSelected= {this.selectCity} />}
      </div>
    );
  }
}


Home.propTypes = propTypes;


export default Home;
