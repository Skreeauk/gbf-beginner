import Link from "next/link"
import Image from "next/image"

export default function ResourcePage() {
    return (
        <main className="flex-1 flex flex-col gap-32 text-secondary">
            <div className="flex-1 flex px-0 md:px-4 mt-8 md:mt-16 mb-8">
                {/* Mobile */}
                <div className="scrollbar-hide flex lg:hidden w-full snap-x snap-mandatory scroll-px-10 gap-10 overflow-x-scroll scroll-smooth px-10">
                    <Link
                        href="https://gbf.wiki/"
                        target="_blank"
                        className="relative aspect-[2/3] w-[95%] shrink-0 snap-start snap-always rounded-xl"
                    >
                        <Image
                            src="/images/tiger_skin.png"
                            height="0"
                            width="0"
                            quality={100}
                            sizes="100vw"
                            alt="tiger skin"
                            className="h-full w-full rounded-xl object-cover"
                        />
                        <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                            <h2 className="mt-4 text-xl font-bold text-white">
                                GBF Wiki
                            </h2>
                            <p className="text-sm text-white/50">
                                Just your average wiki
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="https://discord.gg/granbluefantasy"
                        target="_blank"
                        className="relative aspect-[2/3] w-[95%] shrink-0 snap-start snap-always rounded-xl"
                    >
                        <Image
                            src="/images/catura_skin.png"
                            height="0"
                            width="0"
                            quality={100}
                            sizes="100vw"
                            alt="catura skin"
                            className="h-full w-full rounded-xl object-cover"
                        />
                        <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                            <h2 className="mt-4 text-xl font-bold text-white">
                                Granblue Fantasy
                                International
                            </h2>
                            <p className="text-sm text-white/50">
                                A Discord Server
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="https://discord.gg/weEbECe"
                        target="_blank"
                        className="relative aspect-[2/3] w-[95%] shrink-0 snap-start snap-always rounded-xl"
                    >
                        <Image
                            src="/images/andira_skin.png"
                            height="0"
                            width="0"
                            quality={100}
                            sizes="100vw"
                            alt="andira skin"
                            className="h-full w-full rounded-xl object-cover"
                        />
                        <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                            <h2 className="mt-4 text-xl font-bold text-white">
                                Granblue Fantasy Gaijin
                            </h2>
                            <p className="text-sm text-white/50">
                                A Discord Server
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="#"
                        className="relative aspect-[2/3] w-[95%] shrink-0 snap-start snap-always rounded-xl"
                    >
                        <Image
                            src="/images/fediel_skin.png"
                            height="0"
                            width="0"
                            quality={100}
                            sizes="100vw"
                            alt="fediel skin"
                            className="h-full w-full rounded-xl object-cover object-[30%_center]"
                        />
                        <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                            <h2 className="mt-4 text-xl font-bold text-white">
                                /gbfg/
                            </h2>
                            <p className="text-sm text-white/50">
                                A Discord Server
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="#"
                        className="relative aspect-[2/3] w-[95%] shrink-0 snap-start snap-always rounded-xl"
                    >
                        <Image
                            src="/images/vicky_skin.png"
                            height="0"
                            width="0"
                            quality={100}
                            sizes="100vw"
                            alt="vicky skin"
                            className="h-full w-full rounded-xl object-cover"
                        />
                        <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                            <h2 className="mt-4 text-xl font-bold text-white">
                                it&apos;s Usagi Flap Fantasy
                                not gb fantasy-Havarti
                                Cheese Mk 2.0 Edition
                            </h2>
                            <p className="text-sm text-white/50">
                                A Discord Server
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Desktop */}
                <div className="flex-1 w-full hidden lg:flex flex-row items-center justify-evenly">
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="flex flex-row h-full w-full items-center justify-center gap-4">
                            <Link
                                href="https://gbf.wiki/"
                                target="_blank"
                                className="h-full flex-1 flex items-end hover:basis-8/12 hover:grow-[0.001] overflow-hidden transition-all duration-500 ease-in-out rounded-lg group bg-[url('/images/tiger_skin.png')] bg-auto bg-no-repeat bg-center"
                            >
                                <div className="hidden group-hover:flex flex-col gap-2 whitespace-nowrap flex-nowrap transition-all ease-in-out p-4 w-full bg-gradient-to-b from-transparent to-transparent/60">
                                    <span className="text-white text-2xl">
                                        GBF Wiki
                                    </span>
                                    <span className="text-white/90 text-xl">
                                        Just your average
                                        wiki
                                    </span>
                                </div>
                            </Link>
                            <Link
                                href="https://discord.gg/granbluefantasy"
                                target="_blank"
                                className="h-full flex-1 flex items-end hover:basis-8/12 hover:grow-[0.001] overflow-hidden transition-all duration-500 ease-in-out rounded-lg group bg-[url('/images/catura_skin.png')] bg-auto bg-center bg-no-repeat"
                            >
                                <div className="hidden group-hover:flex group-hover:flex-col gap-2 whitespace-nowrap flex-nowrap transition-all ease-in-out p-4 w-full bg-gradient-to-b from-transparent to-transparent/60">
                                    <span className="text-white text-2xl">
                                        Granblue Fantasy
                                        International
                                    </span>
                                    <span className="text-white/90 text-xl">
                                        A Discord Server
                                    </span>
                                </div>
                            </Link>
                            <Link
                                href="https://discord.gg/weEbECe"
                                target="_blank"
                                className="h-full flex-1 flex items-end hover:basis-8/12 hover:grow-[0.001] overflow-hidden transition-all duration-500 ease-in-out rounded-lg group bg-[url('/images/andira_skin.png')] bg-auto bg-no-repeat bg-center"
                            >
                                <div className="hidden group-hover:flex group-hover:flex-col gap-2 whitespace-nowrap flex-nowrap p-4 w-full bg-gradient-to-b from-transparent to-transparent/60">
                                    <span className="text-white text-2xl">
                                        Granblue Fantasy
                                        Gaijin
                                    </span>
                                    <span className="text-white/90 text-xl">
                                        A Discord Server
                                    </span>
                                </div>
                            </Link>
                            <Link
                                href="#"
                                className="h-full flex-1 flex items-end hover:basis-8/12 hover:grow-[0.001] overflow-hidden transition-all duration-500 ease-in-out rounded-lg group bg-[url('/images/fediel_skin.png')] bg-auto bg-no-repeat bg-center"
                            >
                                <div className="hidden group-hover:flex group-hover:flex-col gap-2 whitespace-nowrap flex-nowrap p-4 w-full bg-gradient-to-b from-transparent to-transparent/60">
                                    <span className="text-white text-2xl">
                                        /gbfg/
                                    </span>
                                    <span className="text-white/90 text-xl">
                                        A Discord Server
                                    </span>
                                </div>
                            </Link>
                            <Link
                                href="#"
                                className="h-full flex-1 flex items-end hover:basis-8/12 hover:grow-[0.001] overflow-hidden transition-all duration-500 ease-in-out rounded-lg group bg-[url('/images/vicky_skin.png')] bg-auto bg-no-repeat bg-center"
                            >
                                <div className="hidden group-hover:flex group-hover:flex-col gap-2 whitespace-nowrap flex-nowrap p-4 w-full bg-gradient-to-b from-transparent to-transparent/60">
                                    <span className="text-white text-2xl">
                                        it&apos;s Usagi Flap
                                        Fantasy not gb
                                        fantasy-Havarti
                                        Cheese Mk 2.0
                                        Edition
                                    </span>
                                    <span className="text-white/90 text-xl">
                                        A Discord Server
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
