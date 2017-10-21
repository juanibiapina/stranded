import React, { Component } from 'react';

import ActionList from './ActionList';

import './Game.css';

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <ActionList state={this.props.state} />
      </div>
    );
  }
}

export default Game;
