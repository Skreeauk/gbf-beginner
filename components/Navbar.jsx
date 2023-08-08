import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return (
        <header className="h-[7.5vh]">
            <div className="h-full">
                <nav
                    className="h-full flex items-center justify-center px-4 sm:px-14"
                    aria-label="Global"
                >
                    <div className="flex items-center">
                        <div className="hidden gap-14 md:flex md:ml-10">
                            <a
                                href="/home"
                                className="text-base font-medium text-white hover:text-gray-300 relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                            >
                                Home
                            </a>
                            <a
                                href="/tutorial"
                                className="text-base font-medium text-white hover:text-gray-300 relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                            >
                                Tutorial
                            </a>
                            <a
                                href="/resources"
                                className="text-base font-medium text-white hover:text-gray-300 relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                            >
                                Resources
                            </a>
                            <a
                                href="/about"
                                className="text-base font-medium text-white hover:text-gray-300 relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                            >
                                About
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
