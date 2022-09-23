import Link from "next/link"

export default function ByTheNumbers(){
    return (
    <div className="grid md:grid-cols-2 md:grid-rows-2 bg-spec-black-600 p-10">
        <div className="text-4xl font-bold text-white">
            <h1>By the</h1>
            <h1>Numbers</h1>
        </div>
        <div className="text-white">
            <div className=""></div>
            <div>Graph Picture</div>
            <div>People Picture</div>
            <div>Arrow Picture</div>
        </div>
    </div>
    )
}
