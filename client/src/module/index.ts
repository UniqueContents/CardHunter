import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./auth";
import tagsReducer from "./tags";

const store = configureStore({
  reducer: {
    tags: tagsReducer.reducer,
    login: loginReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
