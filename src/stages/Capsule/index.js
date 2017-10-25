import React, { Component } from 'react';

import MessageList from 'components/MessageList';
import Action from 'components/Action';
import ActionList from 'components/ActionList';

import {actionIds} from 'actions';

import './styles.css';

class Capsule extends Component {
  tick() {
    this.props.dispatch(actionIds.TOGGLE_HATCH_LIGHT);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getActions() {
    let actions = [];

    if (this.props.model.hatch.triedButton) {
      actions = [...actions, actionIds.KICK_CAPSULE_HATCH];
    }

    return actions;
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
              <Action dispatch={this.props.dispatch} action={actionIds.OPEN_CAPSULE_HATCH} />
            ) : null}
          </div>

          <ActionList actions={this.getActions()} dispatch={this.props.dispatch} />
        </div>
      </div>
    );
  }
}

export default Capsule;
