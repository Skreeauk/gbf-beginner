"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body"

import { GuideSidebarNav } from "@/components/Guide/GuideSidebarNav"

export function MobileNav({
    items,
    showMobileMenu,
    setShowMobileMenu,
    children,
}) {
    useLockBody()

    return (
        <div
            className={cn(
                "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
            )}
        >
            <div className="relative z-20 grid gap-6 rounded-md bg-accent p-4 text-foreground shadow-md">
                <nav className="grid grid-flow-row auto-rows-max text-sm">
                    {items.mainNav.map((item, index) => (
                        <Link
                            key={index}
                            href={
                                item.disabled
                                    ? "#"
                                    : item.href
                            }
                            className={cn(
                                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                                item.disabled &&
                                    "cursor-not-allowed opacity-60"
                            )}
                            onClick={() => {
                                setShowMobileMenu(false)
                            }}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
                <GuideSidebarNav
                    items={items.sidebarNav}
                    showMobileMenu={showMobileMenu}
                    setShowMobileMenu={setShowMobileMenu}
                />
            </div>
        </div>
    )
}
