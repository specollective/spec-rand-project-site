import Image from "next/image";
import TextContent from "../../components/text";
import quoteImage from "../../public/yellow_quote.svg";
import GridContainer from "../../components/grid-container";
import ReflectionCarousel from "../../components/reflection-carousel";
import yoline from "../../public/yoline_sm_bubble.svg";
import crystal from "../../public/crystal_sm_bubble.svg";

const reflectionObjList = [
    {
      name: "Yoline Banerjee",
      image: yoline,
      quote:
        "Sagittis viverra integer et mauris, sapien enim. Eget quis congue suspendisse elit. Nisi bibendum nisl diam nulla velit, magna eget tincidunt ornare. Et integer rhoncus, magnis quisque ut sollicitudin quam mauris aenean.",
      title: "Research Associate",
    },
    {
      name: "Crystal Shamsi",
      image: crystal,
      quote:
        "Sagittis viverra integer et mauris, sapien enim. Eget quis congue suspendisse elit. Nisi bibendum nisl diam nulla velit, magna eget tincidunt ornare. Et integer rhoncus, magnis quisque ut sollicitudin quam mauris aenean.",
      title: "Research Associate",
    },
    {
      name: "Yoline Banerjee",
      image: yoline,
      quote:
        "Sagittis viverra integer et mauris, sapien enim. Eget quis congue suspendisse elit. Nisi bibendum nisl diam nulla velit, magna eget tincidunt ornare. Et integer rhoncus, magnis quisque ut sollicitudin quam mauris aenean.",
      title: "Research Associate",
    },
    {
      name: "Crystal Shamsi",
      image: crystal,
      quote:
        "Sagittis viverra integer et mauris, sapien enim. Eget quis congue suspendisse elit. Nisi bibendum nisl diam nulla velit, magna eget tincidunt ornare. Et integer rhoncus, magnis quisque ut sollicitudin quam mauris aenean.",
      title: "Research Associate",
    },
  ];

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
