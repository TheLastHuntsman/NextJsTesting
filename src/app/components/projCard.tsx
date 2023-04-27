import { randomInt } from "crypto";
import Image from "next/image";
import tempImage from "../../../public/8s5sCqk.jpg";

type cardProps = {
  image: any;
  title: string;
  info: string;
  tabIndex: number;
  children?: any;
};

export default function ProjCard({ image, title, info, tabIndex }: cardProps) {
  return (

      <div tabIndex={tabIndex} className="bg-[#4B7F52] object-fill p-5 m-5 bg-opacity-50
      hover:bg-opacity-100 focus:bg-opacity-100

      shadow shadow-[#0A8754] mix-blend-normal
      ">
        <Image
          className=" inline "
          src={image}
          alt="Sunset in the mountains"
        ></Image>

        <div id="hug" className="px-6 py-4">
          <div className="font-bold text-xl mb-2 underline md:text-2xl">{title}</div>
          <p className="text-base">{info}</p>
        </div>
        <button className="border rounded p-3 mb-3
         hover:text-[#0A8754] hover:bg-[#210A3E] hover:border-[#210A3E]
         ">
          Read More</button>
      </div>

  );
}
