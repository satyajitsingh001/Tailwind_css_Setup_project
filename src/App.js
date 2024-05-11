import React from "react";
import icon1 from "./assets/reading.png";
import icon2 from "./assets/graduates.png";
import icon3 from "./assets/credit.png";
import icon4 from "./assets/requirements.png";
import icon5 from "./assets/cv (1).png";
import icon6 from "./assets/abilities.png";
import icon7 from "./assets/medal.png";

const App = () => {
  return (
    <div className=" bg-slate-900">
      {/* navbar goes here */}
      <nav className=" w-full h-14 bg-indigo-300 flex justify-between px-4 items-center">
        <div className=" text-2xl font-bold text-indigo-700 ">
          Pw Skills
        </div>
        <ul className=" font-semibold md:flex hidden">
          <li className=" mx-[10px] cursor-pointer">Home</li>
          <li className=" mx-[10px] cursor-pointer">About</li>
          <li className=" mx-[10px] cursor-pointer">Contact</li>
        </ul>

        <div className=" hidden md:block font-bold bg-indigo-700 px-2 py-2 text-white cursor-pointer  rounded">
          Login/Signup
        </div>

        <div className=" md:hidden ">
          <a href="#" className=" text-4xl">
            &#8801;
          </a>
        </div>
      </nav>
      {/* navbar ends here */}

      {/* image section */}
      <header className=" w-full h-auto">
        <img
          className=" w-full hidden md:block"
          src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg"
          alt="img"
        />
        <img
          className=" w-full md:hidden"
          src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg"
          alt="img"
        />
      </header>
      {/* image section end */}

      {/* student section */}
      <div className=" w-100 h-auto flex flex-wrap flex-col items-center p-10 text-center">
        <div className=" w-100 h-auto flex flex-wrap flex-col items-center">
          <p className=" text-indigo-600 font-bold text-3xl md:text-4xl text-center">
            "Pure Hardwork , No shortcuts !"
          </p>
          <div className=" w-36 h-1  border-b-4 border-yellow-400 mt-2 rounded-2xl md:m-4 mb-12 "></div>
        </div>

        <div className=" w-full flex flex-wrap justify-evenly mt-10">
          <div className=" w-46 flex flex-col  items-center mb-12">
            <img className=" w-40 h-40" src={icon1} alt="icon" />
            <p className=" text-3xl font-bold text-white mt-2 ">600+</p>
            <p className="text-3xl font-bold text-gray-500">
              Differnet coursess
            </p>
          </div>
          <div className=" w-46 flex flex-col  items-center mb-12">
            <img className=" w-40 h-40" src={icon2} alt="icon" />
            <p className=" text-3xl font-bold text-white mt-2 ">700,000+</p>
            <p className="text-3xl font-bold text-gray-500">Student Enroll</p>
          </div>
          <div className=" w-46 flex flex-col  items-center mb-12">
            <img className=" w-40 h-40" src={icon3} alt="icon" />
            <p className=" text-3xl font-bold text-white mt-2 ">10,000+</p>
            <p className="text-3xl font-bold text-gray-500">
              Successfull Transation
            </p>
          </div>
        </div>
      </div>
      {/* student section ends */}

      {/* product section */}
      <div className=" w-100 h-auto flex flex-wrap flex-col items-center p-10 text-center">
        <div className=" w-full h-auto flex flex-wrap flex-col items-center">
          <p className=" text-indigo-600 font-bold text-3xl md:text-4xl text-center">
            "Our Products !"
          </p>
          <div className=" w-36 h-1  border-b-4 border-yellow-400 mt-2 rounded-2xl md:m-4 mb-12 "></div>

          <div className=" w-[90%] flex flex-wrap h-auto justify-around mt-10">
            <div className=" w-64 flex flex-col items-center mb-12 border-white border-2 p-2 rounded-xl ">
              <img src={icon4} alt="img" className=" h-40 w-40" />
              <p className=" text-3xl fon  text-white">Skill lab</p>
              <p className=" text-xl fon  text-gray-500">
                supercharge your project development with our robust lab .
              </p>
            </div>
            <div className=" w-64 flex flex-col items-center mb-12 ">
              <img src={icon5} alt="img" className=" h-40 w-40" />
              <p className=" text-3xl fon  text-white">Job Portal</p>
              <p className=" text-xl fon  text-gray-500">
                supercharge your project development with our robust lab .
              </p>
            </div>
            <div className=" w-64 flex flex-col items-center mb-12 ">
              <img src={icon6} alt="img" className=" h-40 w-40" />
              <p className=" text-3xl fon  text-white">Experience Portal</p>
              <p className=" text-xl fon  text-gray-500">
                supercharge your project development with our robust lab .
              </p>
            </div>
            <div className=" w-64 flex flex-col items-center mb-12">
              <img src={icon7} alt="img" className=" h-40 w-40" />
              <p className=" text-3xl fon  text-white">Hall of fame</p>
              <p className=" text-xl fon  text-gray-500">
                supercharge your project development with our robust lab .
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* product section end */}

      <footer className=" bg-black w-full px-4 text-white pt-8 flex flex-col md:flex-row justify-between md:px-12"></footer>
    </div>
  );
};

export default App;
