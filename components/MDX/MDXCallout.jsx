import { cn } from "@/lib/utils"

export function Callout({
    children,
    icon,
    type = "default",
    ...props
}) {
    return (
        <div
            className={cn(
                "my-6 flex items-start rounded-md border border-l-4 p-4",
                {
                    "border-red-900 bg-red-600":
                        type === "danger",
                    "border-yellow-900 bg-yellow-400":
                        type === "warning",
                }
            )}
            {...props}
        >
            {icon && (
                <span className="mr-4 text-2xl">
                    {icon}
                </span>
            )}
            <div>{children}</div>
        </div>
    )
}
