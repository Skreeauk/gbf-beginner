"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"

export function ThemeButton() {
    const { resolvedTheme, setTheme } = useTheme()

    const [mounted, setMount] = useState(false)

    useEffect(() => {
        setMount(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <Button
            variant="outline"
            size="icon"
            className="p-2 hover:bg-foreground/70 bg-foreground"
            onClick={() =>
                setTheme(
                    resolvedTheme === "dark"
                        ? "light"
                        : "dark"
                )
            }
        >
            {resolvedTheme === "dark" ? (
                <SunIcon className="h-4 w-4 text-secondary" />
            ) : (
                <MoonIcon className="h-4 w-4 text-secondary" />
            )}
        </Button>
    )
}
