import Link from "next/link"

export default function Projects(){
    return (
        <div className="bg-spec-blue-600 text-white">
            <h1 className="text-4xl font-bold">II Projects</h1>
            <div className="grid grid-rows-2">
                <div>
                    <Link href="/projects/microcredentials">
                        <a>Microdential Project</a>
                    </Link>
                </div>
                <div>
                    <Link href="/projects/meeple-metaverse">
                        <a>Gaming Project</a>
                    </Link>
                </div>
                <div>
                    <Link href="/projects/impact-website">
                        <a>Impact Website Project</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
