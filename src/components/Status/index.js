import React, { Component } from 'react';

import './styles.css';

class Status extends Component {
  width() {
    return (this.props.current / this.props.max) * 100;
  }

  render() {
    return (
      <div className="Status">
        <div className="progress" style={{width: `${this.width()}%`}}>
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Status;
