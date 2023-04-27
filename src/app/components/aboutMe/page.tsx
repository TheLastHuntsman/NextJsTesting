import Image from "next/image";
import ScrollButton from "../scrollButton";
import headshot from "../../../../public/me.jpg";


export default function AboutMe(){



    return (
        <div
        id="aboutMeBackground"
        className="grid md:min-h-screen place-items-center
        p-5"
      >
        <div
          id="aboutMe"
          className="flex flex-col md:flex-row md:max-w-7xl md:x-auto md:gap-10
          rounded border-[#CECFC7] border-2 border-opacity-60
          shadow-lg shadow-[#4B7F52] mix-blend-normal
        p-5 pt-8"
        >
          <div id="leftAboutMe" className="md:w-1/3 object-top">
            <Image
              src={headshot}
              alt=""
              width={300}
              height={300}
              className="md:object-top p-5 mx-auto "
            />
            <div id="tidbits" className="text-center">
              <div className="p-1 text-sm md:text-2xl">NAME: Jordan Gooding-McGovern</div>
              <div className="p-1 text-sm md:text-2xl">ROLE: Junior Software Engineer</div>
              <div className="p-1 text-sm md:text-2xl">EMAIL: Jordangm19@gmail.com</div>
            </div>
          </div>
          <div id="rightAboutMe" className=" md:w-2/3 flex flex-col leading-7 md:">
            <h1 className="text-center p-5 text-5xl underline capitalize"
            >
              At a glance
            </h1>
            <h2 className="h-1/3 text-left text-sm md:text-2xl p-2 flex-1">
              Hello! I&apos;m Jordan, a young technomancer who loves all learning about all things computer and tech.
              My key interests currently lay in architecural design for scalable applications. To
              learn more about this, I began a journey into software development focusing on things like key concepts and methodologies
              to real world practices and project management.
            </h2>
            <h2 className="h-1/3 text-left text-sm md:text-2xl p-2 flex-1">
              While I&apos;m currently focusing on Software Engineering, I enjoy the variety that comes with tech and have previously worked in
              technical support, internal support and as an Infrastructure Engineer. In the future, I&apos;m planning to dive deeper into
              cybersecurity and encorporate those practices into anything I create.
            </h2>
          </div>
        </div>
        <div className="invisible md:visible md:pt-3">
          <ScrollButton
            elementID="projectSection"
            text="Dive a little deeper"
          ></ScrollButton>
        </div>
      </div>

    )
}