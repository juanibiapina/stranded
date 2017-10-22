import {messages, createMessage} from './messages';

export const actionIds = {
  OPEN_CAPSULE_HATCH: "OPEN_CAPSULE_HATCH",
  KICK_CAPSULE_HATCH: "KICK_CAPSULE_HATCH",
  TICK: "TICK",
};

export const createAction = (actionId, hidden = false) => ({
  id: actionId,
  hidden: hidden,
});

export const actionName = (actionId) => (
  actionData[actionId].name
)

export const runAction = (model, actionId) => (
  actionData[actionId].func(model)
);

const removeAction = (actions, actionId) => (
  actions.filter((ac) => ac.id !== actionId)
);

const removeTicker = (tickers, tickerId) => (
  tickers.filter((t) => t.id !== tickerId)
);

const addMessage = (model, message) => (
  [ ...model.messages, createMessage(message) ]
);

const openCapsuleHatch = (model) => {
  if (model.hatch.openButtonNeverPressed) {
    return {
      ...model,
      hatch: {
        ...model.hatch,
        openButtonNeverPressed: false,
      },
      actions: [ createAction(actionIds.KICK_CAPSULE_HATCH), ...model.actions ],
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
    tickers: removeTicker(model.tickers, "BLINK_OPEN_HATCH_ACTION_TICKER"),
    actions: removeAction(removeAction(model.actions, actionIds.KICK_CAPSULE_HATCH), actionIds.OPEN_CAPSULE_HATCH),
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

const tick = (m) => {
  let model = m;

  model.tickers.forEach((ticker) => {
    model = ticker.func(model);
  });

  return model;
};

let actionData = {};
actionData[actionIds.OPEN_CAPSULE_HATCH] = {
  name: "OPEN",
  func: openCapsuleHatch,
};
actionData[actionIds.KICK_CAPSULE_HATCH] = {
  name: "Kick hatch",
  func: kickCapsuleHatch,
};
actionData[actionIds.TICK] = {
  name: "Tick",
  func: tick,
};
