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
messageData[messages.STRANDED] = "You're alive. Your space capsule has landed on an unknown planet. The interior of the capsule is dark, but you can see the capsule's hatch indicator light blinking slowly.";
messageData[messages.CAPSULE_HATCH_STUCK_2] = "You hear a mechanism start moving and dying with a faint sound. Hot smoke fills the interior of the capsule. It's getting hard to breath.";
messageData[messages.CAPSULE_HATCH_STUCK_1] = "More smoke is released from the hatch. Red emergency lights start blinking.";
messageData[messages.CAPSULE_MECHANISM_STUCK] = "You hear no sounds from the hatch mechanisms.";
messageData[messages.CAPSULE_MECHANISM_UNSTUCK] = "You hear a constant, turning noise from within the hatch.";
messageData[messages.CAPSULE_HATCH_OPEN] = "The hatch slides open. The sunlight is blinding.";
messageData[messages.NOTHING_HAPPENED] = "Nothing happened.";

export const createMessage = (message) => (
  {
    id: generate(),
    text: messageData[message],
  }
);
