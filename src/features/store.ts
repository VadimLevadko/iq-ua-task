import { configureStore } from "@reduxjs/toolkit";

import { usersReducer } from "@features/Users/user-slice";
import { weatherReducer } from "@features/Weather/weather-slice";

const store = configureStore({
    reducer: {
        users: usersReducer,
        weather: weatherReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;