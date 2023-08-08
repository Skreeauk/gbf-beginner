import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
    return (
        <main className="flex-1 flex bg-gray-950">
            <div className="grid grid-cols-3 text-white justify-items-center flex-1">
                <div className="grayscale hover:grayscale-0 hover:transition-all hover:ease-in-out hover:duration-700 h-full w-full bg-[url('/images/seox_bg.png')] bg-cover 2xl:bg-auto bg-no-repeat bg-center"></div>
                <div className="z-10 h-full w-full shadow-[0_25px_180px_180px_rgba(0,0,0,0.8)] 2xl:shadow-[0_25px_150px_220px_rgba(0,0,0,0.8)] 2xl:shadow-gray-950 shadow-gray-950 flex flex-col items-center justify-center gap-4">
                    <span className="text-4xl">
                        Welcome to
                    </span>
                    <Image
                        className=""
                        src="/images/title.png"
                        width={800}
                        height={450}
                        alt="Granblue Fantasy"
                    />
                    <Button
                        className="py-6 px-6 bg-gray-500"
                        asChild
                    >
                        <Link href="#">
                            <span className="text-xl">
                                Continue
                            </span>
                        </Link>
                    </Button>
                </div>
                <div className="grayscale hover:grayscale-0 hover:transition-all hover:ease-in-out hover:duration-700 h-full w-full bg-[url('/images/nier_gbvs_tall.png')] bg-cover bg-no-repeat bg-center"></div>
            </div>
        </main>
    )
}
