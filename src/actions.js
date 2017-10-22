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

const removeItem = (actions, action) => (
  actions.filter((ac) => ac !== action)
);

const addMessage = (model, message) => (
  [ ...model.messages, message ]
);

const openCapsuleHatch = (model) => {
  if (model.hatch.openButtonNeverPressed) {
    return {
      ...model,
      hatch: {
        ...model.hatch,
        openButtonNeverPressed: false,
      },
      actions: [ ...model.actions, actions.KICK_CAPSULE_HATCH ],
      messages: addMessage(model, messages.NOTHING_HAPPENED),
    };
  }

  if (model.hatch.stuck) {
    return {
      ...model,
      messages: addMessage(model, messages.NOTHING_HAPPENED),
    };
  }

  return {
    ...model,
    actions: removeItem(removeItem(model.actions, actions.KICK_CAPSULE_HATCH), actions.OPEN_CAPSULE_HATCH),
    messages: addMessage(model, messages.CAPSULE_HATCH_OPEN),
  };
};

const kickCapsuleHatch = (model) => {
  let requiredKicks = model.hatch.requiredKicks - 1;

  if (requiredKicks <= 0) {
    let message = model.hatch.stuck ? messages.CAPSULE_MECHANISM_UNSTUCK : messages.CAPSULE_MECHANISM_STUCK;

    return {
      ...model,
      hatch: {
        ...model.hatch,
        stuck: !model.hatch.stuck,
        requiredKicks: 0,
      },
      messages: addMessage(model, message),
    };
  }

  return {
    ...model,
    hatch: {
      ...model.hatch,
      requiredKicks: requiredKicks,
    },
    messages: addMessage(model, messages[`CAPSULE_HATCH_STUCK_${requiredKicks}`]),
  };
};

let actionData = {};
actionData[actions.OPEN_CAPSULE_HATCH] = {
  name: "OPEN",
  func: openCapsuleHatch,
};
actionData[actions.KICK_CAPSULE_HATCH] = {
  name: "Kick hatch",
  func: kickCapsuleHatch,
};
