import React from 'react';
import Img4 from "../../public/croa.png"

const QualitySection = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <img
              src={Img4}
              alt="Doces artesanais Hay Cafe"
              className="w-full rounded-lg shadow-xl"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-white to-transparent" />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <h3 className="text-[#34402E] text-lg font-light tracking-wider">
              COMPROMISSO COM A QUALIDADE
            </h3>
            
            <h2 className="text-4xl text-[#34402E] font-light leading-tight">
              FABRICAÇÃO PRÓPRIA COM<br />
              REPOSIÇÃO DIÁRIA
            </h2>
            
            <div className="space-y-4 text-[#34402E]">
              <p className="text-lg font-medium">
                Nossos processos são otimizados para garantir que todos os produtos 
                sejam entregues fresquinhos para você.
              </p>
              
              <p className="text-[#34402E]">
                Nossas bebidas são preparadas na hora! Nossos pães e doces são 
                produzidos e repostos diariamente. Prezamos pela qualidade e 
                excelência em cada detalhe.
              </p>
            </div>
            
            <button className="mt-8 px-8 py-3 bg-[#34402E] text-white rounded-full hover:bg-[#F2EC9B] transition-all duration-300 transform hover:-translate-y-1">
              CONHEÇA MAIS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;

