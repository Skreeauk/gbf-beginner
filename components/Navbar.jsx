import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="relative">
      <div className="bg-gray-900 pt-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">Logo Text</span>
                <Image
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg"
                  alt=""
                  width={10}
                  height={10}
                />
              </a>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              <a
                href="#"
                className="text-base font-medium text-white hover:text-gray-300 relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
              >
                Product
              </a>
              <a
                href="#"
                className="text-base font-medium text-white hover:text-gray-300 relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
              >
                Features
              </a>
              <a
                href="#"
                className="text-base font-medium text-white hover:text-gray-300 relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="text-base font-medium text-white hover:text-gray-300 relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
              >
                Company
              </a>
            </div>
          </div>
          <div className="md:flex md:items-center md:space-x-6">
            {/* <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"> Log in </a> */}
            <Button
              asChild
              className="inline-flex items-center border border-transparent bg-gray-600 hover:bg-gray-700 hover:scale-110 transition-transform ease-in-out duration-200"
            >
              <Link href="/login">Log In</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
