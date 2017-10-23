import React, { Component } from 'react';

import Action from 'components/Action';
import {actionIds} from 'actions';

class GameOver extends Component {
  render() {
    return (
      <div className="GameOver">
        The End
        <Action dispatch={this.props.dispatch} action={actionIds.RESTART} />
      </div>
    );
  }
}

export default GameOver;
