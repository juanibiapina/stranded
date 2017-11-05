export const startMessage = () => ({
  type: "START_MESSAGE",
});

export const restartMessage = () => ({
  type: "RESTART_MESSAGE",
});

export const toggleHatchLightMessage = () => ({
  type: "TOGGLE_HATCH_LIGHT_MESSAGE",
});

export const openCapsuleHatchMessage = () => ({
  type: "OPEN_CAPSULE_HATCH_MESSAGE",
});

export const kickCapsuleHatchMessage = () => ({
  type: "KICK_CAPSULE_HATCH_MESSAGE",
});

export const animationFrameMessage = (delta) => ({
  type: "ANIMATION_FRAME_MESSAGE",
  delta: delta,
});
