const statInfo = [
    { borderColor: "spec-yellow-600", 
    height: 100, 
    width: "w-80", 
    statColor: "spec-teal-600", 
    inputStat: "6", 
    description: "Research Associates (RAs) worked on this project"

    }
]

export default function StatBox({borderColor, height, width, statColor, inputStat, description}) {
    return (
        <div className="">
            <div className={`grid border border-${borderColor} ${height} ${width} place-content-center text-center p-4`}>
                <p className={`text-${statColor} text-7xl font-semibold`}>{inputStat}</p>
                <p className="">
                    {description}
                </p>
            </div>
        </div>
    )
}