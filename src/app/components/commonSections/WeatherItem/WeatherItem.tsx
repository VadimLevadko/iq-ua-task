import type { WeekWeatherItem } from "@utils/types";
import { weatherCodeToEmoji } from "@utils/constants";

export default function WeatherItem({ day }: { day: WeekWeatherItem }) {
    return (
        <div
            key={day.date}
            className="flex flex-col items-center bg-gray-50 rounded-xl py-3 px-[6px] shadow-sm"
        >
            <span className="text-sm font-medium text-gray-700">{day.date}</span>
            <span className="text-2xl my-2">{weatherCodeToEmoji[day.icon]}</span>
            <span className="text-sm text-gray-700">↑ {day.high}°C</span>
            <span className="text-xs text-gray-500">↓ {day.low}°C</span>
        </div>
    )
}