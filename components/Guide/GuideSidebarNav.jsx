"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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

export function SidebarNavItems({ items, pathname, deep }) {
    return items?.length ? (
        <div
            className={cn(
                "grid grid-flow-row auto-rows-max text-sm text-secondary/70 border-l border-secondary/30 ml-3",
                deep && "ml-5"
            )}
        >
            {items.map((item, index) =>
                !item.disabled && item.href ? (
                    <Link
                        key={index}
                        href={item.href}
                        className={cn(
                            "flex w-full items-center p-2 pl-4 hover:underline hover:text-secondary hover:border-l hover:border-secondary",
                            {
                                "text-primary border-l border-primary":
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
                ) : item.items ? (
                    <Accordion
                        key={index}
                        type="single"
                        collapsible
                    >
                        <AccordionItem
                            value="item-1"
                            className="border-none"
                        >
                            <AccordionTrigger className="py-0 text-start">
                                <span
                                    className={cn(
                                        "flex w-full items-center p-2 pl-4 hover:border-l hover:border-secondary"
                                    )}
                                >
                                    {item.title}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent>
                                <SidebarNavItems
                                    items={item.items}
                                    pathname={pathname}
                                    deep={true}
                                />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ) : (
                    <span
                        key={index}
                        className="flex w-full cursor-not-allowed items-center rounded-md p-2 pl-4 opacity-60"
                    >
                        {item.title}
                    </span>
                )
            )}
        </div>
    ) : null
}
