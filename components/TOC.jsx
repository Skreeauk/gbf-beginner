"use client"

import { useState, useEffect, useMemo } from "react"

import { cn } from "@/lib/utils"
import { useMounted } from "@/hooks/use-mounted"

export function TableOfContents({ toc }) {
    const itemIds = useMemo(
        () =>
            toc.items
                ? toc.items
                      .flatMap((item) => [
                          item.url,
                          item?.items?.map(
                              (item) => item.url
                          ),
                      ])
                      .flat()
                      .filter(Boolean)
                      .map((id) => id?.split("#")[1])
                : [],
        [toc]
    )
    const activeHeading = useActiveItem(itemIds)
    const mounted = useMounted()

    if (!toc?.items) {
        return null
    }

    return mounted ? (
        <div className="space-y-2">
            <p className="font-medium text-secondary">
                On This Page
            </p>
            <Tree
                tree={toc}
                activeItem={activeHeading}
            />
        </div>
    ) : null
}

function useActiveItem(itemIds) {
    const [activeId, setActiveId] = useState("")

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: `0% 0% -80% 0%` }
        )

        itemIds?.forEach((id) => {
            if (!id) {
                return
            }

            const element = document.getElementById(id)
            if (element) {
                observer.observe(element)
            }
        })

        return () => {
            itemIds?.forEach((id) => {
                if (!id) {
                    return
                }

                const element = document.getElementById(id)
                if (element) {
                    observer.unobserve(element)
                }
            })
        }
    }, [itemIds])

    return activeId
}

function Tree({ tree, level = 1, activeItem }) {
    return tree?.items?.length && level < 3 ? (
        <ul
            className={cn("m-0 list-none", {
                "pl-4": level !== 1,
            })}
        >
            {tree.items.map((item, index) => {
                return (
                    <li
                        key={index}
                        className={cn("mt-0 pt-2")}
                    >
                        <a
                            href={item.url}
                            className={cn(
                                "inline-block no-underline hover:text-secondary",
                                item.url ===
                                    `#${activeItem}`
                                    ? "font-medium text-secondary"
                                    : "text-sm text-secondary/60"
                            )}
                        >
                            {item.title}
                        </a>
                        {item.items?.length ? (
                            <Tree
                                tree={item}
                                level={level + 1}
                                activeItem={activeItem}
                            />
                        ) : null}
                    </li>
                )
            })}
        </ul>
    ) : null
}
