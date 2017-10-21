import React, { Component } from 'react';

import {actionName} from './actions.js';

class Action extends Component {
  render() {
    return (
      <div className="Action">
        <button>{actionName(this.props.action)}</button>
      </div>
    );
  }
}

export default Action;
