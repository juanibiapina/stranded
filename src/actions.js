import {messages} from './messages';

export const actions = {
  OPEN_CAPSULE_DOOR: "OPEN_CAPSULE_DOOR",
};


export const actionName = (action) => (
  actionData[action]["name"] || "Unknown"
)

export const runAction = (model, action) => (
  actionData[action].func(model)
);

const removeAction = (model, action) => (
  model.actions.filter((ac) => ac !== action)
);

const addMessage = (model, message) => (
  [ ...model.messages, message ]
);

const openCapsuleDoor = (model) => (
  {
    ...model,
    actions: removeAction(model, actions.OPEN_CAPSULE_DOOR),
    messages: addMessage(model, messages.CAPSULE_DOOR_OPENED),
  }
);

let actionData = {};
actionData[actions.OPEN_CAPSULE_DOOR] = {
  name: "Open capsule door",
  func: openCapsuleDoor,
};
