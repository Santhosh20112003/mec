import React, { useState, useEffect } from 'react';

function SearchOfDegree() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilters, setSelectedFilters] = useState({
        bachelors: true,
        masters: true,
        phd: true,
        engineering: true,
        medicine: true,
        certification: true,
    });
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredDegrees, setFilteredDegrees] = useState([]);
    const degreesPerPage = 6;

    const Degrees = [
        {
            title: 'B.Sc. in Hotel and Catering Management',
            type: 'bachelors',
            mode: 'Full Time',
            duration: 3,
            field: 'hospitality',
            image: 'https://placehold.co/600x400',
            desc: "This course provides students with comprehensive knowledge and skills required for the hospitality and catering industry. It covers areas such as food and beverage management, hospitality operations, and event planning. Graduates can pursue careers in hotels, resorts, restaurants, and catering companies."
        },
        {
            title: 'B.Sc. in Maritime Operations',
            type: 'bachelors',
            mode: 'Full Time',
            duration: 3,
            field: 'maritime studies',
            image: 'https://placehold.co/600x400',
            desc: "This course focuses on the management and operational aspects of maritime activities. Students learn about navigation, cargo handling, maritime law, and safety procedures. Graduates can work in shipping companies, ports, maritime organizations, and logistics firms."
        },
        {
            title: 'B.Sc. in Hotel and Catering Management (Lateral Entry)',
            type: 'bachelors',
            mode: 'Full Time',
            duration: 2,
            field: 'hospitality',
            image: 'https://placehold.co/600x400',
            desc: "This lateral entry course is designed for students with a relevant diploma or equivalent qualification. It provides advanced knowledge in hospitality and catering management, covering topics such as food production, hospitality marketing, and customer service. Graduates can advance their careers in the hospitality industry."
        },
        {
            title: 'B.Sc. in Biotechnology',
            type: 'bachelors',
            mode: 'Full Time',
            duration: 3,
            field: 'biotechnology',
            image: 'https://placehold.co/600x400',
            desc: "This course offers an in-depth understanding of the principles and applications of biotechnology. It includes subjects like genetics, molecular biology, bioinformatics, and industrial biotechnology. Graduates can pursue careers in research, pharmaceuticals, agriculture, and environmental science."
        },
        {
            title: 'B.Sc. in Visual Communication',
            type: 'bachelors',
            mode: 'Full Time',
            duration: 3,
            field: 'mass communication',
            image: 'https://placehold.co/600x400',
            desc: "This course explores the various forms of visual media and communication. Students learn about graphic design, photography, video production, and digital media. Graduates can work in advertising agencies, media companies, publishing houses, and film production studios."
        },
        {
            title: 'B.Sc. in Computer Science',
            type: 'bachelors',
            mode: 'Full Time',
            duration: 3,
            field: 'computer science',
            image: 'https://placehold.co/600x400',
            desc: "This course covers the fundamentals of computer science, including programming, algorithms, data structures, and software development. Students also study topics like artificial intelligence, cybersecurity, and database management. Graduates can pursue careers in software engineering, IT consulting, and system administration."
        },
        {
            title: 'B.Sc. in Microbiology',
            type: 'bachelors',
            mode: 'Full Time',
            duration: 3,
            field: 'microbiology',
            image: 'https://placehold.co/600x400',
            desc: "This course focuses on the study of microorganisms and their roles in various environments. Students learn about microbial physiology, genetics, immunology, and pathogenic microbiology. Graduates can work in healthcare, pharmaceuticals, food industry, and environmental science."
        },
        {
            title: 'B.Sc. in Biochemistry',
            type: 'bachelors',
            mode: 'Full Time',
            duration: 3,
            field: 'biochemistry',
            image: 'https://placehold.co/600x400',
            desc: "This course provides a thorough understanding of the chemical processes and substances that occur within living organisms. It includes topics like enzymology, metabolism, molecular biology, and structural biology. Graduates can pursue careers in research, biotechnology, healthcare, and pharmaceuticals."
        },
        {
            title: 'B.Sc. in Nursing',
            type: 'bachelors',
            mode: 'Full Time',
            duration: 4,
            field: 'nursing',
            image: 'https://placehold.co/600x400',
            desc: "This course trains students in the principles and practices of nursing. It covers subjects like anatomy, physiology, pharmacology, and patient care. Graduates can work as registered nurses in hospitals, clinics, community health centers, and nursing homes."
        },
        {
            title: 'B.Sc. in Operation Theatre and Anesthesia Technology',
            type: 'bachelors',
            mode: 'Full Time',
            duration: 3,
            field: 'medical technology',
            image: 'https://placehold.co/600x400',
            desc: "This course focuses on the technical and procedural aspects of operation theatre and anesthesia technology. Students learn about surgical instruments, anesthesia techniques, patient monitoring, and infection control. Graduates can work in hospitals, surgical centers, and healthcare facilities."
        },
        {
            title: 'B.Sc. in Aviation',
            type: 'bachelors',
            mode: 'Full Time',
            duration: 3,
            field: 'aviation',
            image: 'https://placehold.co/600x400',
            desc: "This course covers the fundamentals of aviation, including aerodynamics, aircraft systems, aviation safety, and flight operations. Students also learn about aviation management and air traffic control. Graduates can pursue careers as pilots, aviation managers, and airport operations specialists."
        },
        {
            title: 'B.Sc (Hons) in Agriculture',
            type: 'bachelors',
            mode: 'Full Time',
            duration: 2,
            field: 'agriculture',
            image: 'https://placehold.co/600x400',
            desc: "This course provides comprehensive knowledge of agricultural practices and technologies. It includes subjects like crop science, soil science, agricultural economics, and agribusiness management. Graduates can work in agricultural research, farming, agribusiness, and government agencies."
        },
        {
            title: 'B.Sc. in Computer Science with Artificial Intelligence and Machine Learning',
            type: 'bachelors',
            mode: 'Full Time',
            duration: 3,
            field: 'computer science',
            image: 'https://placehold.co/600x400',
            desc: "This course focuses on computer science with a specialization in artificial intelligence and machine learning. Students learn about machine learning algorithms, neural networks, data analysis, and AI applications. Graduates can pursue careers in AI development, data science, and machine learning engineering."
        },
        {
            title: 'B.Sc. in Radiology and Imaging Technology',
            type: 'bachelors',
            mode: 'Full Time',
            duration: 2,
            field: 'medical technology',
            image: 'https://placehold.co/600x400',
            desc: "This course trains students in the techniques and technologies used in medical imaging. It includes subjects like radiographic techniques, imaging equipment, radiation safety, and diagnostic imaging. Graduates can work as radiologic technologists in hospitals, diagnostic centers, and healthcare facilities."
        },
        {
            title: 'B.Sc. in Cardiac Care Technology',
            type: 'bachelors',
            mode: 'Full Time',
            duration: 4,
            field: 'medical technology',
            image: 'https://placehold.co/600x400',
            desc: "This course provides knowledge and skills related to cardiac care and technology. Students learn about cardiovascular anatomy, cardiac diagnostics, patient care, and cardiovascular interventions. Graduates can work in cardiac care units, hospitals, and cardiovascular clinics."
        },
        {
            title: 'B.Sc. in Aeronautical Science',
            type: 'bachelors',
            mode: 'Full Time',
            duration: 3,
            field: 'aeronautical',
            image: 'https://placehold.co/600x400',
            desc: "This course focuses on the science and technology behind the design and operation of aircraft. It covers subjects like aerodynamics, aircraft systems, flight mechanics, and aerospace materials. Graduates can pursue careers in aerospace engineering, aviation, and defense."
        },
        {
            title: 'B.Sc. in Optometry',
            type: 'bachelors',
            mode: 'Full Time',
            duration: 3,
            field: 'optometry',
            image: 'https://placehold.co/600x400',
            desc: "This course trains students in the field of optometry, including the diagnosis and treatment of eye disorders. It covers subjects like ocular anatomy, visual science, clinical optometry, and contact lens practice. Graduates can work as optometrists in eye clinics, hospitals, and optical centers."
        },
    ];
    

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

    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto px-5 py-12">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-[#800000]">Search for Degrees</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Find the perfect degree program that suits your interests and career goals. Use the filters below to narrow down your search.</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <div className="mb-4 w-full max-w-lg flex">
                        <input
                            type="text"
                            placeholder="Search for degrees..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full p-2 border border-gray-300 rounded-l-md focus:border-[#800000] focus:ring-[#800000]"
                        />
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="p-2 border border-gray-300 bg-white rounded-r-md focus:outline-none"
                            >
                                Filters
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                    <div className="p-4 grid grid-cols-1 gap-4">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="bachelors"
                                                checked={selectedFilters.bachelors}
                                                onChange={handleFilterChange}
                                                className="form-checkbox h-4 w-4 text-[#800000] border-gray-300 rounded"
                                            />
                                            <span className="ml-2 text-gray-700">Bachelors</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="masters"
                                                checked={selectedFilters.masters}
                                                onChange={handleFilterChange}
                                                className="form-checkbox h-4 w-4 text-[#800000] border-gray-300 rounded"
                                            />
                                            <span className="ml-2 text-gray-700">Masters</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="phd"
                                                checked={selectedFilters.phd}
                                                onChange={handleFilterChange}
                                                className="form-checkbox h-4 w-4 text-[#800000] border-gray-300 rounded"
                                            />
                                            <span className="ml-2 text-gray-700">PhD</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="engineering"
                                                checked={selectedFilters.engineering}
                                                onChange={handleFilterChange}
                                                className="form-checkbox h-4 w-4 text-[#800000] border-gray-300 rounded"
                                            />
                                            <span className="ml-2 text-gray-700">Engineering</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="medicine"
                                                checked={selectedFilters.medicine}
                                                onChange={handleFilterChange}
                                                className="form-checkbox h-4 w-4 text-[#800000] border-gray-300 rounded"
                                            />
                                            <span className="ml-2 text-gray-700">Medicine</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="certification"
                                                checked={selectedFilters.certification}
                                                onChange={handleFilterChange}
                                                className="form-checkbox h-4 w-4 text-[#800000] border-gray-300 rounded"
                                            />
                                            <span className="ml-2 text-gray-700">Certification</span>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                        <button type="submit" className=" ms-6 inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#800000] hover:bg-[#600000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800000]">
                            Search
                        </button>
                    </div>
                </form>
                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {currentDegrees.map((degree, index) => (
                        <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                            <img src={degree.image} alt={degree.title} className="w-full h-40 object-cover rounded-md mb-4" />
                            <h2 className="text-xl font-bold text-[#800000]">{degree.title}</h2>
                            <p className="mt-2 text-gray-700">{degree.field}</p>
                            <p className="mt-1 text-sm text-gray-500">{degree.type.charAt(0).toUpperCase() + degree.type.slice(1)}</p>
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
                        {[...Array(Math.ceil(filteredDegrees.length / degreesPerPage)).keys()].map(number => (
                            <button
                                key={number + 1}
                                onClick={() => paginate(number + 1)}
                                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === number + 1 ? 'bg-[#800000] text-white' : 'bg-white text-gray-700'} border-gray-300 hover:bg-gray-50`}
                            >
                                {number + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === Math.ceil(filteredDegrees.length / degreesPerPage)}
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