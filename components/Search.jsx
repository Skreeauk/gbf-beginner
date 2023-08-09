"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
// import { toast } from "@/components/ui/use-toast"

export function Search({ className, ...props }) {
    function onSubmit(event) {
        event.preventDefault()

        // return toast({
        //   title: "Not implemented",
        //   description: "We're still working on the search.",
        // })
    }

    return (
        <form
            onSubmit={onSubmit}
            className={cn("relative w-full", className)}
            {...props}
        >
            <Input
                type="search"
                placeholder="Search..."
                className="h-8 w-full text-secondary sm:w-64 sm:pr-12"
            />
        </form>
    )
}
