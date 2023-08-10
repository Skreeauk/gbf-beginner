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
                    "border-red-900 bg-red-400 dark:bg-red-700":
                        type === "danger",
                    "border-yellow-800 bg-amber-400 dark:bg-yellow-700":
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
