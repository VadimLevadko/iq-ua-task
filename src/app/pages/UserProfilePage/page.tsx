import {useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectSingleUser } from "@/store/Users/user-slice";
import { getWeekWeather } from "@/store/Weather/weather-slice";
import { selectWeekWeatherByUUID } from "@/store/Weather/weather-slice";
import type { AppDispatch, RootState } from "@/store";

import Error from "@components/commonSections/Error";
import UserProfileSection from "@components/ProfilePage/UserProfileSection";

export default function Page() {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();

    const userProfile = useSelector((state: RootState) => id ? selectSingleUser(state, id) : undefined)
    const weekWeather = useSelector((state: RootState) => userProfile?.login?.uuid ? selectWeekWeatherByUUID(state, userProfile.login.uuid) : undefined);

    useEffect(() => {
        if(
            userProfile &&
            userProfile.location?.coordinates &&
            userProfile.login?.uuid &&
            !weekWeather
        ) {
            dispatch(getWeekWeather({...userProfile.location.coordinates, uuid: userProfile.login.uuid}))
        }
    }, [dispatch, userProfile, weekWeather]);

    if(!id || !userProfile) return <Error message="Not Found..." hasButton={true} />
    return <UserProfileSection profile={userProfile} weather={weekWeather} />;
}