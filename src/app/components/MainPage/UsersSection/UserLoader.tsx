export default function UserLoader() {
    return (
        <div className="flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-6 animate-pulse">
                <div className="w-24 h-24 rounded-full bg-gray-300"/>
                <div className="w-full flex flex-col items-center gap-2">
                    <div className="h-5 w-2/3 bg-gray-300 rounded"/>
                    <div className="h-4 w-1/3 bg-gray-200 rounded"/>
                </div>
                <div className="w-full h-px bg-gray-200"/>
                <div className="w-full space-y-3">
                    <div className="h-4 w-3/4 bg-gray-200 rounded mx-auto"/>
                    <div className="h-4 w-5/6 bg-gray-200 rounded mx-auto"/>
                </div>
                <div className="w-full h-px bg-gray-200"/>
                <div className="w-full flex flex-col items-center gap-2">
                    <div className="h-5 w-1/2 bg-gray-300 rounded"/>
                    <div className="h-8 w-8 bg-gray-300 rounded-full"/>
                    <div className="h-4 w-2/3 bg-gray-200 rounded"/>
                    <div className="h-4 w-1/2 bg-gray-200 rounded"/>
                    <div className="h-4 w-1/2 bg-gray-200 rounded"/>
                </div>
            </div>
        </div>
    );
}