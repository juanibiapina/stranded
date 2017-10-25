import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

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
  render() {
    return (
      <div className="MessageList container">
        <TransitionGroup className="MessageList-bottom">
          {this.props.model.messages.map((message) => (
            <Fade key={message.id}>
              <div className="Message">
                {message.text}
              </div>
            </Fade>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default MessageList;
