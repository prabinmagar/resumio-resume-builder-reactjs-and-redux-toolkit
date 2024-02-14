import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage, saveToLocalStorage } from "../../utils/helper";

const storedResumeData = loadFromLocalStorage();

const initialState = storedResumeData
  ? storedResumeData
  : {
      contactInfo: {
        uploadImage: "",
        firstName: "",
        surName: "",
        profession: "",
        cityOrMunicipality: "",
        country: "",
        postalCode: "",
        phone: "",
        email: "",
      },
      educationInfo: [],
    };

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateContactInfo: (state, action) => {
      state.contactInfo = {
        ...state.contactInfo,
        ...action.payload,
      };
      saveToLocalStorage(state);
    },
    updateUploadedImage: (state, action) => {
      state.contactInfo.uploadImage = action.payload;
      saveToLocalStorage(state);
    },
    addEducationInfo: (state, action) => {
      state.educationInfo.push(action.payload);
      saveToLocalStorage(state);
    },
    updateEducationInfo: (state, action) => {
      console.log(action.payload);
      const { id, data } = action.payload;
      state.educationInfo = state.educationInfo.map((item) => {
        if (item.id === id) {
          return { ...item, ...data };
        }
        return item;
      });
      saveToLocalStorage(state);
    },
    removeEducationInfo: (state, action) => {
      const id = action.payload;
      state.educationInfo = state.educationInfo.filter(
        (item) => item.id !== id
      );
      saveToLocalStorage(state);
    },
  },
});

export const {
  updateContactInfo,
  updateUploadedImage,
  addEducationInfo,
  updateEducationInfo,
  removeEducationInfo,
  getEducationInfoById,
} = resumeSlice.actions;
export default resumeSlice.reducer;
