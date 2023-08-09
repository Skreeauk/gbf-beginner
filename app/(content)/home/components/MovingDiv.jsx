"use client"

import { m, LazyMotion, domAnimation } from "framer-motion"

export default function MovingDiv({ className, children }) {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 24,
                    },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    margin: "0px 0px -200px",
                }}
                className={className}
            >
                {children}
            </m.div>
        </LazyMotion>
    )
}
