import React, { Component } from 'react';

import './styles.css';

class Message extends Component {
  render() {
    return (
      <div className="Message">
        > {this.props.message.text}
      </div>
    );
  }
}

export default Message;
