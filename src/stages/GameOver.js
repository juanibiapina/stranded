import React, { Component } from 'react';

import Action from 'components/Action';
import {restartMessage} from 'messages';

class GameOver extends Component {
  render() {
    return (
      <div className="GameOver">
        The End
        <Action dispatch={this.props.dispatch} text="Restart" message={restartMessage()} />
      </div>
    );
  }
}

export default GameOver;
