import React, { Component } from 'react';

import {messageText} from './messages';

class MessageList extends Component {
  render() {
    return (
      <div className="MessageList">
        {this.props.model.messages.map((message) => (
          <div key={message}>
            {messageText(message)}
          </div>
        ))}
      </div>
    );
  }
}

export default MessageList;
