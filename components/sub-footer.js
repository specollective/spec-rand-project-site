export default function Subfooter({
  color = "spec-black-600",
}) {
  return (
    <div
      className={`bg-${color} px-10 pb-10 md:text-center content-center text-sm text-slate-100 font-medium`}
    >
      <p className="m-auto md:w-3/6 text-lg font-normal">
        This research was funded by the RAND Center to Advance Racial Equity
        Policy, which was established in 2020 with funding from donor
        contributions and the RAND Corporation’s own resources.The work produced
        by the collaborative does not necessarily reflect the views of RAND
        Corporation or its research sponsors.
      </p>
    </div>
  );
}
