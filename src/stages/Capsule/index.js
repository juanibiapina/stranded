import React, { Component } from 'react';

import MessageList from 'components/MessageList';
import Action from 'components/Action';
import Status from 'components/Status';

import {kickCapsuleHatchMessage, openCapsuleHatchMessage, toggleHatchLightMessage} from 'messages';

import './styles.css';

class Capsule extends Component {
  tick() {
    this.props.dispatch(toggleHatchLightMessage());
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Capsule">
        <div className="header">
          <MessageList model={this.props.model} dispatch={this.props.dispatch} />
        </div>

        <div className="content">
          <div className="open-container">
            {this.props.model.hatch.lightVisible ? (
              <Action dispatch={this.props.dispatch} text="OPEN" message={openCapsuleHatchMessage()} />
            ) : null}
          </div>

          <div className="actions-container">
            {this.props.model.hatch.triedButton && <Action dispatch={this.props.dispatch} text="Kick hatch" message={kickCapsuleHatchMessage()} />}
          </div>

          <div className="status-container">
            {this.props.model.suffocationActive && <Status text="Air" max={30000} current={this.props.model.suffocatesIn} />}
          </div>
        </div>
      </div>
    );
  }
}

export default Capsule;
