import Image from 'next/image'
import SectionContent from '../../components/section-content';
import TextContent from '../../components/text';
import GridContainer from '../../components/grid-container';
import caerpLogo from '../../public/caerp.svg';
import specLogo from '../../public/spec_logo.svg';

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
        
        <div className="flex sm:flex-col md:flex-row justify-between py-10">
          <div className="basis-5/12">
            <div className="grid justify-center">
              <div className="py-7 text-xl text-center">Sustainable Progress & Equality Collective</div>
              <div className="h-40 relative order-first">
                  <Image
                    src={specLogo}
                    alt="spec_logo"
                    layout="fill" 
                    objectFit="contain"
                  />
              </div>  
              <div className="flex grow-zero shrink-0"> Spec's core values & operating principles:</div>
              <div className="mt-7 space-y-7">
                <div className="text-bold">
                  <a className="text-red-600">Sustainability through Systems Thinking</a>: 
                  Using critical awareness when building systems, 
                  seeking solutions that usher in improvement locally and globally 
                  and applying a variety of research and development methods.
                </div>
                <div>
                  <a className="text-red-600"> Progress through Open Collaboration</a>: 
                  Striving for openess in our research and communications. 
                  Seeking to understand the world by trying to create transformative change through 
                  collaboration,research and critical reflection.
                </div>
                <div>
                  <a className="text-red-600"> Equality through Mutual Reciprocity</a>: 
                  Treat everyone in our communities with compassion, mutual respect and accountability.
                  Equality is the end goal; 
                  diversity, equity, inclusion and reciprocity are the means to get there.
                </div>
              </div>
            </div>
          </div>

          <div className="basis-1/12 relative">
            <div className="absolute left-1/2 -ml-0.5 w-0.5 h-52 bg-white my-44"></div>
          </div>

          <div className="basis-5/12">
            <div className="grid justify-center">
              <h1 className="py-7 text-xl text-center">Center to Advance Racial Equity Policy</h1>
             
              <div className="h-40 relative order-first">
                  <Image
                    src={caerpLogo}
                    alt="caerp-logo"
                    layout="fill"
                    objectFit="contain"
                  />
              </div>
              <div className="flex grow-zero">The Center's Work is focused on three key components:</div>
              <div className="mt-7 space-y-7">
                <div className="text-bold">
                  <a className="text-spec-yellow-600">Pillar I. Methods and actions</a>: 
                  Identifying the most effective combination of approaches 
                  that can have enduring impact on systemic racism.
                </div>
                <div>
                  <a className="text-spec-yellow-600"> Pillar II. Dialogue and change</a>: 
                  Changing the narrative around how we talk about racial equity in systems and policies.
                </div>
                <div>
                  <a className="text-spec-yellow-600"> Pillar III. Policy leadership</a>: 
                  Preparing policy leaders and those that influence them to debate, design, 
                  and address racial equity going forward.
                </div>
              </div>
            </div>
          </div>

        </div>

    </SectionContent>
  )
}