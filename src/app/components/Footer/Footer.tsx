export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-t from-blue-50 via-white to-purple-50 py-8 px-6 mt-12 relative overflow-hidden shadow-inner">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="relative z-10 max-w-6xl mx-auto text-center text-gray-700">
                <p className="text-sm mb-2">&#169; 2025 Vadim Levadko. All rights reserved.</p>
                <p className="text-sm">Designed with ❤️ using React & Tailwind CSS</p>
            </div>
        </footer>
    );
}