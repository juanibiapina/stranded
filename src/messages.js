export const messages = {
  STRANDED: "STRANDED_MESSAGE",
  CAPSULE_DOOR_OPENED: "CAPSULE_DOOR_OPENED_MESSAGE",
};

let messageData = {};
messageData[messages.STRANDED] = "You're alive";
messageData[messages.CAPSULE_DOOR_OPENED] = "The capsule door is open";

export const messageText = (message) => (
  messageData[message]
);
