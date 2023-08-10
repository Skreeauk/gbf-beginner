import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import MovingDiv from "./components/MovingDiv"

export default function HomePage() {
    return (
        <main className="flex-1 flex flex-col gap-32 text-foreground">
            <div className="h-[70vh] px-4 py-2 flex flex-row mt-16">
                <MovingDiv className="flex-1 flex flex-row">
                    <div className="basis-1/3">
                        <div className="flex flex-col items-center justify-center text-center gap-24 h-full w-full">
                            <span className="text-4xl">
                                What is Granblue Fantasy?
                            </span>
                            <div className="flex flex-col gap-4 text-lg">
                                <span className="">
                                    Granblue Fantasy (GBF)
                                    is a turn-based mobile
                                    gacha game with
                                    multiplayer elements.
                                </span>
                                <span>
                                    GBF is well known to be
                                    generous in terms of
                                    resources however it
                                    also has a steep
                                    learning curve. This is
                                    where the website is
                                    designed to guide you.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-[url('/images/jeanne_skin.png')] bg-auto bg-no-repeat bg-center">
                        <div className="h-full w-full flex items-center justify-start bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent from-30% via-background via-70% to-background to-100%"></div>
                    </div>
                </MovingDiv>
            </div>
            <div className="h-[70vh] px-4 py-2 flex flex-row">
                <MovingDiv className="flex-1 flex flex-row gap-4">
                    <div className="flex-1 bg-[url('/images/fraux_skin.png')] bg-auto bg-no-repeat bg-center">
                        <div className="h-full w-full flex items-center justify-start bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent from-30% via-background via-70% to-background to-100%"></div>
                    </div>
                    <div className="basis-1/3">
                        <div className="flex flex-col items-center justify-center text-center gap-24 h-full w-full pr-4">
                            <span className="text-4xl">
                                Why Us?
                            </span>
                            <div className="flex flex-col gap-4 text-lg">
                                <span className="">
                                    There are other beginner
                                    guides available out
                                    there however
                                    they&apos;re mostly in
                                    Google Docs and it is
                                    full of content and
                                    makes it difficult to
                                    read
                                </span>
                                <span>
                                    Our tutorial/guide aims
                                    to be easy to read and
                                    understand as well as
                                    providing the guide in a
                                    structured way that
                                    Google Docs
                                    wouldn&apos;t be able to
                                    offer
                                </span>
                            </div>
                        </div>
                    </div>
                </MovingDiv>
            </div>
            <div className="h-[50vh] flex items-center justify-center">
                <MovingDiv className="w-1/2 flex flex-col items-center justify-center gap-6">
                    <span className="text-4xl">FAQ</span>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-xl">
                                Does the game have a English
                                server?
                            </AccordionTrigger>
                            <AccordionContent className="text-lg">
                                No. The game only has
                                Japanese server. GBF is
                                mainly for Japanese with a
                                dedicated English UI by
                                Cygames themselves.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-xl">
                                GBF is an old game. How long
                                do I need to catch up?
                            </AccordionTrigger>
                            <AccordionContent className="text-lg">
                                GBF is unique in a way that
                                you technically can farm
                                24/7. You can farm the
                                resouces such that it
                                becomes a net positive and
                                that allows you to keep
                                farming other content.{" "}
                                <br />
                                <br />
                                So it depends on how hard
                                you grind.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-xl">
                                Do I need to reroll?
                            </AccordionTrigger>
                            <AccordionContent className="text-lg">
                                It depends on your mindset.
                                If you&apos;re just in this
                                for the waifu PNGs, then you
                                can just consider to reroll
                                for the waifu at most.
                                <br />
                                <br />
                                If you want to be
                                competitive , it is
                                recommended to reroll to get
                                premium assets that is
                                widely used until end-game.
                                New players are given 100+
                                rolls for starting and a
                                starter banner is available
                                with 6% SSR rate.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-xl">
                                Is the game grindy?
                            </AccordionTrigger>
                            <AccordionContent className="text-lg">
                                GBF is a really grindy game.
                                The more time spent in the
                                game, the more rewards you
                                get.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </MovingDiv>
            </div>
        </main>
    )
}
