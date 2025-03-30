import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import toast, { Toaster } from "react-hot-toast";
import { Degrees } from "../data";

function Contact1({ id }) {
  let data = {};
  try {
    data = atob(id);
    console.log(data);
  } catch (error) {
    data = '';
    toast.remove();
    toast.error("Unable to fetch the detail.");
  }

  const countries = Country.getAllCountries();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    city: "",
    phone: "",
    message: data ? `Hi, I'm consulting regarding ${data}` : "",
    consent: false,
    contactConsent: false,
  });

  useEffect(() => {
    if (selectedCountry) {
      const countryStates = State.getStatesOfCountry(selectedCountry);
      setStates(countryStates);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      const stateCities = City.getCitiesOfState(selectedCountry, selectedState);
      setCities(stateCities);
    }
  }, [selectedState, selectedCountry]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameRegex = /^[A-Za-z]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!nameRegex.test(formData.firstName)) {
      toast.error("First name can only contain letters.");
      return;
    }

    if (!nameRegex.test(formData.lastName)) {
      toast.error("Last name can only contain letters.");
      return;
    }

    if (formData.phone && !phoneRegex.test(formData.phone)) {
      toast.error("Phone number must be exactly 10 digits.");
      return;
    }

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.country ||
      !formData.state ||
      !formData.city ||
      !formData.consent ||
      !formData.contactConsent
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    e.target.submit();
  };

  return (
    <section className="py-12 bg-[#800000]/5">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 place-content-center gap-12">
          <div className="bg-white p-10 shadow rounded-lg">
            <h2 className="text-3xl font-bold tracking-tight text-[#800000] mb-6">
              Get Counselling Today!
            </h2>
            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/ba503b75013e0767e550dfe09ef869be"
              method="POST"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-900">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    autoFocus
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border focus:border-[#800000] focus:ring-[#800000]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border focus:border-[#800000] focus:ring-[#800000]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">
                    Country
                  </label>
                  <select
                    name="country"
                    className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border focus:border-[#800000] focus:ring-[#800000]"
                    value={selectedCountry}
                    onChange={(e) => {
                      setSelectedCountry(e.target.value);
                      handleChange(e);
                    }}
                    required
                  >
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                      <option key={country.isoCode} value={country.isoCode}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">
                    State
                  </label>
                  <select
                    name="state"
                    className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border focus:border-[#800000] focus:ring-[#800000]"
                    value={selectedState}
                    onChange={(e) => {
                      setSelectedState(e.target.value);
                      handleChange(e);
                    }}
                    required
                  >
                    <option value="">Select a state</option>
                    {states.map((state) => (
                      <option key={state.isoCode} value={state.isoCode}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">
                    City
                  </label>
                  <select
                    name="city"
                    className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border focus:border-[#800000] focus:ring-[#800000]"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a city</option>
                    {cities.map((city) => (
                      <option key={city.name} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="">
                  <label className="block text-sm font-medium text-gray-900">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 p-1.5 block w-full rounded-md border border-gray-300 focus:border-[#800000] focus:ring-[#800000]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-900">
                    Councelling Context
                  </label>
                  <textarea
                    name="message"
                    placeholder="Enter your councelling context"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border focus:border-[#800000] focus:ring-[#800000]"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="focus:ring-[#800000] h-4 w-4 text-[#800000] border-gray-300 rounded accent-[#800000]"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="consent"
                        className="font-medium text-gray-900"
                      >
                        I would like to receive updates and offers from MEC
                      </label>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2 -mt-2">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="contactConsent"
                        name="contactConsent"
                        type="checkbox"
                        checked={formData.contactConsent}
                        onChange={handleChange}
                        className="focus:ring-[#800000] h-4 w-4 text-[#800000] border-gray-300 rounded accent-[#800000]"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="contactConsent"
                        className="font-medium text-gray-900"
                      >
                        Please contact me by phone, email or SMS to assist with
                        my enquiry
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-left">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#800000] hover:bg-[#600000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800000]"
                >
                  Avail Your Counselling
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
}

export default Contact1;
