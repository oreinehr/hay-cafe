import React from 'react';
import { FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaSpotify } from 'react-icons/fa';
import Logo from '../../public/hc.png';

const Footer = () => {
  return (
    <footer className="bg-[#34402E] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <img
              src={Logo}
              alt="Hay Cafe Logo"
              className="h-12 w-14 mb-6"
            />
            <p className="text-gray-300 mb-6">
              Servindo momentos especiais com o melhor café e doces artesanais desde 2020.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-[#B19B7D]" />
                <span className="text-gray-300">Rua Pinheiro Machado, 1489, Sala 2 - Taquara RS</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#B19B7D]" />
                <span className="text-gray-300">contato@haycafe.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Horário de Funcionamento</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Segunda a Sábado - 9h às 22h</li>
              <li>Domingos e Feriados das 16h às 22h</li>
            </ul>
          </div>

          {/* Social Media */} 
          <div>
            <h4 className="text-xl font-semibold mb-6">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#B19B7D] hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-[#B19B7D] hover:text-white transition-colors">
                <FaSpotify size={24} />
              </a>
              
              
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Hay Cafe. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

