import Image from "next/image";
import React from "react";

export default function AuthoreCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-950"
        />

        <div>
          <h3 className="text-xl font-bold "> Alishba Khalil</h3>
          <p className="text-slate-500"> Passionate Cheif | Food Vloger   </p>
        </div>
      </div>

      <p className="mt-4 text-black leading-relaxed">
      Welcome to my culinary world . I am Alishba Khalil . A passionate cheif with a love for creating mouthwatering dishes that bring people together. With years of experience in the kitchen, I’ve explored diverse cuisines, experimented with flavors, and mastered the art of turning simple ingredients into extraordinary meals. </p>

      <div className="flex space-x-3">
        <a
          href="#"
          className=" mt-4 px-4 py-2  text-white bg-black rounded-md hover:bg-black transition duration-300"
        >
          Twitter
        </a>

        <a
          href="#"
          className=" mt-4 px-4 py-2  text-white bg-black rounded-md hover:bg-black transition duration-300"
        >
          Linkedin
        </a>

        <a
          href="#"
          className=" mt-4 px-4 py-2  text-white bg-black rounded-md hover:bg-black transition duration-300"
        >
          Github
        </a>
      </div>
    </div>
  );
}
