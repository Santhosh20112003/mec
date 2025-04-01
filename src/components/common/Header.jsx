import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { links } from "../data";

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
            src={
              "https://ik.imagekit.io/vituepzjm/MEC/MEC.png?updatedAt=1739385234767"
            }
            alt="Workflow"
          />
        </Link>
        <nav className="hidden md:flex md:items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              s
              className={`text-black font-semibold hover:text-gray-900 ${
                isActive(link.link) ? "underline underline-offset-2" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-[#800000] transition-all active:scale-90 cursor-pointer rounded-full inline-flex items-center justify-center py-1.5 px-5 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color "
          >
            Get Counseling
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black cursor-pointer focus:outline-none"
          >
            <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white flex  justify-center flex-col p-4 mt-2 space-y-2 rounded shadow-md">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`block text-black font-semibold hover:text-gray-800 py-2 px-4 rounded hover:bg-gray-100 ${
                isActive(link.link) ? "underline underline-offset-2" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => {
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-[#800000] mt-4 cursor-pointer border-dark border rounded-full inline-flex items-center justify-center py-1.5 px-5 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
          >
            Get Counseling
          </Link>
          {/* <div className="relative mt-4">
                        <button 
                            onClick={toggleLangDropdown}
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all flex items-center justify-center"
                            aria-label="Language selector"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                            </svg>
                            <span className="ml-1 text-xs font-bold">{selectedLang.toUpperCase()}</span>
                        </button>
                        
                        {langDropdownOpen && (
                            <div className="mt-2 w-full bg-white rounded-md shadow-lg z-10">
                                <div className="py-1">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                changeLang(lang.code);
                                                setIsOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2 text-sm ${selectedLang === lang.code ? 'bg-gray-100 font-medium' : 'hover:bg-gray-100'}`}
                                        >
                                            {lang.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div> */}
        </nav>
      )}
    </header>
  );
}

export default Header;
