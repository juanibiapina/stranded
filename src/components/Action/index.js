import React, { Component } from 'react';

import './styles.css';

class Action extends Component {
  render() {
    return (
      <div className="Action">
        <button
          onClick={() => this.props.dispatch(this.props.message)}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default Action;
