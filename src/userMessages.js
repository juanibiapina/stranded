import {generate} from 'shortid';

export const userMessages = {
  STRANDED: "STRANDED",

  CAPSULE_HATCH_STUCK_2: "CAPSULE_HATCH_STUCK_2",
  CAPSULE_HATCH_STUCK_1: "CAPSULE_HATCH_STUCK_1",
  CAPSULE_MECHANISM_STUCK: "CAPSULE_MECHANISM_STUCK",
  CAPSULE_MECHANISM_UNSTUCK: "CAPSULE_MECHANISM_UNSTUCK",
  CAPSULE_HATCH_OPEN: "CAPSULE_HATCH_OPEN",

  NOTHING_HAPPENED: "NOTHING_HAPPENED",
};

let messageData = {};
messageData[userMessages.STRANDED] = "You're alive. Your space capsule has landed on an unknown planet. The only light you can see inside the dark interior of the capsule is a blinking indicator next to the exit hatch cover.";
messageData[userMessages.CAPSULE_HATCH_STUCK_2] = "The hatch cover doesn't budge, but you hear machinery moving and dying with a faint sound. You start coughing when hot smoke fills the interior of the capsule.";
messageData[userMessages.CAPSULE_HATCH_STUCK_1] = "Your foot hurts from the impact and more smoke is released. Your head starts to feel very light.";
messageData[userMessages.CAPSULE_MECHANISM_STUCK] = "You hear nothing.";
messageData[userMessages.CAPSULE_MECHANISM_UNSTUCK] = "You hear a constant buzz from near the hatch cover.";
messageData[userMessages.CAPSULE_HATCH_OPEN] = "The hatch cover slides open.";
messageData[userMessages.NOTHING_HAPPENED] = "Nothing happens.";

export const createUserMessage = (message) => (
  {
    id: generate(),
    text: messageData[message],
  }
);
