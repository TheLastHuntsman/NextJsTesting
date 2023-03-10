"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import NavbarButton from "./navBarButton"

//TODO add light grey hover
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="sticky top-0">
      <nav className="w-full bg-gray-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/">
                <h2 className="text-2xl text-white font-bold">JCXYZ</h2>
              </a>
              <div className="">
                <button
                  className="p-2 text-gray-700 lg:hidden md:hidden rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              id="whatAmI"
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center content-evenly space-y-2 md:flex md:space-x-7 md:space-y-0">
                <NavbarButton pageLink="/" text="Home" navbar={Navbar} setNavbar={setNavbar} />
                <NavbarButton pageLink="/blog" text="Blogs" navbar={Navbar} setNavbar={setNavbar} />
                <NavbarButton pageLink="/counter" text="Counter" navbar={Navbar} setNavbar={setNavbar} />
                <NavbarButton pageLink="/snake" text="Snake" navbar={Navbar} setNavbar={setNavbar} />
                <NavbarButton pageLink="/login" text="Login" navbar={Navbar} setNavbar={setNavbar} />
                <NavbarButton pageLink="/todos" text="Todo" navbar={Navbar} setNavbar={setNavbar} />

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}