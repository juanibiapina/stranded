import React, { Component } from 'react';

import MessageList from './MessageList';
import ActionList from './ActionList';

import './Game.css';

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <MessageList model={this.props.model} dispatch={this.props.dispatch} />
        <ActionList model={this.props.model} dispatch={this.props.dispatch} />
      </div>
    );
  }
}

export default Game;
