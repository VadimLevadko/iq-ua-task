import { useNavigate } from "react-router";

export default function Error({ message, hasButton }: { message: string, hasButton?: boolean }) {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
            <div className="relative max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center overflow-hidden">
                <div
                    className="absolute -top-24 -right-24 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"/>
                <div
                    className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-40 animate-pulse"/>
                <div className="relative z-10">
                    <div className="text-6xl mb-4 animate-bounce">🚫</div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Oops!
                    </h1>
                    <p className="text-gray-600 mb-8">
                        {message}
                    </p>
                    <div className="flex justify-center gap-4">
                        {hasButton && (
                            <button
                                onClick={() => navigate('/')}
                                className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition transform hover:scale-105"
                            >
                                Back to user list
                            </button>
                        )}
                        <button
                            onClick={() => window.location.reload()}
                            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition transform hover:scale-105"
                        >
                            Reload
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}