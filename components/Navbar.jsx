import { mainConfig } from "@/config/main"
import { MainNav } from "@/components/MainNav"
import { Search } from "@/components/search"
import { DocsSidebarNav } from "@/components/DocsSideNav"

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 w-full bg-gray-950">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <MainNav
                    items={mainConfig.mainNav}
                ></MainNav>
                <div className="flex flex-1 items-center space-x-4 sm:justify-end">
                    <div className="flex-1 sm:grow-0">
                        <Search />
                    </div>
                </div>
            </div>
        </header>
    )
}
