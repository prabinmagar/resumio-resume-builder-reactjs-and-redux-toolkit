export const saveToLocalStorage = (data) => {
  try {
    const serializedState = JSON.stringify(data);
    localStorage.setItem("resume", serializedState);
  } catch (error) {
    console.error("Error saving to local storage.", error);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const serializedData = localStorage.getItem("resume");
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error("Error loading data from local storage:", error);
    return undefined;
  }
};
