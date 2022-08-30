import Image from 'next/image'
import passionPic from '../../public/passion.svg'
import SectionContent from '../../components/section-content.js'

export default function Overview() {
  return (
    <SectionContent>
      <div className="">
        <h1 className="text-4xl font-bold">SPEC x Center to Advance Racial Equity Policy</h1>
        <div className="rid grid-cols-3">
          <div id="col-span-1 text-descriptions">
            <p id="partnersihp-explanation" >
              Ut venenatis nunc nisl vitae commodo a sit ligula. Integer felis viverra justo, augue metus risus, faucibus in maecenas. Sollicitudin morbi tempus, montes, diam. Vitae semper integer eu, ultricies aliquet mauris. Venenatis massa, amet, nullam arcu sagittis urna. Non viverra eget diam suspendisse enim.
            </p>
            <div id="spec-description">
              The center's work is focused on three key components.
              <br />
              I. <strong>Methods and action:</strong> Identifying the most effective combination of approaches that can have enduring impact on systemic racism
              <p className="font-weight-medium">(Sustainability through systems thinking).</p>
              <br />
              II. <strong>Dialogue and change:</strong> Changing the narrative around how we talk about racial equity in systems and policies.
              <br />
              III. <strong>Policy leadership:</strong> Preparing policy leaders and those that influence them to debate, design, and address racial equity going forward.
            </div>
          </div>

          <div className="col-span-2">
            <Image
              src={passionPic}
              className="object-position-right"
              alt="passion-led-us-here"
              width={200}
              height={200}
            />
          </div>

        </div>
      </div>
    </SectionContent>
  )
}