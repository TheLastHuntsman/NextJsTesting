import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "./components/navbar";
import ProjCard from "./components/projCard";
import headshot from "../../public/me.jpg";
import tempImage from "../../public/8s5sCqk.jpg";
import ScrollButton from "./components/scrollButton";

//import styles from './page.module.css'

export default function Home() {
  return (
    <main className={"bg-slate-600 font-serif scroll-smooth text-white"}>
      <div
        id="landing"
        className="grid h-screen place-items-center
      bg-gradient-to-r from-purple-700 via-purple-850 to-purple-900"
      >
        <h1 className={"text-3xl font-bold underline text-center"}>
          Welcome G
        </h1>
        <ScrollButton
          elementID="aboutMeBackground"
          text="Click me to find out more"
        ></ScrollButton>
      </div>

      <div
        id="aboutMeBackground"
        className="grid h-screen place-items-center
        bg-gradient-to-l from-purple-700 via-purple-850 to-purple-900"
      >
        <div
          id="aboutMe"
          className="flex max-w-7xl mx-auto gap-10
          border-2 rounded border-cyan-500
        shadow-lg p-5"
        >
          <div id="leftAboutMe" className="object-top w-1/3">
            <Image
              src={headshot}
              alt=""
              width={300}
              height={300}
              className="border inline"
            />
            <p>Name: Jordan Gooding-McGovern</p>
            <p>Role: Junior Software Engineer</p>
            <p>Email: Jordangm19@gmail.com</p>
          </div>
          <div id="rightAboutMe" className=" w-2/3 flex flex-col">
            <h1 className="text-center p-5">A little bit about me</h1>
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
            <h2 className="h-1/3 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              soluta, odit nostrum esse culpa est placeat ratione, ab quisquam
              deserunt error reiciendis laboriosam asperiores doloremque veniam
              ex quaerat? Architecto, officiis.
            </h2>
          </div>
        </div>
        <div className="-mt-10">
          <ScrollButton
            elementID="projectSection"
            text="Dive a little deeper"
          ></ScrollButton>
        </div>
      </div>
      <div id="projectSection" className="h-screen bg-slate-500">
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
      </div>
      <div className="flex justify-center">
        <form className="grid md:grid-cols-4 px-5">
          <div className="md:col-span-2 p-3 ">
            <label
              htmlFor="firstName"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              First Name
            </label>
            <input
              id="firstName"
              className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ></input>
          </div>
          <div className="md:col-span-2 p-3 ">
            <label
              htmlFor="lastName"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Last Name
            </label>
            <input
              id="lastName"
              className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ></input>
          </div>
          <div className="md:col-span-3 p-3 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
          </div>
          <div className="md:col-span-1 p-3 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Phone Number
            </label>
            <input className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
          </div>
          <div className="md:col-span-4 p-3 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center">
              Talk to me, what would you like to say?
            </label>
            <textarea className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-y"></textarea>
          </div>
          <button className="rounded md:col-start-2 md:col-end-4 border border-purple-300 shadow-md bg-blue-400 p-3">
            Hit Me
          </button>
        </form>
      </div>
    </main>
  );
}
