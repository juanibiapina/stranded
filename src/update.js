import {saveModel} from 'storage';
import {addMessage} from 'model';
import {userMessages, createUserMessage} from 'userMessages';

export const update = (model, message) => {
  let newModel = messageMap[message.type](model, message)

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
    userMessages: [
      createUserMessage(userMessages.STRANDED),
    ],
  };
};

const reStartGame = (model) => {
  return {
    stage: "SPLASH",
  };
};

const toggleOpenHatch = (model) => ({
  ...model,
  hatch: {
    ...model.hatch,
    lightVisible: !model.hatch.lightVisible,
  },
});

const openCapsuleHatch = (model) => {
  if (!model.hatch.triedButton) {
    return {
      ...model,
      hatch: {
        ...model.hatch,
        triedButton: true,
      },
      userMessages: addMessage(model, userMessages.NOTHING_HAPPENED),
    };
  }

  if (model.hatch.stuck) {
    return {
      ...model,
      userMessages: addMessage(model, userMessages.NOTHING_HAPPENED),
    };
  }

  return {
    ...model,
    stage: "END",
    userMessages: addMessage(model, userMessages.CAPSULE_HATCH_OPEN),
  };
};

const kickCapsuleHatch = (model) => {
  let requiredKicks = model.hatch.requiredKicks - 1;

  if (requiredKicks <= 0) {
    let message = model.hatch.stuck ? userMessages.CAPSULE_MECHANISM_UNSTUCK : userMessages.CAPSULE_MECHANISM_STUCK;

    return {
      ...model,
      hatch: {
        ...model.hatch,
        stuck: !model.hatch.stuck,
        requiredKicks: 0,
      },
      userMessages: addMessage(model, message),
    };
  }

  return {
    ...model,
    hatch: {
      ...model.hatch,
      requiredKicks: requiredKicks,
    },
    userMessages: addMessage(model, userMessages[`CAPSULE_HATCH_STUCK_${requiredKicks}`]),
  };
};

let messageMap = {};
messageMap["START_MESSAGE"] = startGame;
messageMap["TOGGLE_HATCH_LIGHT_MESSAGE"] = toggleOpenHatch;
messageMap["RESTART_MESSAGE"] = reStartGame;
messageMap["OPEN_CAPSULE_HATCH_MESSAGE"] = openCapsuleHatch;
messageMap["KICK_CAPSULE_HATCH_MESSAGE"] = kickCapsuleHatch;
