import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card"

import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard () {
    return (
        <Card className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 item-center">
                <Skeleton className="w-12 h-12 rounded-full"/>
                <Skeleton className="h-6 flex-grow"/>
            </CardHeader>
            <CardContent>
                <Skeleton className="h-4 flex-grow mt-4"/>
                <Skeleton className="h-4 flex-grow mt-4"/>
                <Skeleton className="h-4 w-1/2 mt-4"/>
            </CardContent>
            <CardFooter>
                <Skeleton className="h-10 w-28"/>
            </CardFooter>
        </Card>
    )
}