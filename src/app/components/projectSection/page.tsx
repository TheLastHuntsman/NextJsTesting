import ProjCard from "../projCard"
import tempImage from "../../../../public/placeholderProj.jpg";
import ScrollButton from "../scrollButton";

export default function projectSection(){



    return (
        <div
        id="projectSection"
        className="flex flex-col items-center justify-center md:min-h-screen  overflow-auto
        "
      >
        <h1 className="text-center uppercase text-2xl md:text-8xl p-5">Projects</h1>
        <div
          id="projectCards"
          className="grid grid-cols-1 md:grid-cols-3
          text-center justify-center py-2 max-w-7xl gap-3 mx-auto"
        >
          <ProjCard
            image={tempImage}
            title="Hello"
            tabIndex={0}
            info="Placeholder!"
          ></ProjCard>

          <ProjCard
            image={tempImage}
            title="Hello"
            tabIndex={1}
            info="Placeholder!"
          ></ProjCard>
          <ProjCard
            image={tempImage}
            title="Hello"
            tabIndex={2}
            info="Placeholder!"
          ></ProjCard>
        </div>
        <div className="invisible md:visible">
          <ScrollButton
            elementID="contactMe"
            text="Interested in finding out more?"
            text2="Get in touch!"
          ></ScrollButton>
        </div>
      </div>

    )
}