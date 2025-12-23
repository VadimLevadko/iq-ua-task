import type { UserType } from "@utils/types";

import LoadingSpinner from "@components/commonSections/LoadingSpiner/LoadingSpinner";
import Error from "@components/commonSections/Error"
import UserCard from "@components/MainPage/UsersSection/UserCard";

interface UserSectionProps {
    content: {
        loading: boolean;
        error: string | null;
        users: UserType[];
    }
}

export default function UsersSection({ content }: UserSectionProps) {
    const { users, loading, error } = content || {};

    if (loading) return <LoadingSpinner />
    if (error !== null) return <Error message={error} />;

    return (
        <section className="all-users-section">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {users.map((item: UserType) => <UserCard user={item} key={item.login.uuid} />)}
                </div>
            </div>
        </section>
    )
}