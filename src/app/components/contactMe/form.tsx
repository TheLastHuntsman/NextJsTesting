'use client';
import ScrollToTopButton from "../scrollToTopButton";
import { motion } from "framer-motion";
import { useState } from "react";



export default function ContactMeForm(){
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => { setModalOpen(false); }
  const open = () => { setModalOpen(true); }


    return (
        <div
        id="contactMe"
        className="flex  justify-center items-center md:min-h-screen md:mx-auto py-3"
      >
        <div
          id="formWrapper"
          className="flex flex-col justify-center items-center md:m-auto md:h-2/4 md:w-1/2 overflow-auto
          border-2 border-[#CECFC7] rounded-lg bg-slate-300 bg-opacity-5
          shadow-lg shadow-[#4B7F52] mix-blend-normal"
        >
          <h1 className="text-7xl text-center p-3">Say Hello!</h1>
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
                className="block w-full bg-slate-400  border border-gray-200 rounded py-3 px-4 leading-tight
                focus:outline-none focus:bg-slate-200 focus:border-green-500 text-black"
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
                className="block w-full bg-slate-400  border border-gray-200 rounded py-3 px-4 leading-tight
                focus:outline-none focus:bg-slate-200 focus:border-green-500 text-black"
              ></input>
            </div>
            <div className="md:col-span-5 p-3 ">
              <label className="block uppercase tracking-wide  text-xs font-bold mb-2">
                Email
              </label>
              <input className="block w-full bg-slate-400  border border-gray-200 rounded py-3 px-4 leading-tight
              focus:outline-none focus:bg-slate-200 focus:border-green-500 text-black"></input>
            </div>
            <div className="md:col-span-2 p-3 ">
              <label className="block uppercase tracking-wide  text-xs font-bold mb-2">
                Phone Number
              </label>
              <input className="block w-full bg-slate-400  border border-gray-200 rounded py-3 px-4 leading-tight
              focus:outline-none focus:bg-slate-200 focus:border-green-500 text-black"></input>
            </div>
            <div className="md:col-span-7 p-3 ">
              <label className="block uppercase tracking-wide  text-xs font-bold mb-2 text-center">
                Talk to me, what would you like to say?
              </label>
              <textarea className="block w-full bg-slate-400  border border-gray-200 rounded py-3 px-4 leading-tight
              focus:outline-none focus:bg-white focslatebg-slate-200rder-gray-500 greenze-y text-black"></textarea>
            </div>
            <button className="rounded md:col-start-4 md:col-end-5 p-3
            border border-[#CECFC7]
            transition hover:bg-[#4B7F52]
            ">
              Fire away!
            </button>
          </form>
        </div>
      </div>
    )
}