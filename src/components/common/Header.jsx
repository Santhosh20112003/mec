import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { links } from '../data';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname.includes(path);

    return (
        <header className="bg-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/home" className="flex-shrink-0">
                    <img
                        className="h-12"
                        src={"https://ik.imagekit.io/vituepzjm/MEC/MEC.png?updatedAt=1739385234767"}
                        alt="Workflow"
                    />
                </Link>
                <nav className="hidden md:flex md:items-center space-x-6">
                    {links.map((link) => (
                        <Link key={link.name} to={link.link} className={`text-black font-semibold hover:text-gray-900 ${isActive(link.link) ? 'underline underline-offset-2' : ''}`}>
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className='bg-[#800000] transition-all active:scale-90 cursor-pointer rounded-full inline-flex items-center justify-center py-1.5 px-5 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color '>
                        Get Counseling
                    </Link>
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-black cursor-pointer focus:outline-none">
                        <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
                    </button>
                </div>
            </div>

            {isOpen && (
                <nav className="md:hidden bg-white flex  justify-center flex-col p-4 mt-2 space-y-2 rounded shadow-md">
                    {links.map((link) => (
                        <Link key={link.name} to={link.link} onClick={() => { setIsOpen(false) }} className={`block text-black font-semibold hover:text-gray-800 py-2 px-4 rounded hover:bg-gray-100 ${isActive(link.link) ? 'underline underline-offset-2' : ''}`}>
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" onClick={() => { setIsOpen(false) }} className='bg-[#800000] mt-4 cursor-pointer border-dark border rounded-full inline-flex items-center justify-center py-1.5 px-5 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
                        Get Counseling
                    </Link>
                </nav>
            )}
        </header>
    );
}

export default Header;
