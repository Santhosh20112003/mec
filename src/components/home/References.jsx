import React from 'react'

function References() {
    return (
        <section className="bg-gray-50">
            <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="md:flex md:items-end md:justify-between">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold tracking-tight text-[#800000] sm:text-5xl">
                            Read reviews from Our Trusted Voices
                        </h2>

                        <p className="mt-6 max-w-lg leading-relaxed text-gray-900">
                            Our customers love us! Read what they have to say below. We strive to provide the best service and experience for all our clients.
                        </p>
                    </div>

                    <a
                        href="#"
                        className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-[#800000] px-5 py-3 text-[#800000] transition hover:bg-[#800000] hover:text-white md:mt-0"
                    >
                        <span className="font-medium"> Read all reviews </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4 rtl:rotate-180"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </a>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <blockquote data-aos="fade-up" className="flex h-full flex-col justify-between bg-white p-6 shadow-lg rounded-lg sm:p-8">
                        <div>
                            <div className="flex gap-0.5 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="size-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                ))}
                            </div>

                            <div className="mt-4">
                                <p className="text-2xl font-bold text-[#800000] sm:text-3xl">Excellent Service</p>

                                <p className="mt-4 leading-relaxed text-gray-900">
                                    The team was incredibly professional and attentive. They went above and beyond to ensure our satisfaction. Highly recommend!
                                </p>
                            </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium text-gray-900 sm:mt-6">
                            &mdash; Kumaresan Ramasamy
                        </footer>
                    </blockquote>

                    <blockquote data-aos="fade-up" data-aos-delay="100" className="flex h-full flex-col justify-between bg-white p-6 shadow-lg rounded-lg sm:p-8">
                        <div>
                            <div className="flex gap-0.5 text-yellow-500">
                                {[...Array(4)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="size-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                ))}
                                <svg
                                    className="size-5 text-yellow-100"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                </svg>
                            </div>

                            <div className="mt-4">
                                <p className="text-2xl font-bold text-[#800000] sm:text-3xl">Highly Recommend</p>

                                <p className="mt-4 leading-relaxed text-gray-900">
                                    Amazing experience from start to finish. The staff was friendly and the service was top-notch. Will definitely be back!
                                </p>
                            </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium text-gray-900 sm:mt-6">
                            &mdash; Santhosh 
                        </footer>
                    </blockquote>

                    <blockquote data-aos="fade-up" data-aos-delay="200" className="flex h-full flex-col justify-between bg-white p-6 shadow-lg rounded-lg sm:p-8">
                        <div>
                            <div className="flex gap-0.5 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="size-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                ))}
                            </div>

                            <div className="mt-4">
                                <p className="text-2xl font-bold text-[#800000] sm:text-3xl">Outstanding Quality</p>

                                <p className="mt-4 leading-relaxed text-gray-900">
                                    The quality of service and attention to detail was outstanding. I felt valued and appreciated as a customer. Thank you!
                                </p>
                            </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium text-gray-900 sm:mt-6">
                            &mdash; Juhanitha Saaini
                        </footer>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}

export default References