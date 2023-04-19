import ProjCard from "../projCard"
import tempImage from "../../../../public/8s5sCqk.jpg";
import ScrollButton from "../scrollButton";

export default function projectSection(){



    return (
        <div
        id="projectSection"
        className="flex flex-col items-center justify-center md:h-screen  overflow-auto"
      >
        <h1 className="text-center uppercase text-2xl p-5">Projects</h1>
        <div
          id="projectCards"
          className="grid grid-cols-1 md:grid-cols-3
          text-center justify-center py-2 max-w-7xl gap-3 mx-auto"
        >
          <ProjCard
            image={tempImage}
            title="Hello"
            info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
        soluta, odit nostrum esse culpa est placeat ratione, ab quisquam
        deserunt error reiciendis laboriosam asperiores doloremque veniam ex
        quaerat? Architecto, officiis."
          ></ProjCard>

          <ProjCard
            image={tempImage}
            title="Hello"
            info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
        soluta, odit nostrum esse culpa est placeat ratione, ab quisquam
        deserunt error reiciendis laboriosam asperiores doloremque veniam ex
        quaerat? Architecto, officiis."
          ></ProjCard>
          <ProjCard
            image={tempImage}
            title="Hello"
            info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
        soluta, odit nostrum esse culpa est placeat ratione, ab quisquam
        deserunt error reiciendis laboriosam asperiores doloremque veniam ex
        quaerat? Architecto, officiis."
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