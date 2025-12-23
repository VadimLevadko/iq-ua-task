import { configureStore } from "@reduxjs/toolkit";

import { usersReducer } from "@/store/Users/user-slice";
import { weatherReducer } from "@/store/Weather/weather-slice";

const index = configureStore({
    reducer: {
        users: usersReducer,
        weather: weatherReducer,
    }
});

export type AppDispatch = typeof index.dispatch;
export type RootState = ReturnType<typeof index.getState>;
export default index;