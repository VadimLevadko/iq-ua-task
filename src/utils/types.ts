export type WeekWeatherItem = {
    date: string;
    high: number;
    low: number;
    icon: number;
};
export type WeekWeatherType = WeekWeatherItem[];
export type SliceWeekWeatherType = {
    loading: boolean;
    error: string | null;
    dates: WeekWeatherType;
}

export type UserType = {
    gender: string;
    email: string;
    name: {
        first: string;
        last: string
    };
    picture: {
        large: string;
        medium: string;
    };
    login: {
        uuid: string;
    };
    location: {
        city: string;
        country: string;
        coordinates: {
            latitude: string;
            longitude: string;
        };
    };
};

