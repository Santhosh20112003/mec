import React, { useState, useEffect } from 'react';

function Contact1() {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => {
        fetchCountries();
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            fetchStates(selectedCountry);
        }
    }, [selectedCountry]);

    const fetchCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            setCountries(data);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };

    const fetchStates = async (country) => {
        try {
            const response = await fetch(`https://api.countrystatecity.in/v1/countries/${country}/states`, {
                headers: {
                    'X-CSCAPI-KEY': 'YOUR_API_KEY'
                }
            });
            const data = await response.json();
            setStates(data);
        } catch (error) {
            console.error('Error fetching states:', error);
        }
    };

    return (
        <section className="py-24 bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <h2 className="text-4xl font-bold tracking-tight text-[#800000] sm:text-5xl mb-8">Contact Us</h2>
                        <form>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#800000] focus:ring-[#800000]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#800000] focus:ring-[#800000]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Country</label>
                                    <select
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#800000] focus:ring-[#800000]"
                                        value={selectedCountry}
                                        onChange={(e) => setSelectedCountry(e.target.value)}
                                    >
                                        <option value="">Select a country</option>
                                        {countries.map((country) => (
                                            <option key={country.cca3} value={country.cca2}>
                                                {country.name.common}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">State</label>
                                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#800000] focus:ring-[#800000]">
                                        <option value="">Select a state</option>
                                        {states.map((state) => (
                                            <option key={state.iso2} value={state.name}>
                                                {state.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#800000] focus:ring-[#800000]" />
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <button type="submit" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#800000] hover:bg-[#600000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800000]">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="hidden lg:block">
                        <img src="https://via.placeholder.com/600x800" alt="Contact Us" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact1;