import React, { Component } from 'react';

class MessageList extends Component {
  render() {
    return (
      <div className="MessageList">
        {this.props.model.messages.map((message) => (
          <div key={message.id}>
            {message.text}
          </div>
        ))}
      </div>
    );
  }
}

export default MessageList;
