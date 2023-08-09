"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function GuideSidebarNav({ items }) {
    const pathname = usePathname()

    return items.length ? (
        <div className="w-full">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn("pb-8")}
                >
                    <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium text-secondary">
                        {item.title}
                    </h4>
                    {item.items ? (
                        <SidebarNavItems
                            items={item.items}
                            pathname={pathname}
                        />
                    ) : null}
                </div>
            ))}
        </div>
    ) : null
}

export function SidebarNavItems({ items, pathname }) {
    return items?.length ? (
        <div className="grid grid-flow-row auto-rows-max text-sm text-secondary pl-4 border-l border-secondary/80 ml-2">
            {items.map((item, index) =>
                !item.disabled && item.href ? (
                    <Link
                        key={index}
                        href={item.href}
                        className={cn(
                            "flex w-full items-center rounded-md p-2 hover:underline hover:text-black hover:bg-secondary/80",
                            {
                                "bg-secondary/70 text-black hover:text-black":
                                    pathname === item.href,
                            }
                        )}
                        target={
                            item.external ? "_blank" : ""
                        }
                        rel={
                            item.external
                                ? "noreferrer"
                                : ""
                        }
                    >
                        {item.title}
                    </Link>
                ) : (
                    <span
                        key={index + "-" + index}
                        className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60"
                    >
                        {item.title}
                    </span>
                )
            )}
        </div>
    ) : null
}
