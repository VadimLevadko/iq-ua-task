import { configureStore } from "@reduxjs/toolkit";
export type RootState = ReturnType<typeof store.getState>;

import { usersReducer } from "@features/Users/user-slice";
import { weatherReducer } from "@features/Weather/weather-slice";

const store = configureStore({
    reducer: {
        users: usersReducer,
        weather: weatherReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export default store;