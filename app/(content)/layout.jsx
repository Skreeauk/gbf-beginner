import Navbar from "@/components/Navbar"

export default function ContentLayout({ children }) {
    return (
        <div className="flex-1 flex flex-col bg-gray-950">
            <Navbar />
            {children}
        </div>
    )
}
