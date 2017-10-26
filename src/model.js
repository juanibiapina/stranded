import {createMessage} from 'messages';

const MAX_MESSAGES = 10;

export const addMessage = (model, message) => {
  let result = [ ...model.messages, createMessage(message) ];

  result.splice(0, result.length - MAX_MESSAGES);

  return result;
};

