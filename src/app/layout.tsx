import { BrowserRouter, Route, Routes } from "react-router";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { getAllUsers } from "@features/Users/user-slice.js";

import MainPage from "@pages/Main/page"
import Page from "@pages/UserProfilePage/page";

import './style.scss'

export default function Layout() {
    const dispatch = useDispatch();

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dispatch(getAllUsers());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/:id" element={<Page />} />
            </Routes>
        </BrowserRouter>
    )
}