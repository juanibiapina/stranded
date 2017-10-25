import React, { Component } from 'react';

import Action from 'components/Action';

import './styles.css';

class ActionList extends Component {
  render() {
    return (
      <div className="ActionList">
        {this.props.actions.map((action) => (
          <Action dispatch={this.props.dispatch} action={action} key={action} />
        ))}
      </div>
    );
  }
}

export default ActionList;
