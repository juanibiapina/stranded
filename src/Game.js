import React, { Component } from 'react';

import ActionList from './ActionList';

import './Game.css';

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <ActionList store={this.props.store} />
      </div>
    );
  }
}

export default Game;
