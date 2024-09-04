import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
