import { useSelector } from "react-redux";
import { selectAllUsers } from "@features/Users/user-slice";

import UsersSection from "@components/MainPage/UsersSection";

export default function MainPage() {
    const allUsers = useSelector(selectAllUsers);

    return (
        <main>
            <UsersSection content={allUsers} />
        </main>
    )
}