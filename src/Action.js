import React, { Component } from 'react';

import {actionName} from './actions.js';

class Action extends Component {
  render() {
    return (
      <div className="Action">
        <button
          onClick={this.props.store.runAction(this.props.action)}
        >
          {actionName(this.props.action)}
        </button>
      </div>
    );
  }
}

export default Action;
