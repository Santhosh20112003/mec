import { useState } from 'react';
import { FaBars, FaHome, FaInfo, FaServicestack, FaPhone } from 'react-icons/fa';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-blue-700 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-white">Brand</div>
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="flex items-center text-white font-semibold hover:text-gray-300">
                        <FaHome className="mr-1" /> Home
                    </a>
                    <a href="#" className="flex items-center text-white font-semibold hover:text-gray-300">
                        <FaInfo className="mr-1" /> About
                    </a>
                    <a href="#" className="flex items-center text-white font-semibold hover:text-gray-300">
                        <FaServicestack className="mr-1" /> Services
                    </a>
                    <a href="#" className="flex items-center text-white font-semibold hover:text-gray-300">
                        <FaPhone className="mr-1" /> Contact
                    </a>
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <FaBars size={24} />
                    </button>
                </div>
            </div>

            {isOpen && (
                <nav className="md:hidden bg-blue-700 p-4 mt-2 space-y-2 rounded shadow-md">
                    <a href="#" className="flex items-center text-white font-semibold hover:text-gray-300">
                        <FaHome className="mr-2" /> Home
                    </a>
                    <a href="#" className="flex items-center text-white font-semibold hover:text-gray-300">
                        <FaInfo className="mr-2" /> About
                    </a>
                    <a href="#" className="flex items-center text-white font-semibold hover:text-gray-300">
                        <FaServicestack className="mr-2" /> Services
                    </a>
                    <a href="#" className="flex items-center text-white font-semibold hover:text-gray-300">
                        <FaPhone className="mr-2" /> Contact
                    </a>
                </nav>
            )}
        </header>
    );
}

export default Header;
