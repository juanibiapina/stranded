import React, { Component } from 'react';

import Action from './Action';

class ActionList extends Component {
  render() {
    return (
      <div className="ActionList">
        {this.props.store.getModel().actions.map((action) => (
          <Action store={this.props.store} action={action} key={action} />
        ))}
      </div>
    );
  }
}

export default ActionList;
