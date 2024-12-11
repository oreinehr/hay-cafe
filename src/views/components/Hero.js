import React from 'react';
import Img2 from "../../public/haycafe2.webp"

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <img
          src={Img2}
          alt="Hay Cafe Background"
          className="w-full h-full object-cover filter brightness-50"
        />
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-8xl font-bold text-center leading-tight tracking-wider mb-8">
          BEM-VINDO AO<br />
          HAY CAFE
        </h1>
        <p className="text-white text-xl text-center max-w-2xl mb-12">
        Culinária com um toque Argentino 🇦🇷.
        </p>
        <button className="bg-[#394833] border-2 border-[#394833] text-white px-8 py-3 rounded-full hover:bg-transparent transition-colors duration-200 transform hover:scale-105">
          Conheça Nosso Menu
        </button>
      </div>
    </div>
  );
};

export default Hero;

