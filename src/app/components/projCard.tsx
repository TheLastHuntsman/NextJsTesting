import Image from "next/image";
import tempImage from "../../../public/8s5sCqk.jpg";

type cardProps = {
  image: any;
  title: string;
  info: string;
  children?: any;
};

export default function ProjCard({ image, title, info }: cardProps) {
  return (
    <div className="bg-white border border-red-500 px-5 py-2 ">
      <div className="rounded overflow-hidden shadow-lg object-fill">
        <Image
          className=" inline "
          src={image}
          alt="Sunset in the mountains"
        ></Image>

        <div id="hug" className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{info}</p>
        </div>
        <button className="border rounded p-3 mb-3 ">Read More</button>
      </div>
    </div>
  );
}
