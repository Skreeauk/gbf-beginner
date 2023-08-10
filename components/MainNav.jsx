"use client"

import { useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/Icons"
import { MobileNav } from "@/components/MobileNav"
import Image from "next/image"

export function MainNav({ items, children }) {
    const [showMobileMenu, setShowMobileMenu] =
        useState(false)

    return (
        <div className="flex gap-6 md:gap-10">
            <Link
                href="/"
                className="hidden md:block"
            >
                <Image
                    src="/logo.png"
                    width={48}
                    height={48}
                    alt="GBF - Beginner"
                />
            </Link>
            {items?.length ? (
                <nav className="hidden gap-6 md:flex">
                    {items?.map((item, index) => (
                        <Link
                            key={index}
                            href={
                                item.disabled
                                    ? "#"
                                    : item.href
                            }
                            className={cn(
                                "flex items-center text-lg text-foreground font-medium transition-colors hover:text-foreground/80 sm:text-sm  relative after:absolute after:bg-foreground after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300",
                                item.disabled &&
                                    "cursor-not-allowed opacity-80"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            ) : null}
            <button
                className="flex items-center space-x-2 md:hidden text-foreground"
                onClick={() =>
                    setShowMobileMenu(!showMobileMenu)
                }
            >
                {showMobileMenu ? (
                    <Icons.close />
                ) : (
                    <Icons.logo />
                )}
            </button>
            {showMobileMenu && items && (
                <MobileNav
                    items={items}
                    setShowMobileMenu={setShowMobileMenu}
                >
                    {children}
                </MobileNav>
            )}
        </div>
    )
}
