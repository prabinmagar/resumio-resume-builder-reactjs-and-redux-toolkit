export const selectContactInfo = (state) => state?.resume?.contactInfo;

export const selectEducationInfo = (state) => state?.resume?.educationInfo;

export const selectEducationInfoById = (state, id) => {
  return state?.resume?.educationInfo.find((edu) => edu.id === id);
};
