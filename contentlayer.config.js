import {
    defineDocumentType,
    makeSource,
} from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: "string",
        resolve: (guide) => `/${guide._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: "string",
        resolve: (guide) =>
            guide._raw.flattenedPath
                .split("/")
                .slice(2)
                .join("/"),
    },
}

export const Guide = defineDocumentType(() => ({
    name: "Guide",
    filePathPattern: `./guide/**/*.mdx`,
    contentType: "mdx",
    fields: {
        uniqueSlug: {
            type: "string",
            required: true,
        },
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
        },
    },
    computedFields,
}))

export default makeSource({
    contentDirPath: "./content",
    documentTypes: [Guide],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: "github-dark",
                    onVisitLine(node) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty
                        // lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [
                                {
                                    type: "text",
                                    value: " ",
                                },
                            ]
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push(
                            "line--highlighted"
                        )
                    },
                    onVisitHighlightedWord(node) {
                        node.properties.className = [
                            "word--highlighted",
                        ]
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
        ],
    },
})
