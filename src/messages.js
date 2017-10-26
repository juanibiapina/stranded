import {generate} from 'shortid';

export const messages = {
  STRANDED: "STRANDED",

  CAPSULE_HATCH_STUCK_2: "CAPSULE_HATCH_STUCK_2",
  CAPSULE_HATCH_STUCK_1: "CAPSULE_HATCH_STUCK_1",
  CAPSULE_MECHANISM_STUCK: "CAPSULE_MECHANISM_STUCK",
  CAPSULE_MECHANISM_UNSTUCK: "CAPSULE_MECHANISM_UNSTUCK",
  CAPSULE_HATCH_OPEN: "CAPSULE_HATCH_OPEN",

  NOTHING_HAPPENED: "NOTHING_HAPPENED",
};

let messageData = {};
messageData[messages.STRANDED] = "You're alive. Your space capsule has landed on an unknown planet. The only light you can see inside the dark interior of the capsule is a blinking indicator next to the exit hatch cover.";
messageData[messages.CAPSULE_HATCH_STUCK_2] = "The hatch cover doesn't budge, but you hear machinery moving and dying with a faint sound. You start coughing when hot smoke fills the interior of the capsule.";
messageData[messages.CAPSULE_HATCH_STUCK_1] = "Your foot hurts from the impact and more smoke is released. Your head starts to feel very light.";
messageData[messages.CAPSULE_MECHANISM_STUCK] = "You hear nothing.";
messageData[messages.CAPSULE_MECHANISM_UNSTUCK] = "You hear a constant buzz from near the hatch cover.";
messageData[messages.CAPSULE_HATCH_OPEN] = "The hatch cover slides open.";
messageData[messages.NOTHING_HAPPENED] = "Nothing happens.";

export const createMessage = (message) => (
  {
    id: generate(),
    text: messageData[message],
  }
);
