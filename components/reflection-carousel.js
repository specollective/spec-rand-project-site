import Image from "next/future/image";
import yoline from "../public/yoline_sm_bubble.svg";
import crystal from "../public/crystal_sm_bubble.svg"
import quoteImage from "../public/yellow_quote.svg";

const quoteList = [
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


export default function ReflectionCarousel(userObject) {
    return (
      <div className="bg-spec-teal-600">
        <Image src={yoline} alt="yoline" className="" />
        
      </div>
    );
}
