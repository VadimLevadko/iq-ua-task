import { useNavigate } from "react-router";
import type { WeekWeatherItem, UserType, SliceWeekWeatherType } from "@utils/types"

import WeatherLoaderItem from "@components/commonSections/WeatherItem/WeatherLoaderItem";
import WeatherItem from "@components/commonSections/WeatherItem/WeatherItem";
import SectionError from "@components/commonSections/Error/SectionError";

interface ISectionProps {
    profile: UserType;
    weather?: SliceWeekWeatherType;
}

export default function UserProfileSection({ profile, weather }: ISectionProps) {
    const { picture, name, gender, location, email } = profile || {};
    const navigate = useNavigate();

    return (
        <section className="user-profile-section container p-4">
            <button
                onClick={() => navigate('/')}
                className="mb-4 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-50 via-white to-purple-50 text-gray-900 text-sm font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
                <span>←</span> Back to user list
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
                <div className="w-full h-px bg-gray-200"/>
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        7-Day Weather Forecast
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
                        {!weather || weather.loading ? (
                            Array.from({length: 7}).map((_, i) => <WeatherLoaderItem key={i}/>)
                        ) : (
                            weather.dates.map((day: WeekWeatherItem) => <WeatherItem day={day} key={day.date}/>)
                        )}
                    </div>
                    {!!weather?.error && <SectionError title="Error retrieving forecast" description={`Check your internet connection or try again later (${weather.error})`} />}
                </div>
            </div>
        </section>
    )
}