import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectSingleUser } from "@features/Users/user-slice";
import { getWeekWeather } from "@features/Weather/weather-slice";
import { selectWeekWeatherByUUID } from "@features/Weather/weather-slice";
import { AppDispatch } from "@features/store";

import WeatherItem from "@components/commonSections/WeatherItem/WeatherItem";

export default function Page() {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    // @ts-ignore
    const userProfile = useSelector(state => selectSingleUser(state, id))
    const { picture, name, gender, location, email, login } = userProfile || {};

    // @ts-ignore
    const weekWeather = useSelector(state => selectWeekWeatherByUUID(state, login.uuid));

    useEffect(() => {
        if(!weekWeather) {
            dispatch(getWeekWeather({...location.coordinates, uuid: login.uuid}))
        }
    }, [dispatch, weekWeather]);

    if(!weekWeather) {
        return <h1>Loading...</h1>
    }


    return (
        <div className="p-4">
            <button
                onClick={() => navigate('/')}
                className="mb-4 text-sm text-blue-600 hover:underline"
            >
                ← Back to user list
            </button>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <img
                        src={picture.large}
                        alt={`${name.first} profile picture`}
                        className="w-40 h-40 rounded-full object-cover shadow-md"
                    />
                    <div className="space-y-2 text-center sm:text-left">
                        <h1 className="text-2xl font-semibold text-gray-900">{name.first}</h1>
                        <p className="text-gray-600">Gender: {gender}</p>
                        <p className="text-gray-600">City: {location.city}</p>
                        <p className="text-gray-600">Country: {location.country}</p>
                        <p className="text-gray-600 break-all">Email: {email}</p>
                    </div>
                </div>
                <div className="w-full h-px bg-gray-200" />
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        7-Day Weather Forecast
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
                        {weekWeather.dates.map((day) => <WeatherItem day={day} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}