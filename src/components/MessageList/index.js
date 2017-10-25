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
  render() {
    return (
      <div className="MessageList">
        <TransitionGroup className="MessageList-bottom">
          {this.props.model.messages.map((message) => (
            <Fade key={message.id}>
              <Message message={message} />
            </Fade>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default MessageList;
