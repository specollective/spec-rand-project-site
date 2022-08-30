export default function SectionContent({ children, className="bg-spec-blue-600" }) {
  return(
    <div className={`${className} text-slate-100 font-medium px-44 pt-12`}>
      { children }
    </div>
  )
}