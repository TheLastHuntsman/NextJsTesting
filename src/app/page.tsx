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
      <h1 className={"text-3xl font-bold underline"}>Welcome G</h1>
      <div className="container-fluid text-center">
        <h1>Welcome</h1>
        <h4>
          {" "}
          Hello and welcome to this page, I know not how you've found this place
          but enjoy my first website. Have a look around, a few bits are still
          broken and being updated.{" "}
        </h4>
      </div>
      <div className="grid grid-cols-2">
        <div id="leftPage" className="object-top justify-center text-center">
          <h1>hi</h1>
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
          <h1>Bye</h1>
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
      <div className="grid grid-cols-3 grid-rows-1 
      text-center justify-center py-2">
        <ProjCard
        image={tempImage}
        title="Hello"
        info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
        soluta, odit nostrum esse culpa est placeat ratione, ab quisquam
        deserunt error reiciendis laboriosam asperiores doloremque veniam ex
        quaerat? Architecto, officiis.">
        </ProjCard>

        <div className="bg-white border border-red-500 px-5 py-2">
          project 2
        </div>
        <div className="bg-white border border-red-500 px-5 py-2">
          project 3
        </div>
      </div>
    </main>
  );
}
