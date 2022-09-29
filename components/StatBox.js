// Use these height and width params to match the figma design
// small box h-48 w-96
// medium long h-96 w-80
// long wide h-48 max-w-4xl

export default function StatBox({
  borderColor,
  height,
  width,
  statColor,
  inputStat,
  children,
}) {
  return (
    <div
      className={`grid border border-${borderColor} ${height} ${width} place-content-center text-center my-4 p-4`}
    >
      <p className={`text-${statColor} text-7xl font-semibold`}>
        {inputStat}
      </p>
      
      {children}
    </div>
  );
}
