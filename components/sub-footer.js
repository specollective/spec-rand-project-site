export default function Subfooter({
  className = "bg-spec-black-600",
}) {
  return (
    <div
      className={`bg-${color} flex justify-center p-20 md:p-10 px-4 text-center text-sm text-slate-100 font-medium`}
    >
      Funding for this research was provided by unrestricted gifts from RAND
      supporters and income from operations, with which RAND established the
      Center to Advance Racial Equity Policy in 2020.
    </div>
  );
}
