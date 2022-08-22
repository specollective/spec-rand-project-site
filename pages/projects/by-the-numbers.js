import Link from "next/link"

export default function ByTheNumbers(){
    return (
    <div className="bg-spec-blue-600 text-white">
        <h1 className="text-4xl font-bold">
            <Link href="/by-the-numbers">
                <a>By the Numbers</a>
            </Link>
        </h1>
        <div className="grid grid-cols-2 grid-rows-2">
            <div>Percentage picture</div>
            <div>Graph Picture</div>
            <div>People Picture</div>
            <div>Arrow Picture</div>
        </div>
    </div>
    )
}
