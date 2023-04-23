import Image from "next/image";

import Navbar from "./components/navbar";
import LandingPage from "./components/landingPage/page";
import AboutMe from "./components/aboutMe/page";
import ProjectSection from "./components/projectSection/page";
import ContactMe from "./components/contactMe/page";



//import styles from './page.module.css'

export default function Home() {
  return (
    <main
      id="mainPage"
      className={"techBG font-serif scroll-smooth text-[#CECFC7] "}
    >
      <LandingPage/>
      <Navbar id=""/>
      <AboutMe/>
      <hr className="bg-[#4B7F52]"></hr>
      <ProjectSection/>
      <hr className="bg-[#4B7F52]"></hr>
      <ContactMe/>
    </main>
  );
  //footer 3/4 contact 1/4 footer
}
