import {messages, createMessage} from 'messages';
import {saveModel} from 'storage';
import {addMessage} from 'model';

export const actionIds = {
  START: "START",
  RESTART: "RESTART",
  OPEN_CAPSULE_HATCH: "OPEN_CAPSULE_HATCH",
  KICK_CAPSULE_HATCH: "KICK_CAPSULE_HATCH",
  TOGGLE_HATCH_LIGHT: "TOGGLE_HATCH_LIGHT",
};

export const actionName = (actionId) => (
  actionData[actionId].name
)

export const runAction = (model, actionId) => {
  let newModel = actionData[actionId].func(model);

  saveModel(newModel);

  return newModel;
};

const startGame = (model) => {
  return {
    ...model,
    stage: "CAPSULE",
    hatch: {
      lightVisible: false,
      triedButton: false,
      stuck: true,
      requiredKicks: 3,
    },
    messages: [
      createMessage(messages.STRANDED),
    ],
  };
};

const reStartGame = (model) => {
  return {
    stage: "SPLASH",
  };
};

const openCapsuleHatch = (model) => {
  if (!model.hatch.triedButton) {
    return {
      ...model,
      hatch: {
        ...model.hatch,
        triedButton: true,
      },
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
    stage: "END",
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

const toggleOpenHatchAction = (model) => ({
  ...model,
  hatch: {
    ...model.hatch,
    lightVisible: !model.hatch.lightVisible,
  },
});

let actionData = {};
actionData[actionIds.START] = {
  name: "Start",
  func: startGame,
};
actionData[actionIds.RESTART] = {
  name: "Restart",
  func: reStartGame,
};
actionData[actionIds.OPEN_CAPSULE_HATCH] = {
  name: "OPEN",
  func: openCapsuleHatch,
};
actionData[actionIds.KICK_CAPSULE_HATCH] = {
  name: "Kick hatch",
  func: kickCapsuleHatch,
};
actionData[actionIds.TOGGLE_HATCH_LIGHT] = {
  name: "TOGGLE_HATCH_LIGHT",
  func: toggleOpenHatchAction,
};
