export type WeekWeatherProps = {
    dates: string[];
    max: number[];
    min: number[];
    codes: number[];
}

export function buildWeekWeather({ dates, max, min, codes }: WeekWeatherProps) {
    return dates.map((date, index) => ({
        date,
        high: max[index],
        low: min[index],
        icon: codes[index],
    }))
}