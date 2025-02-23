import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Degrees } from '../data';
import { TbFilterSearch } from 'react-icons/tb';
import { HiMiniXMark } from 'react-icons/hi2';
import * as Dialog from "@radix-ui/react-dialog";
import { Link } from 'react-router-dom';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

function SearchOfDegree() {
    const { degreeType } = useParams();
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
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedDegree, setSelectedDegree] = useState(null);
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

    useEffect(() => {
        if (degreeType) {
            setSelectedFilters({
                bachelors: degreeType === 'bachelors',
                masters: degreeType === 'masters',
                diploma: degreeType === 'diploma',
                certification: degreeType === 'certification',
            });
        }
    }, [degreeType]);

    const handleSearchChange = (e) => setSearchTerm(e.target.value);

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

    const handleDialogOpen = (degree) => {
        setSelectedDegree(degree);
        setDialogOpen(true);
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
        <section id="search-degree" className="text-gray-600 body-font bg-[#800000]/5">
            <div className="mx-auto px-5 py-12">
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
                            className="w-full p-2 px-3 border-s-[1px] border-y-[1px] border-[#800000]/40 bg-white rounded-l-md outline-0 focus:border-[#800000] focus:ring-[#800000]"
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
                                        {['bachelors', 'masters', 'diploma', 'certification'].map(filter => (
                                            <label key={filter} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name={filter}
                                                    checked={selectedFilters[filter]}
                                                    onChange={handleFilterChange}
                                                    className="form-checkbox h-4 w-4 text-[#800000] accent-[#800000] rounded"
                                                />
                                                <span className="ml-2 text-gray-700">{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </form>
                <div className="md:mt-8 mt-5 grid grid-cols-1 gap-4 md:px-12 md:grid-cols-2 lg:grid-cols-3">
                    {currentDegrees.map((degree, index) => (
                        <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                            <img src={degree.image} alt={degree.title} className="w-full h-40 object-cover rounded-md mb-4" />
                            <h2 className="text-xl line-clamp-1 font-bold text-[#800000]">{degree.title}</h2>
                            <p className="mt-1 text-sm font-semibold text-gray-700">{degree.type.charAt(0).toUpperCase() + degree.type.slice(1)}</p>
                            <p className="mt-1 break-all line-clamp-2 leading-5 text-gray-500 text-sm">{degree.desc}</p>
                            <span className="flex items-center mt-5 justify-start gap-3">
                                <button type='button' onClick={() => handleDialogOpen(degree)} className="p-2 cursor-pointer active:scale-90 transition-all px-3 font-medium rounded-md shadow-sm text-xs bg-[#800000] text-white ">
                                    View Details
                                </button>
                                <Link to={`/contact/${window.btoa(degree?.id)}`} onClick={() => { window.scrollY(0) }} type='button' className="p-2 cursor-pointer active:scale-90 transition-all border font-medium rounded-md shadow-sm text-xs text-[#800000] border-[#800000] focus:outline-none">
                                    Consult now
                                </Link>
                            </span>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex justify-center">
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Previous</span>
                            <GrLinkPrevious className='text-[#800]' />
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
                            className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Next</span>
                            <GrLinkNext className='text-[#800]' />
                        </button>
                    </nav>
                </div>
            </div>

            {selectedDegree && (
                <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
                    <Dialog.Portal>
                        <Dialog.Overlay className="bg-gray-900/10 bg-opacity-30 z-[100] data-[state=open]:animate-overlayShow fixed inset-0" />
                        <Dialog.Content
                            className="data-[state=open]:animate-contentShow flex items-center justify-center bg-transparent z-[1000] fixed top-[50%] left-[50%] max-h-[80vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] focus:outline-none"
                        >
                            <div className="relative md:border-l-8 md:border-[#800000] flex group p-5 bg-clip-border gap-5 md:rounded-r-xl rounded-xl md:rounded-l-md bg-white text-gray-700 shadow-md w-full max-w-[80vw] flex-col md:flex-row">
                                <Dialog.Close asChild>
                                    <button className="absolute top-3 active:scale-90 transition-all right-3 text-gray-500 hover:text-[#800000]/90 focus:outline-none">
                                        <HiMiniXMark className="h-6 w-6" />
                                    </button>
                                </Dialog.Close>
                                <div className="relative w-full p-2 md:p-4 md:w-2/5 m-0 overflow-hidden md:rounded-r-none rounded-b-none md:rounded-bl-xl bg-clip-border rounded-xl shrink-0">
                                    <img
                                        src={selectedDegree.image}
                                        alt="card-image"
                                        className="w-fit rounded-xl h-full"
                                    />
                                </div>
                                <div className="px-5 flex justify-center flex-col py-3 md:p-6">
                                    <h4 className="block mb-1 text-lg md:text-xl text-center md:text-start antialiased font-bold leading-snug tracking-normal text-[#800000]">
                                        {selectedDegree.title}
                                    </h4>
                                    <h2 className="block mb-3 text-lg text-center md:text-start antialiased font-semibold leading-snug tracking-normal text-[#800000]/80">
                                        {selectedDegree.type.charAt(0).toUpperCase() + selectedDegree.type.slice(1)} - {selectedDegree.field}
                                    </h2>
                                    <p className="block mb-4 text-sm text-center md:text-start md:text-base antialiased font-normal leading-relaxed text-gray-600">
                                        {selectedDegree.desc}
                                    </p>
                                    <span className="flex items-center justify-center md:justify-start gap-5">
                                        <Link to={`/contact/${window.btoa(selectedDegree?.id)}`} onClick={() => { window.screenY(0); }} className="inline-flex active:scale-95 transition-all items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#800000] focus:outline-none">
                                            <i className="fa-arrow-up-right-from-square fas text-sm"></i>{" "}
                                            &nbsp; Consult Now
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            )}
        </section>
    );
}

export default SearchOfDegree;