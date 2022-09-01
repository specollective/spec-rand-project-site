import Image from 'next/image'
import SectionContent from '../../components/section-content';
import TextContent from '../../components/text';
import GridContainer from '../../components/grid-container';
import caerpLogo from '../../public/caerp.svg';
import specLogo from '../../public/spec-logo.svg';

export default function Overview() {
  return (
    <SectionContent>        
        <div className="flex pb-10">
          <div className="flex flex-col text-align text-4xl font-bold">
            SPEC x Center to Advance Racial Equity Policy
            <div className="flex flex-row-reverse font-extralight text-sm pr-6">
              @ RAND
            </div>
          </div>
        </div>
        
        <TextContent className="">
          <div className="mb-5">
            Odio aliquam duis semper habitasse at luctus rhoncus egestas in. 
            Aliquam arcu fringilla dui commodo. Dolor, eu donec ornare varius nam adipiscing purus dui, sit. 
            Pellentesque hendrerit et eget ut. A non feugiat consectetur tristique. 
            Condimentum sed fermentum, orci orci malesuada. Mus urna, urna porta pharetra proin. 
            Quam etiam odio purus sed nulla diam eget commodo magna. Proin augue erat lectus enim sed auctor. 
          </div>
          <div>
            Varius blandit cum risus, ultrices magnis bibendum sapien amet pellentesque. 
            Id mi pretium rutrum molestie eget eget. Purus lobortis adipiscing felis at mauris. 
            Praesent netus augue at adipiscing in ipsum morbi neque aliquet. 
          </div>
        </TextContent>

        <div className="grid grid-cols-5 py-10 bg-gray">
          
          <div className="col-start-1 col-end-3 justify-center">
            <div className="h-44 relative">
                <Image
                  src={specLogo}
                  alt="spec-logo"
                  layout="fill" 
                  objectFit="contain"
                />
            </div>           
            <div className="pt-7 text-2xl">Sustainable Progress & Equality Collective</div>
            <div className="pt-14">
              <div>Spec's core values & operating principles:</div>
              <div className="text-bold">
                <a className="text-red-600">Sustainability through Systems Thinking</a> : 
                Using critical awareness when building systems, 
                seeking solutions that usher in improvement locally and globally 
                and applying a variety of research and development methods.
              </div>
              <div>
                <a className="text-red-600"> Progress through Open Collaboration</a> : 
                Striving for openess in our research and communications. 
                Seeking to understand the world by trying to create transformative change through 
                collaboration,research and critical reflection.
              </div>
              <div>
                <a className="text-red-600"> Equality through Mutual Reciprocity</a> : 
                Treat everyone in our communities with compassion, mutual respect and accountability.
                Equality is the end goal; 
                diversity, equity, inclusion and reciprocity are the means to get there.
              </div>
            </div>
          </div>

          {/* <div className="grid col-start-3">
            <Image 
            src={specLogo}
            alt="spec-logo"
            />
          </div> */}

          <div className="col-start-4 col-end-6 justify-center ">
            <div className="h-44 relative">
                <Image
                  src={caerpLogo}
                  alt="caerp-logo"
                  layout="fill"
                  objectFit="contain"
                />
            </div>
            <div className="pt-7 text-2xl">Center to Advance Racial Equity Policy</div>
            <div className="pt-14">
              <div classNam="">The Center's Work is focused on three key components:</div>
              <div className="text-bold">
                <a className="text-spec-yellow-600">Pillar I. Methods and actions</a> : 
                Identifying the most effective combination of approaches 
                that can have enduring impact on systemic racism.
              </div>
              <div>
                <a className="text-spec-yellow-600"> Pillar II. Dialogue and change</a> : 
                Changing the narrative around how we talk about racial equity in systems and policies.
              </div>
              <div>
                <a className="text-spec-yellow-600"> Pillar III. Policy leadership</a> : 
                Preparing policy leaders and those that influence them to debate, design, 
                and address racial equity going forward.
              </div>
            </div>

          </div>

        </div>
    </SectionContent>
  )
}