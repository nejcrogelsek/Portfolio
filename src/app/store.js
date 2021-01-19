import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/userSlice";
import projectsReducer from "../features/projectsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    projects: projectsReducer,
  },
});
