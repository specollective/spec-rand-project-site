import React from 'react'
import Image from 'next/image'
import MeepleBlue from '../public/meeple_blue_character.svg'
import MeepleGray from '../public/meeple_gray_character.svg'
import MeepleCheck from '../public/meeple_checkmark.svg'
import MeepleBullet from '../public/meeple_bullet.svg'

function MeepleLoading() {
  const meepleCheckmark = <div className="text-center inline-block pr-2"><Image width={20} height={20} src={MeepleCheck} /></div>
  const meepleBullet = <div className="inline-block align-middle pr-2"><Image width={20} height={20} src={MeepleBullet} /></div>

  const loadingColOne = ['Identify goals & objectives', 'Literature review on RAND research', 'Selection of game topic', 'Selection of game mechanic', 'Produced a development process']
  const loadingColTwo = ['Game design direction ', 'Create moodboards for look and feel', 'Produce UI wireframes']
  const loadingColThree = ['Final content approved', 'Alpha game delivered', 'Produce UI wireframes', 'Initial testing and responses']

  const mappedColOne = loadingColOne.map((data, index) => {
    return (
      <p key={index} className="py-3">{meepleCheckmark}{data}</p>
    )
  })

  const mappedColTwo = loadingColTwo.map((data, index) => {
    return (
      <p key={index} className="py-3">{meepleCheckmark}{data}</p>
    )
  })

  const mappedColThree = loadingColThree.map((data, index) => {
    return (
      <p key={index} className="py-3">{meepleBullet}{data}</p>
    )
  })

  return (
    <div>
      <div className="p-8 text-center text-spec-turquoise-600 text-5xl font-extrabold">
        Loading...
      </div>

      <div className="md:px-36 lg:grid lg:grid-cols-3 pt-8">
        <div>
          <Image src={MeepleBlue} alt="meeple one" />
          <h1 className="pt-4 text-2xl font-bold">Phase 1: Complete</h1>
          <div className="lg:px-6 text-left">
            <div className="justify-center p-6">
              {mappedColOne}
            </div>
          </div>
        </div>

        <div>
          <Image src={MeepleGray} alt="meeple one" />
          <h1 className="text-2xl font-bold pt-4">Phase 2</h1>
          <div className="lg:px-6 text-left">
            <div className="justify-center p-6 text-base">
              {mappedColTwo}
              <p className="py-3">{meepleBullet}Finalize Meeple artwork</p>
              <p className="py-3">{meepleBullet}Content development</p>
            </div>
          </div>
        </div>

        <div>
          <Image src={MeepleGray} alt="meeple one" />
          <h1 className="text-2xl font-bold pt-4">Phase 3</h1>
          <div className="lg:px-6 text-left">
            <div className="justify-center p-6 text-base">
              {mappedColThree}
              <p className="py-3 text-xl font-bold">{meepleBullet}GAME ONE LAUNCH!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeepleLoading