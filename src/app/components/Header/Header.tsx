export default function Header() {
    return (
        <header className="w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-6 shadow-md">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-900">Vadim Levadko</h1>
                    <p className="text-lg font-medium text-gray-700 mt-1">Junior Front-End Developer</p>
                </div>
                <div className="text-center md:text-right">
                    <a href="tel:+380980421806" className="text-lg font-medium text-blue-600 hover:underline">
                        +380 98 0421 806
                    </a>
                </div>
            </div>
        </header>
    );
}