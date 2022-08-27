import Image from "next/image"
import meeples from "../../public/meeples.svg"
import meepletown from "../../public/meepletown.svg"

export default function MeeplePage(){
  return(
    <div className="bg-spec-blue-600 h-100% p-10 space-y-10 text-white leading-6">
      <div className="flex -space-y-5">
        Link to Homescreen
      </div>

      <h1 className="flex text-4xl font-bold justify-center">
        Meeple Metaverse Conceptualization
      </h1>

      <div className="flex justify-around">
        <div className="">
          <Image
            src={meeples}
            alt="meeples"
          />
        </div>
        <div>
          <Image
            src={meepletown}
            alt="meepletown"
          />
        </div>
      </div>

      <div className="flex flex-row">
        
        <div className="basis-1/2 px-10">
          <h1 className="text-2xl text-spec-yellow-600">Project Overview:</h1>
          <div className="pb-5">
            The aim of this project, funded by RAND's Center to Advance Racial Equity Policy, 
            is to engage and educate the public on topics related to racial equity policy 
            through socio-cultural game-based learning. 
            This involves developing a site that will host original, web-based minigames and
            interactives highlighting key learnings from RAND racial equity research. 
          </div>
          <ol>
            Specifically, the study has three goals: 
            <li>1) develop socio-cultural minigames based on RAND research on racial equity</li>
            <li>2) develop a new methodological framework that is equity centered</li>
            <li>3) assess the immediate impact of game-based learning to create awareness of equity policy.</li>
          </ol>
        </div>

        <div className="basis-1/2 px-10">
          <h3 className="text-2xl text-spec-yellow-600">Learning Objectives of the game:</h3>
          <ul class="list-disc pl-10">
            <li>To have a self-directed learning experience on certain racial equity issues </li>
            <li>To inspire individuals to take actions to better their communities</li>
            <li>To create self-awareness of unconscious biases</li>
            <li>To learn about policy solutions/recommendation that improve racial equity</li>
          </ul>
          <div className="py-10">
            <h3 className="text-2xl text-spec-yellow-600">The team:</h3>
          </div>
        </div>
      </div>

    </div>
  )
}