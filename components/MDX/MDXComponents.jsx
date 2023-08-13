import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useMDXComponent } from "next-contentlayer/hooks"

import { cn } from "@/lib/utils"

import { Callout } from "./MDXCallout"
import { MDXCard } from "./MDXCard"
import { Hover } from "./MDXHover"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const components = {
    h1: ({ className, ...props }) => (
        <h1
            className={cn(
                "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h2: ({ className, ...props }) => (
        <h2
            className={cn(
                "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
                className
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }) => (
        <h3
            className={cn(
                "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h4: ({ className, ...props }) => (
        <h4
            className={cn(
                "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h5: ({ className, ...props }) => (
        <h5
            className={cn(
                "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h6: ({ className, ...props }) => (
        <h6
            className={cn(
                "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    a: ({ className, ...props }) => (
        <Link
            className={cn(
                "font-medium text-primary underline underline-offset-4",
                className
            )}
            {...props}
        />
    ),
    p: ({ className, ...props }) => (
        <p
            className={cn(
                "leading-7 [&:not(:first-child)]:mt-6",
                className
            )}
            {...props}
        />
    ),
    ul: ({ className, ...props }) => (
        <ul
            className={cn("my-6 ml-6 list-disc", className)}
            {...props}
        />
    ),
    ol: ({ className, ...props }) => (
        <ol
            className={cn(
                "my-6 ml-6 list-decimal",
                className
            )}
            {...props}
        />
    ),
    li: ({ className, ...props }) => (
        <li
            className={cn("mt-2", className)}
            {...props}
        />
    ),
    blockquote: ({ className, ...props }) => (
        <blockquote
            className={cn(
                "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
                className
            )}
            {...props}
        />
    ),
    img: ({ className, alt, ...props }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            className={cn("rounded-md border", className)}
            alt={alt}
            {...props}
        />
    ),
    hr: ({ ...props }) => (
        <hr
            className="my-4 md:my-8"
            {...props}
        />
    ),
    table: ({ className, ...props }) => (
        <div className="my-6 w-full overflow-y-auto">
            <table
                className={cn("w-full", className)}
                {...props}
            />
        </div>
    ),
    tr: ({ className, ...props }) => (
        <tr
            className={cn(
                "m-0 border-t p-0 even:bg-muted",
                className
            )}
            {...props}
        />
    ),
    th: ({ className, ...props }) => (
        <th
            className={cn(
                "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                className
            )}
            {...props}
        />
    ),
    td: ({ className, ...props }) => (
        <td
            className={cn(
                "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                className
            )}
            {...props}
        />
    ),
    pre: ({ className, ...props }) => (
        <pre
            className={cn(
                "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
                className
            )}
            {...props}
        />
    ),
    code: ({ className, ...props }) => (
        <code
            className={cn(
                "relative rounded border px-[0.3rem] py-[0.2rem] font-mono",
                className
            )}
            {...props}
        />
    ),
    Tabs: ({ className, ...props }) => (
        <Tabs
            className={cn(
                "relative mt-6 w-full",
                className
            )}
            {...props}
        />
    ),
    TabsList: ({ className, ...props }) => (
        <TabsList
            className={cn(
                "w-full justify-start rounded-none border-b bg-transparent p-0",
                className
            )}
            {...props}
        />
    ),
    TabsTrigger: ({ className, ...props }) => (
        <TabsTrigger
            className={cn(
                "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",
                className
            )}
            {...props}
        />
    ),
    TabsContent: ({ className, ...props }) => (
        <TabsContent
            className={cn(
                "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
                className
            )}
            {...props}
        />
    ),
    Image: ({ className, alt, ...props }) => (
        <Image
            className={className}
            alt={alt}
            {...props}
        />
    ),
    Youtube: ({ id }) => (
        <iframe
            className="w-full h-full p-0 aspect-video"
            src={"https://www.youtube.com/embed/" + id}
            frameBorder={0}
            allow="accelerometer; clipboard-write; encrypted-mediaa: gyroscope, picture-in-picture"
            allowFullScreen
            title="Youtube Video"
        />
    ),
    Steps: ({ ...props }) => (
        <div
            className="[&>h3]:step steps mb-12 ml-4 [counter-reset:step]"
            {...props}
        />
    ),
    Step: ({
        className,
        auto,
        txt,
        last,
        children,
        ...props
    }) => (
        <div className="flex flex-col">
            <div className="flex flex-row items-center font-heading scroll-m-20 text-lg font-semibold tracking-tight">
                <h3 className="before:bg-gray-500 before:h-9 before:inline-flex before:w-9 before:items-center before:justify-center before:rounded-full [counter-increment:step] pr-6 before:[content:counters(step,'.')]" />
                <h3
                    className={className}
                    {...props}
                >
                    {txt}
                </h3>
            </div>
            <div
                className={cn(
                    "ml-4 my-3 h-10 pl-11",
                    !last && "border-l",
                    auto && "h-auto"
                )}
            >
                {children}
            </div>
        </div>
    ),
    Callout,
    Hover,
    Card: MDXCard,
}

export function MDX({ code }) {
    const Component = useMDXComponent(code)

    return (
        <div className="mdx">
            <Component components={components} />
        </div>
    )
}
