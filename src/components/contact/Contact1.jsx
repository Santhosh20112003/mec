import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Contact1() {
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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nameRegex = /^[A-Za-z\s]+$/;
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
        const formSubmitUrl = "https://formsubmit.co/mayiloneducation@gmail.com";
        const loadingToast = toast.loading('Submitting your request...');

        try {
            const response = await fetch(formSubmitUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Form submitted successfully!', { id: loadingToast });
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
            } else {
                toast.error('Form submission failed. Please try again.', { id: loadingToast });
            }
        } catch (error) {
            console.error('Submission error:', error);
            toast.error('Connection error. Please try again.', { id: loadingToast });
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
                                    <input autoFocus type="text" name="firstName" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900">Last Name</label>
                                    <input type="text" name="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border" required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-900">Email</label>
                                    <input type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900">Country</label>
                                    <input type="text" name="country" placeholder="Enter your country" value={formData.country} onChange={handleChange} className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900">State</label>
                                    <input type="text" name="state" placeholder="Enter your state" value={formData.state} onChange={handleChange} className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900">City</label>
                                    <input type="text" name="city" placeholder="Enter your city" value={formData.city} onChange={handleChange} className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900">Phone Number (Optional)</label>
                                    <input type="number" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-900">Counselling Context</label>
                                    <textarea name="message" placeholder="Enter your counselling context" value={formData.message} onChange={handleChange} className="mt-1 p-1.5 block w-full rounded-md border-gray-300 border" rows="3" required></textarea>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex items-start">
                                        <input id="consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleChange} className="h-4 w-4 text-[#800000] border-gray-300 rounded accent-[#800000]" required />
                                        <label htmlFor="consent" className="ml-3 text-sm font-medium text-gray-900">I would like to receive updates and offers from MEC</label>
                                    </div>
                                </div>
                                <div className="sm:col-span-2 -mt-2">
                                    <div className="flex items-start">
                                        <input id="contactConsent" name="contactConsent" type="checkbox" checked={formData.contactConsent} onChange={handleChange} className="h-4 w-4 text-[#800000] border-gray-300 rounded accent-[#800000]" required />
                                        <label htmlFor="contactConsent" className="ml-3 text-sm font-medium text-gray-900">Please contact me by phone, email or SMS to assist with my enquiry</label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-left">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white ${isSubmitting ? 'bg-gray-400' : 'bg-[#800000] hover:bg-[#600000]'}`}
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
