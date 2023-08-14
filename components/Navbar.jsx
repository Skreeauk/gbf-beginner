import { mainConfig } from "@/config/main"
import { MainNav } from "@/components/MainNav"
import { Search } from "@/components/Search"
import { ThemeButton } from "@/components/ThemeButton"

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 w-full bg-background pt-2">
            <div className="container flex gap-6 sm:gap-0 h-16 items-center space-x-4 justify-between sm:space-x-0">
                <MainNav items={mainConfig}></MainNav>
                <div className="flex flex-1 items-center space-x-4 sm:justify-end">
                    <div className="flex-1 flex gap-6 sm:grow-0">
                        <ThemeButton />
                        <Search />
                    </div>
                </div>
            </div>
        </header>
    )
}
