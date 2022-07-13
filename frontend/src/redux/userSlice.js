import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "Gia Bao",
    age: "20",
    desc: "I'm a web developer",
    imageUrl:
      "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    theme: "#ff9051",
    imgIdxSelected: "0",
    loading: false,
    error: false,
  },
  reducers: {
    updateLoading(state) {
      state.loading = true;
      state.error = false;
    },

    updateError(state) {
      state.error = true;
      state.loading = false;
    },

    updateSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.username = action.payload.username;
      state.age = action.payload.age;
      state.desc = action.payload.desc;
      state.imageUrl = action.payload.imageUrl;
      state.theme = action.payload.theme;
      state.imgIdxSelected = action.payload.imgIdxSelected;
    },
  },
});

export const { updateLoading, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
