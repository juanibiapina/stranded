import React, { Component } from 'react';

import {actionIds} from 'actions';

class Splash extends Component {
  render() {
    return (
      <div className="Splash">
        <button
          onClick={() => this.props.dispatch(actionIds.START)}
        >
          Start
        </button>
      </div>
    );
  }
}

export default Splash;
