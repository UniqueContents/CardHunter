import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from "./tags";

const store = configureStore({
  reducer: {
    tags: tagsReducer.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
