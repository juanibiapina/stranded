import React, { Component } from 'react';

import Action from './Action';

class ActionList extends Component {
  render() {
    return (
      <div className="ActionList">
        {this.props.state.actions.map((action) => (
          <Action action={action} key={action} />
        ))}
      </div>
    );
  }
}

export default ActionList;
