import { notFound } from "next/navigation"
import { allGuides } from "contentlayer/generated"

import { getTableOfContents } from "@/lib/toc"
import { MDX } from "@/components/MDX/MDXComponents"
import { GuidePageHeader } from "@/components/Guide/GuidePageHeader"
import { GuidePager } from "@/components/Guide/GuidePager"
import { TableOfContents } from "@/components/TOC"

import "@/css/mdx.css"

async function getGuideFromParams(params) {
    const slug = params.slug?.join("/") || ""

    const guide = allGuides.find(
        (guide) => guide.slugAsParams === slug
    )

    if (!guide) {
        null
    }

    return guide
}

export async function generateMetadata({ params }) {
    const guide = await getGuideFromParams(params)

    if (!guide) {
        return {}
    }

    return {
        title: guide.title,
        description: guide.description,
    }
}

export async function generateStaticParams() {
    return allGuides.map((guide) => ({
        slug: guide._raw.flattenedPath.split("/"),
    }))
}

export default async function DocPage({ params }) {
    const guide = await getGuideFromParams(params)

    if (!guide) {
        notFound()
    }

    const toc = await getTableOfContents(guide.body.raw)

    return (
        <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
            <div className="mx-auto w-full min-w-0 text-foreground">
                <GuidePageHeader
                    heading={guide.title}
                    text={guide.description}
                />
                <MDX code={guide.body.code} />
                <hr className="my-4 md:my-6" />
                <GuidePager guide={guide} />
            </div>
            <div className="hidden text-sm xl:block">
                <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
                    <TableOfContents toc={toc} />
                </div>
            </div>
        </main>
    )
}
