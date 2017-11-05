import React, { Component } from 'react';

import Action from 'components/Action';
import {startMessage} from 'messages';

class Splash extends Component {
  render() {
    return (
      <div className="Splash">
        <Action dispatch={this.props.dispatch} text="Start" message={startMessage()} />
      </div>
    );
  }
}

export default Splash;
