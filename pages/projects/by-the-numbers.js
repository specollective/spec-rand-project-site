import StatBox from "../../components/stat-box";

export default function ByTheNumbers(){
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 justify-items-center bg-spec-black-600 p-10">
        <div className="cols-span-1">
          <div className="text-4xl font-bold text-white mb-5">
            <h1>By the</h1>
            <h1>Numbers</h1>
          </div>
          <StatBox
            borderColor="spec-turquoise-600"
            height="h-96"
            width="w-80"
            statColor="spec-yellow-600"
            inputStat="90%"
          >
            <p>
              of individuals inside the organization come from diverse
              backgrounds; that might include visible/invisible diabilities,
              LGBTQ+, women, people of color.
            </p>
          </StatBox>
        </div>
        <div className="cols-span-1">
          <StatBox
            borderColor="spec-turquoise-600"
            height="h-48"
            width="w-96"
            statColor="spec-yellow-600"
            inputStat="1"
          >
            <p>Research Article Published</p>
          </StatBox>
          <StatBox
            borderColor="spec-turquoise-600"
            height="h-48"
            width="w-96"
            statColor="spec-yellow-600"
            inputStat="12"
          >
            <p>Research Associates (RAs) went through this program</p>
          </StatBox>
          <StatBox
            borderColor="spec-turquoise-600"
            height="h-48"
            width="w-96"
            statColor="spec-yellow-600"
            inputStat="6"
          >
            <p>
              Research Associates (RAs) placed at jobs; externally or through
              SPEC
            </p>
          </StatBox>
        </div>
      </div>
    );
}
