import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeather } from "@/store/Weather/weather-slice";
import { selectWeatherByUUID } from "@/store/Weather/weather-slice";
import { weatherCodeToEmoji } from "@utils/constants";
import { useNavigate } from "react-router";
import type { AppDispatch, RootState } from "@/store";
import type { UserType } from "@utils/types";

import UserLoader from "@components/MainPage/UsersSection/UserLoader";

export default function UserCard({ user }: { user: UserType }) {
    const { picture, name, gender, location, email, login } = user || {};

    const dispatch = useDispatch<AppDispatch>();

    const navigate = useNavigate();
    const handleClick = () => {
        return navigate(`/${login.uuid}`);
    }

    const weather = useSelector((state: RootState) => selectWeatherByUUID(state, login.uuid));
    useEffect(() => {
        if (!weather) {
            dispatch(getWeather({...location.coordinates, uuid: login.uuid}));
        }
    }, [dispatch, location.coordinates, login.uuid, weather]);

    if(!weather || weather?.loading) return <UserLoader />;

    return (
        <div className="user-card flex items-center justify-center p-4 cursor-pointer" onClick={handleClick}>
            <div
                className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-4">
                <img
                    src={picture.large}
                    alt={`${name.first} profile picture`}
                    className="w-24 h-24 rounded-full object-cover shadow-md"
                />
                <div className="space-y-1">
                    <h2 className="text-xl font-semibold text-gray-900">{name.first}</h2>
                    <p className="text-sm text-gray-500">Gender: {gender}</p>
                </div>
                <div className="w-full h-px bg-gray-200 my-2"/>
                <div className="w-full space-y-3 text-sm text-gray-700">
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                        <span className="font-medium">Location:</span>
                        <span>{location.city},</span>
                        <span>{location.country}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                        <span className="font-medium">Email:</span>
                        <span>{email}</span>
                    </div>
                </div>
                <div className="w-full h-px bg-gray-200 my-2"/>
                <div className="w-full space-y-2 text-gray-700">
                    <h3 className="text-lg font-semibold">Weather Information</h3>
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-3xl">{weatherCodeToEmoji[weather.weatherIconCode]}</span>
                        <span>Current Temperature: {weather.currentTemp}°C</span>
                        <span>Low: {weather.lowestTemp}°C</span>
                        <span>High: {weather.highestTemp}°C</span>
                    </div>
                </div>

            </div>
        </div>
    )
}