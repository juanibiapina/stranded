import React, { Component } from 'react';

import MessageList from 'components/MessageList';
import ActionList from 'components/ActionList';

import {actionIds} from 'actions';

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

    if (this.props.model.hatch.lightVisible) {
      actions = [...actions, actionIds.OPEN_CAPSULE_HATCH];
    }

    return actions;
  }

  render() {
    return (
      <div className="Capsule">
        <MessageList model={this.props.model} dispatch={this.props.dispatch} />
        <ActionList actions={this.getActions()} dispatch={this.props.dispatch} />
      </div>
    );
  }
}

export default Capsule;
