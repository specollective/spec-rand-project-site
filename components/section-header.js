export default function SectionHeader({ children, className="" }) {
  return (
      <h1 className={`text-4xl font-bold pt-10 pb-2 ${className}`}> { children } </h1>
  )
}