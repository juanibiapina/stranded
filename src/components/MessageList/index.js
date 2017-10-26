import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Message from 'components/Message';

import './styles.css';

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

class MessageList extends Component {
  calculateOpacity(index) {
    return (index + 1) / this.props.model.messages.length;
  }

  render() {
    return (
      <TransitionGroup className="MessageList">
        {this.props.model.messages.map((message, index) => (
          <Fade key={message.id}>
            <Message message={message} opacity={this.calculateOpacity(index)} />
          </Fade>
        ))}
      </TransitionGroup>
    );
  }
}

export default MessageList;
