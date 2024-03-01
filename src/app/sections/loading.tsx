import { SkeletonCard } from "@/components/SkeletonCard"

export function Loading () {
    return (
        <div className="grid grid-cols-3 gap-8">
            {"abcdefgi".split('').map(i => (
                <SkeletonCard key={i}/>
            ))}
        </div>
    )
}