import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import seatSelect from './reducers/selectorReducer';
import PropTypes from 'prop-types';

import MovieInfo from './component/MovieInfo';
import SeatSelected from './component/SeatSelected';
import SeatSelector from './container/SeatSelector';
import './index.css';


let store = createStore(seatSelect);

const propTypes = {

};


class Seat extends Component {
  // state = {
  //   selectSeat: [],
  // }

  // onAddSeat = (seat) => {
  //   this.setState(prevState => ({
  //     selectSeat: [...prevState.selectSeat, seat]
  //   }));
  // }

  // onRemoveSeat = (id) => {
  //   this.setState({
  //     selectSeat: this.state.selectSeat.filter(item => item.id !== id)
  //   });
  // }

  render() {

    // const { selectSeat } = this.state;
    return (
      <Provider store={store}>
      <div className="seat">
        <div className="tOperator">
          <i className="tOperator__icon tOperator__icon--blackBack" onClick={() => {window.history.back();}}></i>
          二哈影院
          <i className="tOperator__icon tOperator__icon--blackShare" ></i>
        </div>
        <MovieInfo />
        <div className="seat__main">
          <div className="seat__tip" />
          <div className="seat__graph">
            <div className="seat__screen">B13屏幕</div>
            <div className="seat__list">
              <SeatSelector />
            </div>
          </div>
        </div>
        <SeatSelected />
      </div>
      </Provider>
    );
  }
}


Seat.propTypes = propTypes;


export default Seat;
