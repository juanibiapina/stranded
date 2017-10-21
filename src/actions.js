export const OPEN_CAPSULE_DOOR = "OPEN_CAPSULE_DOOR";

const actions = {
  OPEN_CAPSULE_DOOR: {
    name: "Open capsule door",
    func: (model) => model,
  },
}

export const actionName = (action) => (
  actions[action]["name"] || "Unknown"
)

export const actionFunc = (action) => (
  actions[action]["func"]
)
