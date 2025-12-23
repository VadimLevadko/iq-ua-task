interface ISectionProps {
    title: string;
    description: string;
}

export default function SectionError({ title, description }: ISectionProps) {
    return (
        <div
            className="error-wrapper w-full bg-red-100 border border-red-300 text-red-700 p-4 rounded-lg flex flex-col items-center justify-center gap-2 text-center">
            <p className="text-4xl">⚠️</p>
            <p className="text-lg font-semibold">{title}</p>
            <p className="text-sm text-red-600">{description}</p>
        </div>
    )
}