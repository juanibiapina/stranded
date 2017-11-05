import {createUserMessage} from 'userMessages';

const MAX_MESSAGES = 10;

export const addMessage = (model, message) => {
  let result = [ ...model.userMessages, createUserMessage(message) ];

  result.splice(0, result.length - MAX_MESSAGES);

  return result;
};

