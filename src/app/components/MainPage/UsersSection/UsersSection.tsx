import UserCard from "@components/MainPage/UsersSection/UserCard";

export default function UsersSection({ content }: { content: any }) {
    const { users, loading, error } = content || {};

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"/>
            </div>
        )
    }

    return (
        <section className="all-users-section">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {users.map((item: any) => <UserCard user={item} />)}
                </div>
            </div>
        </section>
    )
}