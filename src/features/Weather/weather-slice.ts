import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { buildWeekWeather } from "@utils/helpers";
import type { RootState } from "../store.ts";
import type { WeekWeatherType } from "@utils/types";

type WeatherData = {
    weatherIconCode: number;
    currentTemp: number;
    lowestTemp: number;
    highestTemp: number;
    loading: boolean;
    error: string | null;
    weekWeather?: {
        dates: WeekWeatherType;
        loading: boolean;
        error: string | null;
    }
};
type WeatherState = {
    byUUID: Record<string, WeatherData>;
};

export const getWeather = createAsyncThunk(
    "GET_WEATHER",
    async({ latitude, longitude, uuid }: { latitude: string, longitude: string, uuid: string }) => {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`)
        const data = await res.json();

        return {
            uuid,
            ...data,
        }
    }
)

export const getWeekWeather = createAsyncThunk(
    "GET_WEEK_WEATHER",
    async({ latitude, longitude, uuid }: { latitude: string, longitude: string, uuid: string }) => {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`)
        const data = await res.json();

        return {
            uuid,
            ...data,
        }
    }
)

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        byUUID: {},
    } as WeatherState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state, action) => {
                const { uuid } = action.meta.arg;
                state.byUUID[uuid] = {
                    weatherIconCode: 0,
                    currentTemp: 0,
                    lowestTemp: 0,
                    highestTemp: 0,
                    loading: true,
                    error: null,
                };
            })
            .addCase(getWeather.fulfilled, (state, action) => {
                const { uuid, current_weather, daily } = action.payload;
                state.byUUID[uuid] = {
                    weatherIconCode: current_weather.weathercode,
                    currentTemp: current_weather.temperature,
                    lowestTemp: Math.min(...daily.temperature_2m_min),
                    highestTemp: Math.max(...daily.temperature_2m_max),
                    loading: false,
                    error: null,
                };
            })
            .addCase(getWeather.rejected, (state, action) => {
                const { uuid } = action.meta.arg;
                state.byUUID[uuid] = {
                    weatherIconCode: 0,
                    currentTemp: 0,
                    lowestTemp: 0,
                    highestTemp: 0,
                    loading: false,
                    error: action.error.message ?? "Error",
                };
            })
            .addCase(getWeekWeather.pending, (state, action) => {
                const { uuid } = action.meta.arg;
                state.byUUID[uuid].weekWeather = {
                    dates: [],
                    loading: true,
                    error: null,
                }
            })
            .addCase(getWeekWeather.fulfilled, (state, action) => {
                const { uuid } = action.meta.arg;
                state.byUUID[uuid].weekWeather = {
                    dates: buildWeekWeather({
                        dates: action.payload.daily.time,
                        max: action.payload.daily.temperature_2m_max,
                        min: action.payload.daily.temperature_2m_min,
                        codes: action.payload.daily.weathercode,
                    }),
                    loading: false,
                    error: null,
                }
            })
            .addCase(getWeekWeather.rejected, (state, action) => {
                const { uuid } = action.meta.arg;
                state.byUUID[uuid].weekWeather = {
                    dates: [],
                    loading: false,
                    error: action.error.message ?? "Error",
                }
            })
    }
})

export const weatherReducer = weatherSlice.reducer;

export const selectWeatherByUUID = (
    state: RootState,
    uuid: string,
) => state.weather.byUUID[uuid];
export const selectWeekWeatherByUUID = (
    state: RootState,
    uuid: string,
) => state.weather.byUUID[uuid].weekWeather;