import React, { Component } from 'react';

import Splash from './Splash';
import Capsule from './Capsule';
import GameOver from './GameOver';

import './Game.css';

class Game extends Component {
  getComponentForStage(stage) {
    switch (stage) {
      case "SPLASH":
        return Splash;
      case "CAPSULE":
        return Capsule;
      default:
        return GameOver;
    }
  }

  render() {
    let Component = this.getComponentForStage(this.props.model.stage);

    return (
      <div className="Game">
        <Component model={this.props.model} dispatch={this.props.dispatch} />
      </div>
    );
  }
}

export default Game;
