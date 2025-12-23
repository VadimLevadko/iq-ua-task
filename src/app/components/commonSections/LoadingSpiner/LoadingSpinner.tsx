export default function LoadingSpinner() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"/>
        </div>
    )
}