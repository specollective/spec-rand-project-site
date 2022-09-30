// Use these height and width params to match the figma design
//small box h-48 w-96
//medium long h-96 w-80
//long wide h-48 max-w-4xl

export default function StatBox({ borderColor, height, width, statColor, inputStat, className, children }) {
	return (
		<div
			className={`${className} flex flex-col border border-${borderColor} ${height} ${width} justify-center text-center p-4`}
		>
			<p className={`text-${statColor} text-7xl font-semibold mb-5`}>{inputStat}</p>
			{children}
		</div>
	);
}
