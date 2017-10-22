import {actionIds} from './actions';

export const blinkOpenHatchAction = {
  id: "BLINK_OPEN_HATCH_ACTION_TICKER",
  func: (model) => ({
    ...model,
    actions: model.actions.map((action) => {
      if (action.id === actionIds.OPEN_CAPSULE_HATCH) {
        return { ...action, hidden: !action.hidden };
      } else {
        return action;
      }
    }),
  }),
};
