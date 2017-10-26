import React, { Component } from 'react';

import './styles.css';

class Message extends Component {
  render() {
    return (
      <div className="Message" style={{opacity: this.props.opacity}}>
        > {this.props.message.text}
      </div>
    );
  }
}

export default Message;
