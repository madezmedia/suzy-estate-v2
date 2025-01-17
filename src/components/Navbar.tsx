import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              PaidLancer
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition">Pricing</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition">About</a>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
              Get Started Free
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Features</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Pricing</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-purple-600">About</a>
            <button className="w-full text-center bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
              Get Started Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}