import React, { Component } from 'react';

import {actionName} from 'actions';

import './styles.css';

class Action extends Component {
  render() {
    return (
      <div className="Action">
        <button
          onClick={() => this.props.dispatch(this.props.action)}
        >
          {actionName(this.props.action)}
        </button>
      </div>
    );
  }
}

export default Action;
