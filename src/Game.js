import React, { Component } from 'react';

import MessageList from './MessageList';
import ActionList from './ActionList';

import {actionIds} from './actions';

import './Game.css';

class Game extends Component {
  tick() {
    this.props.dispatch(actionIds.TICK);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

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
