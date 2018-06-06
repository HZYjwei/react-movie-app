import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './CollapsibleText.css';

/**
* fileName: 'CollapsibleText.jsx'
* createTime: 2018-05-31   15:28
* desc: 折叠框
*/

class Collapsible extends Component {
    /**
     * state
     * isCollapse: 当前组是否展开。
     * isNeedCollapse：当前是否有多出部分。
     *
     * props
     * lineHeight: 单行行高
     * lines：显示行数
     * fontSize: 字体大小
     */
  state = {
    isCollapse: false,
    isNeedCollapse: false
  }

  componentDidMount(){
    const dom  = ReactDOM.findDOMNode(this),
          lineHeight = this.props.lineHeight || 28,
          lines = this.props.lines || 3,
          height = lineHeight * lines;
    if(dom.clientHeight > height){
      this.setState({
        isCollapse: true,
        isNeedCollapse: true,
      });
    }
  }

  toggleStatus = () => {
    if(this.state.isNeedCollapse){
      this.setState((prevState) => ({
        isCollapse: !prevState.isCollapse
      }));
    }
  }

  render() {
    const { isCollapse } = this.state;
    const cls = isCollapse ? 'collapsibleText--collapse' : '';
    let { lineHeight = 28, lines = 3, fontSize = 14} = this.props;
    const maxHeight = isCollapse ? lineHeight * lines : 'none';
    return (
      <div className={`collapsibleText ${cls}`} style={{maxHeight: maxHeight, lineHeight: lineHeight + 'px', fontSize: fontSize + 'px'}} onClick={this.toggleStatus}>
        {this.props.children}
        {this.state.isCollapse && <div className="collapsibleText__label" style={{lineHeight: lineHeight + 'px'}}>展开</div>}
      </div>
    );
  }
}

Collapsible.proptypes = {
  children: PropTypes.any,
  lineHeight: PropTypes.number,
  lines: PropTypes.number,
  fontSize: PropTypes.number
};

export default Collapsible;
