import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from "./tags";

const store = configureStore({
  reducer: {
    tags: tagsReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
