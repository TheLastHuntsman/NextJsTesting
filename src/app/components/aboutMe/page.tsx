import Image from "next/image";
import ScrollButton from "../scrollButton";
import headshot from "../../../../public/me.jpg";


export default function AboutMe(){



    return (
        <div
        id="aboutMeBackground"
        className="grid md:h-screen place-items-center
        overflow-auto"
      >
        <div
          id="aboutMe"
          className="flex flex-col md:flex-row md:max-w-7xl md:x-auto md:gap-10
          rounded border-slate-700 border-2 border-opacity-60
        shadow-lg p-5 pt-8"
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
              <div className="p-1 ">Name: Jordan Gooding-McGovern</div>
              <div className="p-1">Role: Junior Software Engineer</div>
              <div className="p-1">Email: Jordangm19@gmail.com</div>
            </div>
          </div>
          <div id="rightAboutMe" className=" md:w-2/3 flex flex-col text-2xl">
            <h1 className="text-center p-5">A little bit about me</h1>
            <h2 className="h-1/3 text-center text-lg p-2">
              Hello! I&quot;m Jordan, a budding technomancer who loves all learning about all things tech.
              My key interests currently lay in architecural design for scalable applications. To
              learn more about this, I began a journey into software development focusing on things like key concepts and methodologies
              to real world practices and project management.
            </h2>
            <h2 className="h-1/3 text-center text-lg p-2">
              While I&quot;m currently focusing on Software Engineering, I enjoy the variety that comes with tech and have previously worked in
              technical support, internal support and as an Infrastructure Engineer. In the future, I&quot;m planning to dive deeper into
              cybersecurity and encorporate those practices into anything create.
            </h2>
            <h2 className="h-1/3 text-center text-lg p-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              soluta, odit nostrum esse culpa est placeat ratione, ab quisquam
              deserunt error reiciendis laboriosam asperiores doloremque veniam
              ex quaerat? Architecto, officiis.
            </h2>
          </div>
        </div>
        <div className="invisible md:visible">
          <ScrollButton
            elementID="projectSection"
            text="Dive a little deeper"
          ></ScrollButton>
        </div>
      </div>

    )
}