import { BrowserRouter, Route, Routes } from "react-router";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { getAllUsers } from "@features/Users/user-slice.js";
import { AppDispatch } from "@features/store";

import Header from "@components/Header";
import MainPage from "@pages/Main/page"
import UserProfile from "@pages/UserProfilePage/page";
import Footer from "@components/Footer/Footer";

import './style.scss'

export default function Layout() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/:id" element={<UserProfile />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}