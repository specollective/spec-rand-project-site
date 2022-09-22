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


export default function ReflectionCarousel() {
    return (
      <div className="bg-spec-teal-600">
        <div className="flex justify-center items-center p-4">
        <div id="carouselExampleIndicators"
          className="carousel carousel-fade relative"
          data-bs-ride="carousel">


          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active float-left w-full">
              <div className="border border-spec-yellow-600 box-border box-content h-75 w-96 bg-spec-black-600 z-10">
                <div className="flex top-2 right-0 bottom-0 left-0  justify-center items-center z-0">
                  <Image src={yoline} alt="yoline" className="" />
                </div>
                <div className="">
                  <Image
                    src={quoteImage}
                    alt="quoteImage"
                    width={50}
                    className=""
                  />
                </div>
                <p className="p-4 text-white italic">
                  "Sagittis viverra integer et mauris, sapien enim. Eget quis
                  congue suspendisse elit. Nisi bibendum nisl diam nulla velit,
                  magna eget tincidunt ornare. Et integer rhoncus, magnis
                  quisque ut sollicitudin quam mauris aenean."
                </p>

                <div className="flex items-center py-4">
                  <div className="flex-grow h-px w-1/5"></div>
                  <span className="flex-grow border-spec-teal-500 border-t-2 w-3/5"></span>
                  <div className="flex-grow h-px w-1/5"></div>
                </div>

                <p className="text-center text-spec-yellow-600 uppercase tracking-wide">
                  Yoline Banerjee
                </p>
                <p className="text-center text-white">Research Assoicate</p>
              </div>
            </div>
            <div className="carousel-item float-left w-full">
              <div className="border border-spec-yellow-600 box-border box-content h-75 w-96 bg-spec-black-600 z-10">
                <div className="flex justify-center items-center z-0">
                  <Image src={crystal} alt="crystal" className="" />
                </div>
                <div className="">
                  <Image
                    src={quoteImage}
                    alt="quoteImage"
                    width={50}
                    className=""
                  />
                </div>
                <p className="p-4 text-white italic">
                  "Sagittis viverra integer et mauris, sapien enim. Eget quis
                  congue suspendisse elit. Nisi bibendum nisl diam nulla velit,
                  magna eget tincidunt ornare. Et integer rhoncus, magnis
                  quisque ut sollicitudin quam mauris aenean."
                </p>

                <div className="flex items-center py-4">
                  <div className="flex-grow h-px w-1/5"></div>
                  <span className="flex-grow border-spec-teal-500 border-t-2 w-3/5"></span>
                  <div className="flex-grow h-px w-1/5"></div>
                </div>

                <p className="text-center text-spec-yellow-600 uppercase tracking-wide">
                  Crystal Shamsi
                </p>
                <p className="text-center text-white">Research Assoicate</p>
              </div>
            </div>
            <div className="carousel-item float-left w-full">
              <div className="border border-spec-yellow-600 box-border box-content h-75 w-96 bg-spec-black-600 z-10">
                <div className="flex justify-center items-center z-0">
                  <Image src={yoline} alt="yoline" className="" />
                </div>
                <div className="">
                  <Image
                    src={quoteImage}
                    alt="quoteImage"
                    width={50}
                    className=""
                  />
                </div>
                <p className="p-4 text-white italic">
                  "Sagittis viverra integer et mauris, sapien enim. Eget quis
                  congue suspendisse elit. Nisi bibendum nisl diam nulla velit,
                  magna eget tincidunt ornare. Et integer rhoncus, magnis
                  quisque ut sollicitudin quam mauris aenean."
                </p>

                <div className="flex items-center py-4">
                  <div className="flex-grow h-px w-1/5"></div>
                  <span className="flex-grow border-spec-teal-500 border-t-2 w-3/5"></span>
                  <div className="flex-grow h-px w-1/5"></div>
                </div>

                <p className="text-center text-spec-yellow-600 uppercase tracking-wide">
                  Yoline Banerjee
                </p>
                <p className="text-center text-white">Research Assoicate</p>
              </div>
            </div>
          </div>

          <div className="carousel-indicators right-0 bottom-0 left-0 flex justify-center ">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        </div>

        </div>
      </div>
    );
}
