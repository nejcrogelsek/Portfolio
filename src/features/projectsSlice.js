import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: null,
  },
  reducers: {
    getProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const { getProjects } = projectsSlice.actions;

export const selectProjects = (state) => state.projects.projects;

export default projectsSlice.reducer;
