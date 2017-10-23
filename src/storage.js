export const saveModel = (model) => (
  localStorage.setItem("model", JSON.stringify(model))
);

export const loadModel = () => (
  JSON.parse(localStorage.getItem("model"))
);
