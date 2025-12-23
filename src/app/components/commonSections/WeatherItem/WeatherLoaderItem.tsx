export default function WeatherLoaderItem() {
    return (
        <div className="flex flex-col items-center bg-gray-50 rounded-xl py-3 px-[6px] shadow-sm animate-pulse">
            <div className="h-4 w-8 bg-gray-300 rounded mb-2"/>
            <div className="h-8 w-8 bg-gray-300 rounded-full my-2"/>
            <div className="h-4 w-12 bg-gray-300 rounded mb-1"/>
            <div className="h-3 w-10 bg-gray-200 rounded"/>
        </div>
    )
}