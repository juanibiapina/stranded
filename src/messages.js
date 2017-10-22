export const messages = {
  STRANDED: "STRANDED",
  CAPSULE_HATCH_STUCK_3: "CAPSULE_HATCH_STUCK_3",
  CAPSULE_HATCH_STUCK_2: "CAPSULE_HATCH_STUCK_2",
  CAPSULE_HATCH_STUCK_1: "CAPSULE_HATCH_STUCK_1",
  CAPSULE_HATCH_OPEN: "CAPSULE_HATCH_OPEN",
};

let messageData = {};
messageData[messages.STRANDED] = "You're alive. Your space capsule has landed on an unknown planet. The interior of the capsule is dark, but you can see the capsule's hatch indicator light blinking slowly.";
messageData[messages.CAPSULE_HATCH_STUCK_3] = "You hear grinding noises and hot smoke fills the interior of the capsule. It's getting hard to breath, but the hatch seems to have moved a litle.";
messageData[messages.CAPSULE_HATCH_STUCK_2] = "The hatch bulges out, letting in only a trickle of light.";
messageData[messages.CAPSULE_HATCH_STUCK_1] = "The hatch barely holds on.";
messageData[messages.CAPSULE_HATCH_OPEN] = "The hatch flies off with a loud bang. The sunlight is blinding.";

export const messageText = (message) => (
  messageData[message]
);
