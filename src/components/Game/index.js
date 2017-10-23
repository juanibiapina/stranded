import React, { Component } from 'react';

import Splash from 'stages/Splash';
import Capsule from 'stages/Capsule';
import GameOver from 'stages/GameOver';

import './styles.css';

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