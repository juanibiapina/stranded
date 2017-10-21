import {messages} from './messages';

export const actions = {
  OPEN_CAPSULE_HATCH: "OPEN_CAPSULE_HATCH",
  KICK_CAPSULE_HATCH: "KICK_CAPSULE_HATCH",
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

const openCapsuleHatch = (model) => (
  {
    ...model,
    actions: [ ...removeAction(model, actions.OPEN_CAPSULE_HATCH), actions.KICK_CAPSULE_HATCH ],
    messages: addMessage(model, messages.CAPSULE_HATCH_STUCK),
  }
);

const kickCapsuleHatch = (model) => (
  {
    ...model,
    actions: removeAction(model, actions.KICK_CAPSULE_HATCH),
    messages: addMessage(model, messages.CAPSULE_HATCH_OPEN),
  }
);

let actionData = {};
actionData[actions.OPEN_CAPSULE_HATCH] = {
  name: "Open capsule hatch",
  func: openCapsuleHatch,
};
actionData[actions.KICK_CAPSULE_HATCH] = {
  name: "Kick capsule hatch",
  func: kickCapsuleHatch,
};
