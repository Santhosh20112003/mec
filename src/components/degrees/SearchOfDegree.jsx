import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Degrees } from "../data";
import { TbFilterSearch } from "react-icons/tb";
import { HiMiniXMark } from "react-icons/hi2";
import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

function SearchOfDegree() {
  const { degreeType } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
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
      const searchTerms = searchTerm
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter((term) => term.length > 0);
      const filtered = Degrees.filter((degree) => {
        const matchesFilters = selectedFilters[degree.type];
        if (
          !matchesFilters &&
          Object.values(selectedFilters).some((value) => value)
        ) {
          return false;
        }
        if (searchTerms.length === 0) {
          return true;
        }
        const title = degree.title.toLowerCase();
        const field = degree.field.toLowerCase();
        const desc = degree.desc.toLowerCase();
        const mode = degree.mode.toLowerCase();

        return searchTerms.some(
          (term) =>
            title.includes(term) ||
            field.includes(term) ||
            desc.includes(term) ||
            mode.includes(term)
        );
      });

      setFilteredDegrees(filtered);
      setCurrentPage(1);
    };

    filterDegrees();
  }, [searchTerm, selectedFilters]);

  useEffect(() => {
    if (degreeType) {
      setSelectedFilters({
        bachelors: degreeType === "bachelors",
        masters: degreeType === "masters",
        diploma: degreeType === "diploma",
        certification: degreeType === "certification",
      });
    }
  }, [degreeType]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  // Make sure at least one filter is always selected
  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    const newFilters = {
      ...selectedFilters,
      [name]: checked,
    };

    // Only update if at least one filter remains selected or if we're adding a filter
    if (checked || Object.values(newFilters).some((value) => value)) {
      setSelectedFilters(newFilters);
    }
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
  const currentDegrees = filteredDegrees.slice(
    indexOfFirstDegree,
    indexOfLastDegree
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredDegrees.length / degreesPerPage);
  const maxPageButtons = 5;
  const startPage =
    Math.floor((currentPage - 1) / maxPageButtons) * maxPageButtons + 1;
  const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

  const safeBase64Encode = (str) => {
  
    return btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) =>
        String.fromCharCode(parseInt(p1, 16))
      )
    );
  };

  return (
    <section
      id="search-degree"
      className="text-gray-900 body-font bg-[#800000]/5"
    >
      <div className="mx-auto px-5 py-12">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-[#800000]">
            Search for Degrees
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-900">
            Find the perfect degree program that suits your interests and career
            goals. Use the filters below to narrow down your search.
          </p>
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
                {!dropdownOpen ? (
                  <TbFilterSearch className="text-lg text-white" />
                ) : (
                  <HiMiniXMark className="text-lg text-white" />
                )}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-[#800000]/40 rounded-md shadow-lg z-10">
                  <div className="p-4 grid grid-cols-1 gap-4">
                    {["bachelors", "masters", "diploma", "certification"].map(
                      (filter) => (
                        <label key={filter} className="flex items-center">
                          <input
                            type="checkbox"
                            name={filter}
                            checked={selectedFilters[filter]}
                            onChange={handleFilterChange}
                            className="form-checkbox h-4 w-4 text-[#800000] accent-[#800000] rounded"
                          />
                          <span className="ml-2 text-gray-900">
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                          </span>
                        </label>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
        <div className="md:mt-8 mt-5 grid max-w-7xl mx-auto grid-cols-1 gap-4 md:px-12 md:grid-cols-2 lg:grid-cols-3">
          {currentDegrees.length > 0 ? (
            currentDegrees.map((degree, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                <img
                  onClick={() => handleDialogOpen(degree)}
                  src={degree.image}
                  alt={degree.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2
                  title={degree.title}
                  className="text-xl line-clamp-1 font-bold text-[#800000]"
                >
                  {degree.title}
                </h2>
                <p className="mt-1 text-wsm font-semibold text-gray-900">
                  {degree.type.charAt(0).toUpperCase() + degree.type.slice(1)}
                </p>
                <p className="mt-1 break-all line-clamp-2 leading-5 text-gray-900 text-sm">
                  {degree.desc}
                </p>
                <span className="flex items-center mt-5 justify-start gap-3">
                  <button
                    type="button"
                    onClick={() => handleDialogOpen(degree)}
                    className="p-2 cursor-pointer active:scale-90 transition-all px-3 font-medium rounded-md shadow-sm text-xs bg-[#800000] text-white "
                  >
                    View Details
                  </button>
                  <Link
                    to={`/contact/${safeBase64Encode(degree?.title)}`}
                    onClick={() => {
                      window.scrollY(0);
                    }}
                    type="button"
                    className="p-2 cursor-pointer active:scale-90 transition-all border font-medium rounded-md shadow-sm text-xs text-[#800000] border-[#800000] focus:outline-none"
                  >
                    Consult now
                  </Link>
                </span>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-lg text-gray-700">
                No degrees found matching your search criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedFilters({
                    bachelors: true,
                    masters: true,
                    diploma: true,
                    certification: true,
                  });
                }}
                className="mt-4 px-4 py-2 bg-[#800000] text-white rounded-md hover:bg-[#600000]"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
        <div className="mt-8 flex justify-center">
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <GrLinkPrevious className="text-[#800]" />
            </button>
            {Array.from(
              { length: endPage - startPage + 1 },
              (_, i) => startPage + i
            ).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                  currentPage === number
                    ? "bg-[#800000] text-white "
                    : "bg-white text-gray-900"
                } border-gray-300 `}
              >
                {number}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <GrLinkNext className="text-[#800]" />
            </button>
          </nav>
        </div>
      </div>

      {selectedDegree && (
        <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" />
            <Dialog.Content className="fixed z-[101] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-7xl max-h-[90vh] overflow-hidden rounded-xl shadow-2xl focus:outline-none">
              <div className="flex flex-col md:flex-row h-full bg-white">
                {/* Left side - Image */}
                <div className="relative md:w-2/5 bg-[#800000]">
                  <img
                    src={selectedDegree.image}
                    alt={selectedDegree.title}
                    className="w-full h-48 md:h-full object-cover md:object-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:hidden">
                    <span className="inline-block px-2 py-1 bg-white text-xs font-bold text-[#800000] rounded-md mb-1">
                      {selectedDegree.type.charAt(0).toUpperCase() +
                        selectedDegree.type.slice(1)}
                    </span>
                    <h2 className="text-lg font-bold text-white">
                      {selectedDegree.title}
                    </h2>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="relative flex flex-col md:w-3/5 p-5 md:p-8 max-h-[60vh] md:max-h-[90vh] overflow-y-auto">
                  {/* Close button */}
                  <Dialog.Close asChild>
                    <button className="absolute top-4 right-4 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <HiMiniXMark className="h-5 w-5 text-gray-600" />
                      <span className="sr-only">Close</span>
                    </button>
                  </Dialog.Close>

                  {/* Title section - visible only on md screens */}
                  <div className="hidden md:block mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-[#800000]/10 text-xs font-semibold text-[#800000] rounded-md">
                        {selectedDegree.type.charAt(0).toUpperCase() +
                          selectedDegree.type.slice(1)}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-xs font-medium text-gray-700 rounded-md">
                        {selectedDegree.field}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {selectedDegree.title}
                    </h2>
                  </div>

                  {/* Key details */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#800000]/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-[#800000]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="font-medium text-sm">
                          {selectedDegree.duration || "Varies"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#800000]/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-[#800000]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Mode</p>
                        <p className="font-medium text-sm">
                          {selectedDegree.mode || "Not specified"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-[#800000] font-semibold mb-3 text-sm uppercase tracking-wider">
                      About This Program
                    </h3>
                    <div className="prose prose-sm max-w-none text-gray-600">
                      <p>{selectedDegree.desc}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto pt-5">
                    <Link
                      to={`/contact/${safeBase64Encode(selectedDegree?.title)}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="w-full py-3 px-4 bg-[#800000] text-white text-center font-medium rounded-lg hover:bg-[#700000] shadow-sm transition-all flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      Get Consultation
                    </Link>
                  </div>
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
