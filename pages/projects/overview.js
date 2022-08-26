import Image from 'next/image'
import specLogo from '../../public/spec-logo.svg';
import caerpLogo from '../../public/caerp.svg';

export default function Overview(){
  return (
    <>
      <div className="bg-spec-blue-600 text-white pb-10">
        
        <div className="flex justify-center p-5">
          <h1 className="block text-4xl font-bold">
            SPEC x Center to Advance Racial Equity Policy
            <h6 className="flex flex-row-reverse text-base font-extralight">
              @ RAND
            </h6>
          </h1>
        </div>
        
        <div className="">
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
        </div>

        <div className="grid grid-cols-2 p-12">
          
          <div className="grid justify-center">
            <div className="grid justify-center">
                <Image
                  src={specLogo}
                  alt="spec-logo"
                  className=""
                  width={130}
                  height={130}
                />
              <span className="mt-2 mb-10 text-2xl">Sustainable Progress & Equality Collective</span>
            </div>           
            <div className="block space-y-5">
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
 
          <div className="grid justify-center">
            <div className="grid justify-center">
                <Image
                  src={caerpLogo}
                  alt="caerp-logo"
                  className=""
                  width={130}
                  height={130}
                />
              <span className="mt-2 mb-10 text-2xl">Center to Advance Racial Equity Policy</span>
            </div>
            
            <div className="block space-y-5">
              <div>The Center's Work is focused on three key components:</div>
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
                <a className="text-spec-yellow-600"> Pillar III. Policy leadership:</a> : 
                Preparing policy leaders and those that influence them to debate, design, 
                and address racial equity going forward.
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

//   