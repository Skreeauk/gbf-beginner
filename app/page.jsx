import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
    return (
        <main className="flex-1 flex bg-foreground dark:bg-background">
            <div className="md:bg-none grid md:grid-cols-3 text-secondary dark:text-foreground justify-items-center flex-1">
                <div className="hidden md:block grayscale hover:grayscale-0 hover:transition-all hover:ease-in-out hover:duration-700 h-full w-full bg-[url('/images/seox_bg.png')] bg-cover 2xl:bg-auto bg-no-repeat bg-center"></div>
                <div className="z-10 h-full w-full shadow-[0_25px_180px_180px_rgba(0,0,0,0.8)] 2xl:shadow-[0_25px_150px_220px_rgba(0,0,0,0.8)] 2xl:shadow-foreground dark:2xl:shadow-background shadow-foreground dark:shadow-background flex flex-col items-center justify-center gap-4">
                    <span className="text-4xl text-center">
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
                        className="py-6 px-6 bg-primary/20 hover:bg-primary/30 border border-border"
                        asChild
                    >
                        <Link href="/home">
                            <span className="text-xl text-secondary dark:text-foreground">
                                Continue
                            </span>
                        </Link>
                    </Button>
                </div>
                <div className="hidden md:block grayscale hover:grayscale-0 hover:transition-all hover:ease-in-out hover:duration-700 h-full w-full bg-[url('/images/nier_gbvs_tall.png')] bg-cover bg-no-repeat bg-center"></div>
            </div>
        </main>
    )
}
