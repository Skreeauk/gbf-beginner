import Link from "next/link"

import { mainConfig } from "@/config/main"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/Icons"

export function GuidePager({ guide }) {
    const pager = getPagerForGuide(guide)

    if (!pager) {
        return null
    }

    return (
        <div className="flex flex-row items-center justify-between">
            {pager?.prev && (
                <Link
                    href={pager.prev.href}
                    className={cn(
                        buttonVariants({
                            variant: "ghost",
                        }),
                        "hover:text-primary hover:bg-transparent"
                    )}
                >
                    <Icons.chevronLeft className="mr-2 h-4 w-4" />
                    {pager.prev.title}
                </Link>
            )}
            {pager?.next && (
                <Link
                    href={pager.next.href}
                    className={cn(
                        buttonVariants({
                            variant: "ghost",
                        }),
                        "ml-auto hover:text-primary hover:bg-transparent text-end"
                    )}
                >
                    {pager.next.title}
                    <Icons.chevronRight className="ml-2 h-4 w-4" />
                </Link>
            )}
        </div>
    )
}

export function getPagerForGuide(guide) {
    const flattenedLinks = [
        null,
        ...flatten(mainConfig.sidebarNav),
        null,
    ]
    const activeIndex = flattenedLinks.findIndex(
        (link) => guide.slug === link?.href
    )

    const prev =
        activeIndex !== 0
            ? flattenedLinks[activeIndex - 1]
            : null
    const next =
        activeIndex !== flattenedLinks.length - 1
            ? flattenedLinks[activeIndex + 1]
            : null
    return {
        prev,
        next,
    }
}

export function flatten(links) {
    return links.reduce((flat, link) => {
        return flat.concat(
            link.items ? flatten(link.items) : link
        )
    }, [])
}
