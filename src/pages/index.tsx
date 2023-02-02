import { motion } from "framer-motion";
import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

const Index: FC = (): ReactElement => {
  return (
    <motion.body animate={{ x: 0 }} initial={{ x: 60 }} className="box">
      <section
        style={{
          fontFamily: "Source Sans Pro",
        }}
        className="leading-normal tracking-normal text-white h-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r animate-gradient-x"
      >
        <nav
          id="header"
          className="fixed w-full z-30 top-0 px-18 py-6 text-white"
        >
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="flex items-center">
              <a
                className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="#"
              >
                Maulana Sodiqin
              </a>
            </div>
            <div className="block lg:hidden pr-4">
              <button
                id="nav-toggle"
                className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                <svg
                  className="fill-white h-6 w-6"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div className="flex justify-center w-full h-full items-center">
          <div className="justify-between w-full px-18 flex gap-y-[100px] h-auto flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-2/5 md:justify-center justify-between items-center md:items-start text-center md:text-left">
              <h1 className="my-4 text-5xl font-bold leading-tight">
                Astronomy Quiz
              </h1>
              <p className="leading-normal text-1xl mb-8">
                Sebuah Quiz yang di buat untuk memenuhi tugas akhir praktikum
                Sistem Multimedia, yang di bangun dengan ReactJS dan UnoCSS,
                Quiz ini akan membahas tentang Trivia Astronomi
              </p>
              <div className="flex gap-x-4">
                <Link to="/auth/login">
                  <span className="bg-white text-gray-500 font-bold  p-4 rounded-lg">
                    Start Quiz
                  </span>
                </Link>
                <Link to="/about">
                  <span className="bg-white text-gray-500 font-bold  p-4 rounded-lg">
                    About Me
                  </span>
                </Link>
              </div>
            </div>
            <img
              className="w-full md:w-[35%] md:z-50 rounded-full"
              src="https://cdn.dribbble.com/users/1063215/screenshots/6085720/saturn.gif"
            />
          </div>
        </div>
      </section>
    </motion.body>
  );
};

export default Index;
