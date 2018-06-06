import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeSeat } from '../actions/actions';

import './SeatSelected.css';

const propTypes = {
  data: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};


const SeatSelected = ({ data, onRemove }) => {
  console.log(data);
  return (
    <div className="seatSelected">
      <ul className="seatSelected__list">
        {data.map(item => (
          <li className="seatSelected__item movieTicket" key={item.id}>
            <div className="movieTicket__detail">
              <div className="movieTicket__pos">{item.rowIndex}排{item.colIndex}座</div>
              <div className="movieTicket__price"><i className="movieTicket__tag">卡</i>33元</div>
            </div>
            <i className="movieTicket__close" onClick={() => { onRemove(item.id); }} />
          </li>
        ))}


      </ul>
      <div className="seatSelected__buy">33元 确认选座</div>
    </div>
  );
};


SeatSelected.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    data: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => {
      dispatch(removeSeat(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatSelected);
