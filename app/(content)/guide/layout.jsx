import { mainConfig } from "@/config/main"
import { GuideSidebarNav } from "@/components/Guide/GuideSidebarNav"

import { ScrollArea } from "@/components/ui/scroll-area"

export default function DocsLayout({ children }) {
    return (
        <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
            <aside className="fixed scrollbar-hide top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
                <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
                    <GuideSidebarNav
                        items={mainConfig.sidebarNav}
                    />
                </ScrollArea>
            </aside>

            {children}
        </div>
    )
}
