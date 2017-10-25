import React, { Component } from 'react';

import './styles.css';

class MessageList extends Component {
  render() {
    return (
      <div className="MessageList">
        <div className="MessageList-container container">
          <div className="MessageList-bottom">
            {this.props.model.messages.map((message) => (
              <div key={message.id}>
                {message.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MessageList;
