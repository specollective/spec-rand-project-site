import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import Image from "next/future/image";
import quoteImage from "../public/yellow_quote.svg";



const buttonStyle = {
    width: 10,
    height: 10,
    borderRadius: "100%",

}

export default function ReflectionCarousel({reflectionObjList, borderColor}) {
  return (
    <div className="bg-spec-teal-600">
      <div className="flex justify-center items-center p-4">
        <div
          id="carouselExampleIndicators"
          className="carousel carousel-fade relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner relative w-full">
            {reflectionObjList.map((reflectionObj, index) => {
              return (
                <div
                  className={
                    index === 0 ? "carousel-item active" : "carousel-item"
                  }
                >
                  <div className={`border border-${borderColor} box-border box-content h-72 w-96 bg-spec-black-600 mt-20 z-0`}>
                    <div className="flex absolute -top-72 right-0 bottom-0 left-0  justify-center items-center z-10">
                      <Image src={reflectionObj.image} alt={reflectionObj.image} className="" />

                    </div>
                    <div className="">
                      <Image
                        src={quoteImage}
                        alt="quoteImage"
                        width={50}
                        className=""
                      />
                    </div>
                    <p className="p-4 text-white italic">{reflectionObj.quote}</p>

                    <div className="flex items-center py-4">
                      <div className="flex-grow h-px w-1/5"></div>
                      <span className="flex-grow border-spec-teal-500 border-t-2 w-3/5"></span>
                      <div className="flex-grow h-px w-1/5"></div>
                    </div>

                    <p className="text-center text-spec-yellow-600 uppercase tracking-wide">
                      {reflectionObj.name}
                    </p>
                    <p className="text-center text-sm text-white">{reflectionObj.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="carousel-indicators right-0 bottom-0 left-0 flex justify-center ">
            {reflectionObjList.map((_, index) => {
              return (
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : ""}
                  aria-label={`Slide ${index + 1}`}
                  style={buttonStyle}
                ></button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
