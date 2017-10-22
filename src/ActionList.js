import React, { Component } from 'react';

import Action from './Action';

class ActionList extends Component {
  render() {
    return (
      <div className="ActionList">
        {this.props.model.actions.filter((action) => !action.hidden).map((action) => (
          <Action model={this.props.model} dispatch={this.props.dispatch} action={action} key={action.id} />
        ))}
      </div>
    );
  }
}

export default ActionList;
