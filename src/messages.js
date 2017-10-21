export const messages = {
  STRANDED: "STRANDED",
  CAPSULE_DOOR_OPENED: "CAPSULE_DOOR_OPENED",
};

let messageData = {};
messageData[messages.STRANDED] = "You're alive. Your space capsule has landed on an unknown planet. The interior of the capsule is dark, but you can see the capsule's hatch indicator light blinking slowly.";
messageData[messages.CAPSULE_DOOR_OPENED] = "The hatch slides open.";

export const messageText = (message) => (
  messageData[message]
);
