import { notFound } from "next/navigation"
import { allGuides } from "contentlayer/generated"

import { getTableOfContents } from "@/lib/toc"
import { MDX } from "@/components/MDXComponents"
import { DocsPageHeader } from "@/components/DocsPageHeader"
import { DocsPager } from "@/components/DocsPager"
import { DashboardTableOfContents } from "@/components/TOC"

import "@/css/mdx.css"

import { absoluteUrl } from "@/lib/utils"

async function getDocFromParams(params) {
    const slug = params.slug?.join("/") || ""

    const doc = allGuides.find(
        (doc) => doc._raw.flattenedPath === slug
    )

    if (!doc) {
        null
    }

    return doc
}

export async function generateMetadata({ params }) {
    const doc = await getDocFromParams(params)

    if (!doc) {
        return {}
    }

    // const url =
    //     process.env.NODE_ENV === "development"
    //         ? "http://localhost:3000"
    //         : "https://gbf-beginner.vercel.app/"

    // const ogUrl = new URL(`${url}/api/og`)
    // ogUrl.searchParams.set(
    //     "heading",
    //     doc.description ?? doc.title
    // )
    // ogUrl.searchParams.set("type", "Documentation")
    // ogUrl.searchParams.set("mode", "dark")

    return {
        title: doc.title,
        description: doc.description,
    }
}

export async function generateStaticParams() {
    return allGuides.map((doc) => ({
        slug: doc._raw.flattenedPath.split("/"),
    }))
}

export default async function DocPage({ params }) {
    const doc = await getDocFromParams(params)

    if (!doc) {
        notFound()
    }

    const toc = await getTableOfContents(doc.body.raw)

    return (
        <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
            <div className="mx-auto w-full min-w-0 text-secondary">
                <DocsPageHeader
                    heading={doc.title}
                    text={doc.description}
                />
                <MDX code={doc.body.code} />
                <hr className="my-4 md:my-6" />
                <DocsPager doc={doc} />
            </div>
            <div className="hidden text-sm xl:block">
                <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
                    <DashboardTableOfContents toc={toc} />
                </div>
            </div>
        </main>
    )
}
