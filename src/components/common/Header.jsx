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
                <nav className="hidden md:flex space-x-6">
                    {links.map((link) => (
                        <Link key={link.name} to={link.link} className={`text-black font-semibold hover:text-gray-700 ${isActive(link.link) ? 'underline underline-offset-2' : ''}`}>
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-black cursor-pointer focus:outline-none">
                        <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
                    </button>
                </div>
            </div>

            {isOpen && (
                <nav className="md:hidden bg-white p-4 mt-2 space-y-2 rounded shadow-md">
                    {links.map((link) => (
                        <Link key={link.name} to={link.link} onClick={() => { setIsOpen(false) }} className={`block text-black font-semibold hover:text-gray-700 py-2 px-4 rounded hover:bg-gray-100 ${isActive(link.link) ? 'underline' : ''}`}>
                            {link.name}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}

export default Header;
