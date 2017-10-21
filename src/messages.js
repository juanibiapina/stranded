export const messages = {
  STRANDED: "STRANDED",
  CAPSULE_HATCH_STUCK: "CAPSULE_HATCH_STUCK",
  CAPSULE_HATCH_OPEN: "CAPSULE_HATCH_OPEN",
};

let messageData = {};
messageData[messages.STRANDED] = "You're alive. Your space capsule has landed on an unknown planet. The interior of the capsule is dark, but you can see the capsule's hatch indicator light blinking slowly.";
messageData[messages.CAPSULE_HATCH_STUCK] = "You hear grinding noises, wet smoke fills the interior of the capsule, but the hatch doesn't seem to move at all. It's getting hard to breath.";
messageData[messages.CAPSULE_HATCH_OPEN] = "The hatch flies off with a loud bang. The sunlight is blinding.";

export const messageText = (message) => (
  messageData[message]
);
