export default function SectionHeader({ children, className="" }) {
  return (
      <h2 className={`text-4xl font-bold ${className}`}> { children } </h2>
  )
}