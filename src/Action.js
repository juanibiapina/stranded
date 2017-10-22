import React, { Component } from 'react';

import {actionName} from './actions.js';

class Action extends Component {
  render() {
    return (
      <div className="Action">
        <button
          onClick={() => this.props.dispatch(this.props.action.id)}
        >
          {actionName(this.props.action.id)}
        </button>
      </div>
    );
  }
}

export default Action;
