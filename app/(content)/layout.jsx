import Navbar from "@/components/Navbar"

export default function ContentLayout({ children }) {
    return (
        <div className="container flex-1 flex flex-col">
            <Navbar />
            {children}
        </div>
    )
}
