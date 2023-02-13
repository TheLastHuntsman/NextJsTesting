import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "./components/navbar";
import ProjCard from "./components/projCard";
import headshot from "../../public/me.jpg";
import tempImage from "../../public/8s5sCqk.jpg";

//import styles from './page.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={"bg-slate-600"}>
      <h1 className={"text-3xl font-bold underline text-center"}>Welcome G</h1>
      <div className="container-fluid text-center">
        <h1 className="">Welcome</h1>
        <h4>
          {" "}
          Hello and welcome to this page, I know not how you've found this place
          but enjoy my first website. Have a look around, a few bits are still
          broken and being updated.{" "}
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
        <div id="leftPage" className="object-top justify-center text-center">
          <Image
            src={headshot}
            alt=""
            width={300}
            height={300}
            className="border rounded inline"
          />
          <p>Name: Jordan Gooding-McGovern</p>
          <p>Role: Junior Software Engineer</p>
          <p>Email: Jordangm19@gmail.com</p>
        </div>
        <div id="rightPage" className="justify-center text-center">
          <h1>A little bit about me</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
            soluta, odit nostrum esse culpa est placeat ratione, ab quisquam
            deserunt error reiciendis laboriosam asperiores doloremque veniam ex
            quaerat? Architecto, officiis.
          </h2>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
            soluta, odit nostrum esse culpa est placeat ratione, ab quisquam
            deserunt error reiciendis laboriosam asperiores doloremque veniam ex
            quaerat? Architecto, officiis.
          </h2>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
            soluta, odit nostrum esse culpa est placeat ratione, ab quisquam
            deserunt error reiciendis laboriosam asperiores doloremque veniam ex
            quaerat? Architecto, officiis.
          </h2>
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-3
      text-center justify-center py-2"
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
      <div className="flex justify-center">
        <form className="grid md:grid-cols-4 px-5">
          <div className="md:col-span-2 p-3 ">
            <label htmlFor="firstName" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">First Name</label>
            <input id="firstName" className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
          </div>
          <div className="md:col-span-2 p-3 ">
            <label htmlFor="lastName" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Last Name</label>
            <input id="lastName" className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
          </div>
          <div className="md:col-span-3 p-3 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email</label>
            <input className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
          </div>
          <div className="md:col-span-1 p-3 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Phone Number</label>
            <input className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
          </div>
          <div className="md:col-span-4 p-3 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center">Talk to me, what would you like to say?</label>
            <textarea className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-y"></textarea>
          </div>
          <button className="rounded md:col-start-2 md:col-end-4 border border-purple-300 shadow-md bg-blue-400 p-3">Hit Me</button>
        </form>
      </div>
    </main>
  );
}
