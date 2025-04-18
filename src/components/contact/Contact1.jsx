import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import toast, { Toaster } from 'react-hot-toast';

function Contact1() {
    const countries = Country.getAllCountries();
    const [selectedCountry, setSelectedCountry] = useState('');
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [cities, setCities] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        state: '',
        city: '',
        phone: '',
        message: '',
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
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nameRegex = /^[A-Za-z\s]+$/; // Allow letters and spaces
        const phoneRegex = /^\d{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!nameRegex.test(formData.firstName)) {
            toast.error('First name can only contain letters.');
            return;
        }

        if (!nameRegex.test(formData.lastName)) {
            toast.error('Last name can only contain letters.');
            return;
        }

        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        if (formData.phone && !phoneRegex.test(formData.phone)) {
            toast.error('Phone number must be exactly 10 digits.');
            return;
        }

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.country || !formData.state || !formData.city || !formData.consent || !formData.contactConsent) {
            toast.error('Please fill in all required fields.');
            return;
        }

        setIsSubmitting(true);
        const webhookUrl = "https://n8n.mayilon.org/webhook/80a4c020-9515-4a6f-8133-b44415761f22"; 
        const formSubmitUrl = "https://formsubmit.co/30f486bf619cbff7a82c8cb2155ed865";
        
        // Create a loading toast that we'll update based on results
        const loadingToast = toast.loading('Submitting your request...');
        
        try {
            // First submit to FormSubmit.co
            const formSubmitResponse = await fetch(formSubmitUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            // Track results separately
            let formSubmitSuccess = formSubmitResponse.ok;
            let webhookSuccess = false;
            
            try {
                // Then submit to your webhook
                const webhookResponse = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                
                webhookSuccess = webhookResponse.ok;
                
                // Show specific alert for webhook status
                if (webhookSuccess) {
                    toast.success('Webhook submission successful!', { id: 'webhook-status' });
                } else {
                    toast.error(`Webhook submission failed: ${webhookResponse.status}`, { id: 'webhook-status' });
                }
            } catch (webhookError) {
                console.error('Webhook error:', webhookError);
                toast.error('Webhook connection failed. Please try again later.', { id: 'webhook-status' });
            }
            
            // Handle overall form submission status
            if (formSubmitSuccess) {
                toast.success('Form submitted successfully!', { id: loadingToast });
                
                // Reset form after successful submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    country: '',
                    state: '',
                    city: '',
                    phone: '',
                    message: '',
                    consent: false,
                    contactConsent: false,
                });
                setSelectedCountry('');
                setSelectedState('');
                setCities([]);
            } else {
                toast.error('Form submission failed. Please try again.', { id: loadingToast });
            }
        } catch (error) {
            console.error('Submission error:', error);
            toast.error('Connection error. Please check your internet connection and try again.', { id: loadingToast });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-12 bg-[#800000]/5">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 place-content-center gap-12">
                    <div className="bg-white p-10 shadow rounded-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-[#800000] mb-6">Get Counselling Today!</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-900">First Name</label>
                                    <input autoFocus type="text" placeholder="Enter your first name" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border focus:border-[#800000] focus:ring-[#800000]" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900">Last Name</label>
                                    <input type="text" placeholder="Enter your last name" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border focus:border-[#800000] focus:ring-[#800000]" required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-900">Email</label>
                                    <input type="email" placeholder="Enter your email address" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border focus:border-[#800000] focus:ring-[#800000]" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900">Country</label>
                                    <select
                                        name="country"
                                        className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border focus:border-[#800000] focus:ring-[#800000]"
                                        value={selectedCountry}
                                        onChange={(e) => {
                                            setSelectedCountry(e.target.value);
                                            handleChange({ target: { name: 'country', value: e.target.value, type: 'select' } });
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
                                    <label className="block text-sm font-medium text-gray-900">State</label>
                                    <select
                                        name="state"
                                        className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border focus:border-[#800000] focus:ring-[#800000]"
                                        value={selectedState}
                                        onChange={(e) => {
                                            setSelectedState(e.target.value);
                                            handleChange({ target: { name: 'state', value: e.target.value, type: 'select' } });
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
                                    <label className="block text-sm font-medium text-gray-900">City</label>
                                    <select name="city" className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border focus:border-[#800000] focus:ring-[#800000]" value={formData.city} onChange={handleChange} required>
                                        <option value="">Select a city</option>
                                        {cities.map((city) => (
                                            <option key={city.name} value={city.name}>
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="">
                                    <label className="block text-sm font-medium text-gray-900">Phone Number (Optional)</label>
                                    <input type="number" placeholder="Enter your phone number" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 p-1.5 block w-full rounded-md border border-gray-300 focus:border-[#800000] focus:ring-[#800000]" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-900">Counselling Context</label>
                                    <textarea name="message" placeholder="Enter your counselling context" value={formData.message} onChange={handleChange} className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border focus:border-[#800000] focus:ring-[#800000]" rows="3" required></textarea>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleChange} className="focus:ring-[#800000] h-4 w-4 text-[#800000] border-gray-300 rounded accent-[#800000]" required />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="consent" className="font-medium text-gray-900">I would like to receive updates and offers from MEC</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-2 -mt-2">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="contactConsent" name="contactConsent" type="checkbox" checked={formData.contactConsent} onChange={handleChange} className="focus:ring-[#800000] h-4 w-4 text-[#800000] border-gray-300 rounded accent-[#800000]" required />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="contactConsent" className="font-medium text-gray-900">Please contact me by phone, email or SMS to assist with my enquiry</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-left">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${isSubmitting ? 'bg-gray-400' : 'bg-[#800000] hover:bg-[#600000]'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800000]`}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Avail Your Counselling'}
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
