import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

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

    const handleSubmit = (e) => {
        e.preventDefault();

        const nameRegex = /^[A-Za-z\s]+$/;
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

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.country || !formData.state || !formData.city || !formData.consent || !formData.contactConsent) {
            toast.error('Please fill in all required fields.');
            return;
        }

        setIsSubmitting(true);

        emailjs.send(
            'service_7z59hsj',        // Replace with your actual service ID
            'template_6m10nbh',       // Replace with your actual template ID
            {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                country: formData.country,
                state: formData.state,
                city: formData.city,
                phone: formData.phone,
                message: formData.message,
            },
            'jMhiislr3unfEl2gg'         // Replace with your actual public key
        ).then(() => {
            toast.success('Form submitted successfully!');
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
        }).catch((error) => {
            console.error(error);
            toast.error('Something went wrong. Please try again.');
        }).finally(() => {
            setIsSubmitting(false);
        });
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
                                    <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" className="mt-1 p-1.5 block w-full rounded-md border border-gray-300" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900">Last Name</label>
                                    <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" className="mt-1 p-1.5 block w-full rounded-md border border-gray-300" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-900">Email</label>
                                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Enter your email" className="mt-1 p-1.5 block w-full rounded-md border border-gray-300" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900">Country</label>
                                    <input type="text" name="country" required value={formData.country} onChange={handleChange} placeholder="Your country" className="mt-1 p-1.5 block w-full rounded-md border border-gray-300" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900">State</label>
                                    <input type="text" name="state" required value={formData.state} onChange={handleChange} placeholder="Your state" className="mt-1 p-1.5 block w-full rounded-md border border-gray-300" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900">City</label>
                                    <input type="text" name="city" required value={formData.city} onChange={handleChange} placeholder="Your city" className="mt-1 p-1.5 block w-full rounded-md border border-gray-300" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900">Phone Number (Optional)</label>
                                    <input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number" className="mt-1 p-1.5 block w-full rounded-md border border-gray-300" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-900">Counselling Context</label>
                                    <textarea name="message" required value={formData.message} onChange={handleChange} placeholder="Describe your counselling need" className="mt-1 p-1.5 block w-full rounded-md border border-gray-300" rows="3"></textarea>
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="flex items-center text-sm font-medium text-gray-900">
                                        <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required className="mr-2 h-4 w-4 border-gray-300 rounded text-[#800000]" />
                                        I would like to receive updates and offers from MEC
                                    </label>
                                </div>
                                <div className="sm:col-span-2 -mt-2">
                                    <label className="flex items-center text-sm font-medium text-gray-900">
                                        <input type="checkbox" name="contactConsent" checked={formData.contactConsent} onChange={handleChange} required className="mr-2 h-4 w-4 border-gray-300 rounded text-[#800000]" />
                                        Please contact me by phone, email or SMS to assist with my enquiry
                                    </label>
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
