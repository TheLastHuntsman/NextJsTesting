import Image from "next/image";
import ScrollButton from "../scrollButton";


export default function LandingPage(){

    return (
        <div id="landingBg" className="relative h-screen">
        <div className="overflow-hidden grid place-items-center
        absolute top-0 left-0 w-full h-full bg-center bg-cover">
          <Image
          src="/mainBG.jpg"
          alt=""
          fill= {true}
          priority={true}
          />
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="text-center justify-center m-auto z-10">
            <h1 className={"text-3xl font-bold underline text-center capitalize"}>
              Welcome
            </h1>
            <p className="text-xl">To the home of JCXYZ</p>

            <div id="landingButtonWrapper" className={"mt-10"}>
              <ScrollButton
                elementID="aboutMeBackground"
                text="Click me to find out more"
              ></ScrollButton>
            </div>
          </span>
        </div>
      </div>

    )
}