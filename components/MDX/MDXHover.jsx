import { cn } from "@/lib/utils"
import { InfoCircledIcon } from "@radix-ui/react-icons"

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export function Hover({
    children,
    type = "default",
    ...props
}) {
    return (
        <HoverCard
            openDelay={150}
            closeDelay={200}
        >
            <HoverCardTrigger>
                <InfoCircledIcon
                    className="h-5 w-5"
                    {...props}
                />
            </HoverCardTrigger>
            <HoverCardContent className="text-center w-fit">
                {children}
            </HoverCardContent>
        </HoverCard>
    )
}
