import { mainConfig } from "@/config/main"
import { MainNav } from "@/components/MainNav"
import { Search } from "@/components/Search"
import { GuideSidebarNav } from "@/components/Guide/GuideSidebarNav"

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 w-full bg-gray-950">
            <div className="container flex gap-6 sm:gap-0 h-16 items-center space-x-4 justify-between sm:space-x-0">
                <MainNav items={mainConfig.mainNav}>
                    <GuideSidebarNav
                        items={mainConfig.sidebarNav}
                    />
                </MainNav>
                <div className="flex flex-1 items-center space-x-4 sm:justify-end">
                    <div className="flex-1 sm:grow-0">
                        <Search />
                    </div>
                </div>
            </div>
        </header>
    )
}
