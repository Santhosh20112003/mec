import React, { useState, useEffect } from 'react';
import { Degrees } from '../data';
import { TbFilterSearch } from 'react-icons/tb';
import { HiMiniXMark } from 'react-icons/hi2';

function SearchOfDegree() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilters, setSelectedFilters] = useState({
        bachelors: true,
        masters: true,
        diploma: true,
        certification: true,
    });
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredDegrees, setFilteredDegrees] = useState([]);
    const degreesPerPage = 6;

    useEffect(() => {
        const filterDegrees = () => {
            const filtered = Degrees.filter(degree => {
                const matchesSearchTerm = degree.title.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesFilters = Object.keys(selectedFilters).some(filter => selectedFilters[filter] && degree.type === filter);
                return matchesSearchTerm && matchesFilters;
            });
            setFilteredDegrees(filtered);
        };

        filterDegrees();
    }, [searchTerm, selectedFilters]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (e) => {
        const { name, checked } = e.target;
        setSelectedFilters({
            ...selectedFilters,
            [name]: checked,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentPage(1);
    };

    const indexOfLastDegree = currentPage * degreesPerPage;
    const indexOfFirstDegree = indexOfLastDegree - degreesPerPage;
    const currentDegrees = filteredDegrees.slice(indexOfFirstDegree, indexOfLastDegree);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(filteredDegrees.length / degreesPerPage);
    const maxPageButtons = 5;
    const startPage = Math.floor((currentPage - 1) / maxPageButtons) * maxPageButtons + 1;
    const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

    return (
        <section className="text-gray-600 body-font bg-[#800000]/5">
            <div className="container mx-auto px-5 py-12">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-[#800000]">Search for Degrees</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">Find the perfect degree program that suits your interests and career goals. Use the filters below to narrow down your search.</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <div className="mb-4 w-full max-w-3xl flex">
                        <input
                            type="text"
                            placeholder="🔍 Search for degrees, masters, diploma, certification.."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full p-2 px-3  border-s-[1px] border-y-[1px] border-[#800000]/40 bg-white rounded-l-md focus:border-[#800000] focus:ring-[#800000]"
                        />
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="p-3 border-y-[1px] border-e-[1px] border-[#800000] bg-[#800000] rounded-r-md focus:outline-none"
                            >
                                {!dropdownOpen ? <TbFilterSearch className='text-lg text-white' /> : <HiMiniXMark className='text-lg text-white' />}
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-[#800000]/40 rounded-md shadow-lg z-10">
                                    <div className="p-4 grid grid-cols-1 gap-4">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="bachelors"
                                                checked={selectedFilters.bachelors}
                                                onChange={handleFilterChange}
                                                className="form-checkbox h-4 w-4 text-[#800000] accent-[#800000]  rounded"
                                            />
                                            <span className="ml-2 text-gray-700">Bachelors</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="masters"
                                                checked={selectedFilters.masters}
                                                onChange={handleFilterChange}
                                                className="form-checkbox h-4 w-4 text-[#800000] accent-[#800000]  rounded"
                                            />
                                            <span className="ml-2 text-gray-700">Masters</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="diploma"
                                                checked={selectedFilters.diploma}
                                                onChange={handleFilterChange}
                                                className="form-checkbox h-4 w-4 text-[#800000] accent-[#800000] rounded"
                                            />
                                            <span className="ml-2 text-gray-700">Diploma</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="certification"
                                                checked={selectedFilters.certification}
                                                onChange={handleFilterChange}
                                                className="form-checkbox h-4 w-4 text-[#800000] accent-[#800000] rounded"
                                            />
                                            <span className="ml-2 text-gray-700">Certification</span>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* <button type="submit" className="ms-6 inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#800000] hover:bg-[#600000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800000]">
                            Search
                        </button> */}
                    </div>
                </form>
                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {currentDegrees.map((degree, index) => (
                        <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                            <img src={degree.image} alt={degree.title} className="w-full h-40 object-cover rounded-md mb-4" />
                            <h2 className="text-xl line-clamp-1 font-bold text-[#800000]">{degree.title}</h2>
                            <p className="mt-1 text-sm font-semibold text-gray-700">{degree.type.charAt(0).toUpperCase() + degree.type.slice(1)}</p>
                            <p className="mt-1 break-all line-clamp-2 leading-5 text-gray-500 text-sm">{degree.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex justify-center">
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Previous</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.293 4.293a1 1 0 010 1.414L8.414 10l3.879 3.879a1 1 11-1.414 1.414l-4.586-4.586a1 1 0 010-1.414l4.586-4.586a1 1 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(number => (
                            <button
                                key={number}
                                onClick={() => paginate(number)}
                                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === number ? 'bg-[#800000] text-white ' : 'bg-white text-gray-700'} border-gray-300 `}
                            >
                                {number}
                            </button>
                        ))}
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Next</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M7.707 15.707a1 1 0 010-1.414L11.586 10 7.707 6.121a1 1 01-1.414-1.414l4.586 4.586a1 1 010 1.414l-4.586 4.586a1 1 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default SearchOfDegree;