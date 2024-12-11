import React from 'react';
import Img3 from "../../public/image.png"
import Img4 from "../../public/image2.png"

const FeaturedSection = () => {
  return (
    <section className="w-full py-20 bg-white ">
      <div className="max-w-9xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Bebidas Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl">
            <div className="aspect-w-16 aspect-h-12">
              <img
                src={Img4}
                alt="Bebidas Especiais"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-3xl font-semibold tracking-wider">PRATOS</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Doces Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl">
            <div className="aspect-w-16 aspect-h-12">
              <img
                src={Img3}
                alt="Doces Artesanais"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-3xl font-semibold tracking-wider">DOCES</h3>
                </div>
              </div>
            </div>
          </div>

          {/* E muito mais... Card */}
          <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-2xl shadow-inner">
            <h3 className="text-3xl text-[#34402E] font-light mb-8">CONHEÇA MAIS!</h3>
            <button className="px-8 py-3 bg-[#34402E] text-white rounded-full hover:bg-[#9A856C] transition-all duration-300 transform hover:-translate-y-1">
              VEJA NOSSO CARDÁPIO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;

