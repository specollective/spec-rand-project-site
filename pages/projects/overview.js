import Image from 'next/image'
import passionPic from '../../public/passion.svg'

export default function Overview(){
  return (
    <>
      <div className="bg-spec-blue-600 text-white">
        <div className="flex justify-center p-5">
          <h1 className="block text-4xl font-bold">
            SPEC x Center to Advance Racial Equity Policy
            <h6 className="flex flex-row-reverse text-base font-extralight">@ RAND</h6>
          </h1>
        </div>
        <div className="flex justify-center">
          <div id=" text-descriptions">
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

          <div className="">
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
    </>
  )
}