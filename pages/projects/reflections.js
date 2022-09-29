import Image from "next/image";
import ReflectionCarousel from "../../components/reflection-carousel";
import yoline from "../../public/yoline_sm_bubble.svg";
import crystal from "../../public/crystal_sm_bubble.svg";
import { reflectionObjList } from "../../components/content/carouselContent";

export default function Reflections() {
  return (
    <div className="bg-spec-teal-600">
      {/* TO DO: might need to take out margins from grid container, causes white space */}
      <ReflectionCarousel
        reflectionObjList={reflectionObjList}
        borderColor="spec-yellow-600"
      />
    </div>
  );
}
