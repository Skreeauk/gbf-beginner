import Logos from "./components/Logos"

export default function AboutPage() {
    return (
        <main className="flex-1 flex flex-col gap-32 text-foreground">
            <div className="flex-1 px-4 py-2 flex flex-row mt-16">
                <div className="flex-1 flex items-center flex-col gap-12">
                    <span className="text-5xl">
                        About GBF Beginner
                    </span>
                    <span className="text-2xl text-center mx-28">
                        This is a personal project for
                        learning and then thought that GBF
                        doesn&apos;t have a proper
                        documentation for beginners.
                    </span>
                    <span className="text-2xl">
                        Built with
                    </span>
                    <Logos />
                </div>
            </div>
        </main>
    )
}
