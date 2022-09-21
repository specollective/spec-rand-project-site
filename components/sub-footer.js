export default function Subfooter({
  className = "bg-spec-black-600",
}) {
  return (
    <div
      className={`${className} flex justify-center text-center text-slate-100 p-20 text-sm px-4 md:p-10 font-medium`}
    >
      Funding for this research was provided by unrestricted gifts from RAND
      supporters and income from operations, with which RAND established the
      Center to Advance Racial Equity Policy in 2020.
    </div>
  );
}
