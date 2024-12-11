import React from 'react';
import { productCategories } from '../../models/ProductsModel';

const ProductsSection = () => {
  return (
    <section className="w-full py-16 px-4 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light text-[#8B4513] mb-12 text-center">Nossos Produtos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <img
                  src={category.image}
                  alt={category.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold text-center px-4">{category.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-center">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-light text-[#8B4513] mb-6">
            Descubra Nosso Mundo de Sabores
          </h2>
          <button className="bg-[#8B4513] text-white px-8 py-3 rounded-full hover:bg-[#A0522D] transition-colors duration-300 transform hover:scale-105">
            Explore Nosso Cardápio Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

