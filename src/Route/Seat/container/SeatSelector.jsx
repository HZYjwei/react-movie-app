import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { data } from '../mock/seat';
import { addSeat } from '../actions/actions';
import { removeSeat } from '../actions/actions';


const SEAT_WIDTH = 50;
const SEAT_HEIGHT = 50;

const ratio = window.devicePixelRatio;
const DRAW_SEAT_WIDTH = SEAT_WIDTH * ratio;
const DRAW_SEAT_HEIGHT = SEAT_HEIGHT * ratio;

let row = 1;
let col = 1;
data.forEach(seat => {
  if (seat.rowIndex > row) {
    row = seat.rowIndex;
  }
  if (seat.colIndex > col) {
    col = seat.colIndex;
  }
});

const CANVAS_WIDTH = col * SEAT_WIDTH;
const CANVAS_HEIGHT = row * SEAT_HEIGHT;

const propTypes = {
  selectSeat: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};



class SeatSelector extends Component {
  componentDidMount() {
    this.ctx = this.refs.canvas.getContext('2d');
    this.ctx.font = `${10 * ratio}px Arial`;
    this.ctx.fillStyle = "#fff";
    this.textAlign = 'center';

    //加载图片资源
    const emptyImg = new Image();
    const selectImg = new Image();
    const soldImg = new Image();
    let count = 0;

    const loadCallback = () => {
      count++;
      if (count === 3) {
        this.emptyImg = emptyImg;
        this.selectImg = selectImg;
        this.soldImg = soldImg;
        this.drawAllSeat();
      }
    };

    emptyImg.onload = loadCallback;
    selectImg.onload = loadCallback;
    soldImg.onload = loadCallback;

    emptyImg.src = "./source/seat-empty.png";
    selectImg.src = "./source/seat-selected.png";
    soldImg.src = "./source/seat-sold.png";
  }

  componentDidUpdate(){

    this.ctx.clearRect(0, 0 , col * DRAW_SEAT_WIDTH, row * DRAW_SEAT_HEIGHT);
    this.drawAllSeat();   //画出初始座位
    this.drawSelectSeat();  //画已选择座位
  }

  drawAllSeat = () => {
    const seatData = data;
    for (let obj of seatData) {
      const { isSold, xPos, yPos } = obj;
      const offsetLeft = (xPos - 1) * DRAW_SEAT_WIDTH;
      const offsetTop = (yPos - 1) * DRAW_SEAT_HEIGHT;

      if (isSold) {
        //画已售座位
        this.ctx.drawImage(this.soldImg, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
      } else {
        //画空座位
        this.ctx.drawImage(this.emptyImg, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
      }
    }
  }

  drawSelectSeat = () => {
    const { selectSeat } = this.props;

    for (let obj of selectSeat) {
      const { xPos, yPos, rowIndex, colIndex } = obj;
      const offsetLeft = (xPos - 1) * DRAW_SEAT_WIDTH;
      const offsetTop = (yPos - 1) * DRAW_SEAT_HEIGHT;
      this.ctx.drawImage(this.selectImg, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
      this.ctx.fillText(`${rowIndex}排`, offsetLeft + DRAW_SEAT_WIDTH / 3,  offsetTop + DRAW_SEAT_HEIGHT / 2.5);
      this.ctx.fillText(`${colIndex}座`, offsetLeft + DRAW_SEAT_WIDTH / 3,  offsetTop + DRAW_SEAT_HEIGHT * 2 / 3);
    }
  }

  clickSeat = e => {
    const offset = this.refs.canvas.getBoundingClientRect();

    const top = e.pageY - offset.top;
    const left = e.pageX - offset.left;
    // console.log(e.pageY, offset.top ,top);

    const xpos = Math.ceil(left / SEAT_WIDTH);
    const ypos = Math.ceil(top / SEAT_HEIGHT);
    // console.log(Math.ceil(top / SEAT_HEIGHT), Math.ceil(left / SEAT_WIDTH));

    const seat = data.find(seat => seat.xPos === xpos && seat.yPos === ypos);
    if (!seat || seat.isSold) {
      return;
    }

    console.log(this.props.selectSeat);
    const seatIndex = this.props.selectSeat.findIndex(item => item.id === seat.id);
    if (seatIndex > -1) {
      this.props.onRemove(seat.id);
    } else {
      if (this.props.selectSeat.length >= 4) {
        // 如果已经选择了四个座位，则不能再选
        alert('不能超过四个座位');
      } else {
        this.props.onAdd(seat);
        this.drawSelectSeat();
      }
    }
  }

  render() {
    return (
      <canvas onClick={this.clickSeat} ref="canvas" width={col * DRAW_SEAT_WIDTH} height={row * DRAW_SEAT_HEIGHT} style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }} />
    );
  }
}


SeatSelector.propTypes = propTypes;

const mapStatesToProps = state => {
  return {
    selectSeat: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: seat => {
      dispatch(addSeat(seat));
    },
    onRemove: id => {
      dispatch(removeSeat(id));
    }
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(SeatSelector);
