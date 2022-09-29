import Image from 'next/image';
import ReflectionsCarousel from './ReflectionsCarousel';
import yoline from '../public/yoline_sm_bubble.svg';
import crystal from '../public/crystal_sm_bubble.svg';
import { REFLECTIONS } from '../constants/reflections';

export default function ReflectionsSection() {
  return (
    <div className="bg-spec-teal-600 flex mt-6 p-8 justify-center">
      {/* TO DO: might need to take out margins from grid container, causes white space */}
      <ReflectionsCarousel
        reflectionObjList={REFLECTIONS}
        borderColor="spec-yellow-600"
      />
    </div>
  );
}
