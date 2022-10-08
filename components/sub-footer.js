export default function Subfooter({
  color = "spec-black-600",
}) {
  return (
    <div
      className={`bg-${color} px-10 pb-10 md:text-center content-center text-sm text-slate-100 font-medium`}
    >
      <p className="m-auto md:w-3/6 text-lg font-normal">
        Funding for this research was provided by unrestricted gifts from RAND
        supporters and income from operations, with which RAND established the
        Center to Advance Racial Equity Policy in 2020.
      </p>
    </div>
  );
}
