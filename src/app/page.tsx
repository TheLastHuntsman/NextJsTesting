import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "./components/navbar";
import ProjCard from "./components/projCard";
import headshot from "../../public/meslate.jpg";
import tempImage from "../../public/8s5sCqk.jpg";
import ScrollButton from "./components/scrollButton";
import ScrollToTopButton from "./components/scrollToTopButton";

//import styles from './page.module.css'

export default function Home() {
  return (
    <main
      id="mainPage"
      className={"bg-slate-600 font-serif scroll-smooth text-slate-300"}
    >
      {" "}
      <div id="landingBg" className="relative h-screen">
        <div className="section flex">
          <spanT></spanT>
          <spanT></spanT>
          <spanT></spanT>
          <spanT></spanT>
          <spanT></spanT>
          <spanT></spanT>
          <spanT></spanT>
          <spanT></spanT>
          <spanT></spanT>
          <spanT></spanT>
          <div className="text-center justify-center m-auto">Hello</div>
        </div>
      </div>
      
      <div
        id="aboutMeBackground"
        className="grid md:h-screen place-items-center
        bg-gradient-to-l from-purple-700 via-purple-800 to-purple-900
        overflow-auto"
      >
        <div
          id="aboutMe"
          className="flex flex-col md:flex-row md:max-w-7xl md:x-auto md:gap-10
          bg-purple-800 rounded border-cyan-500
        shadow-lg p-5"
        >
          <div id="leftAboutMe" className="md:w-1/3  mx-auto">
            <Image
              src={headshot}
              alt=""
              width={300}
              height={300}
              className="md:inline md:object-top p-5"
            />
            <div id="tidbits">
              <div className="p-1">Name: Jordan Gooding-McGovern</div>
              <div className="p-1">Role: Junior Software Engineer</div>
              <div className="p-1">Email: Jordangm19@gmail.com</div>
            </div>
          </div>
          <div id="rightAboutMe" className=" md:w-2/3 flex flex-col ">
            <h1 className="text-center p-5">A little bit about me</h1>
            <h2 className="h-1/3 text-center">
              Hello! I'm Jordan soluta, odit nostrum esse culpa est placeat
              ratione, ab quisquam deserunt error reiciendis laboriosam
              asperiores doloremque veniam ex quaerat? Architecto, officiis.
            </h2>
            <h2 className="h-1/3 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              soluta, odit nostrum esse culpa est placeat ratione, ab quisquam
              deserunt error reiciendis laboriosam asperiores doloremque veniam
              ex quaerat? Architecto, officiis.
            </h2>
            <h2 className="h-1/3 text-center">
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
      <div
        id="projectSection"
        className="flex flex-col items-center justify-center md:h-screen bg-slate-500 overflow-auto"
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
      <div
        id="contactMe"
        className="flex  justify-center items-center md:h-screen md:mx-auto"
      >
        <div
          id="formWrapper"
          className="flex flex-col justify-center items-center md:m-auto md:h-2/4 md:w-1/2 text-black"
        >
          <h1 className="text-7xl text-center">Say Hello!</h1>
          <form className="grid md:grid-cols-7 p-5">
            <div className="md:col-span-3 p-3 ">
              <label
                htmlFor="firstName"
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
              >
                First Name
              </label>
              <input
                id="firstName"
                className="block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></input>
            </div>
            <div className="md:col-span-4  p-3 ">
              <label
                htmlFor="lastName"
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
              >
                Last Name
              </label>
              <input
                id="lastName"
                className="block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></input>
            </div>
            <div className="md:col-span-5 p-3 ">
              <label className="block uppercase tracking-wide  text-xs font-bold mb-2">
                Email
              </label>
              <input className="block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
            </div>
            <div className="md:col-span-2 p-3 ">
              <label className="block uppercase tracking-wide  text-xs font-bold mb-2">
                Phone Number
              </label>
              <input className="block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
            </div>
            <div className="md:col-span-7 p-3 ">
              <label className="block uppercase tracking-wide  text-xs font-bold mb-2 text-center">
                Talk to me, what would you like to say?
              </label>
              <textarea className="block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-y"></textarea>
            </div>
            <button className="inline rounded md:col-start-4 md:col-end-5 border border-purple-300 shadow-md bg-blue-400 p-3">
              Hit Me
            </button>
          </form>
          <div className="">
            <ScrollToTopButton></ScrollToTopButton>
          </div>
        </div>
      </div>
    </main>
  );
  //footer 3/4 contact 1/4 footer
}
