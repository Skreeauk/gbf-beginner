import { cn } from "@/lib/utils"

export function Callout({
    className,
    children,
    icon,
    type = "default",
    ...props
}) {
    return (
        <div
            className={cn(
                "my-6 flex items-start rounded-md border border-l-4 border-accent-foreground/20 bg-accent p-4",
                className,
                {
                    "border-red-900 bg-red-500 dark:bg-red-700":
                        type === "danger",
                    "border-yellow-800 bg-amber-300 dark:bg-yellow-600":
                        type === "warning",
                    "border-green-800 bg-green-400 dark:bg-green-700":
                        type === "success",
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
