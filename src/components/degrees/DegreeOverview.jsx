import React, { useState, useRef } from 'react';
import { Degrees } from '../data';
import { Link } from 'react-router-dom';

function DegreeOverview() {
    const categories = ['bachelors', 'masters', 'diploma', 'certification'];

    const getCategoryCount = (category) => {
        return Degrees.filter(degree => degree.type === category).length;
    };

    const getFieldCount = (category, field) => {
        return Degrees.filter(degree => degree.type === category && degree.field === field).length;
    };

    const getFieldsForCategory = (category) => {
        return [...new Set(Degrees.filter(degree => degree.type === category).map(degree => degree.field))];
    };

    const [expandedCategory, setExpandedCategory] = useState(null);
    const [expandedField, setExpandedField] = useState(null);
    const categoryRefs = useRef({});

    const toggleCategory = (category) => {
        setExpandedCategory(expandedCategory === category ? null : category);
        setExpandedField(null);
        if (categoryRefs.current[category]) {
            categoryRefs.current[category].scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleField = (field) => {
        setExpandedField(expandedField === field ? null : field);
    };

    return (
        <section className="bg-[#800000]/5 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* <div className="text-center mb-12">
                    <h1 className="text-4xl font-semibold text-[#800000]">Degree Overview</h1>
                    <p className="text-gray-700 mt-4">Explore the variety of courses we offer across different fields and categories.</p>
                </div> */}

                <div className="lg:ps-6 text-center lg:text-left mb-6">
                    <h1 className="text-4xl font-semibold lg:underline underline-offset-4 text-[#800000]">Degree Overview</h1>
                    <p className="text-gray-700 mt-4">Explore the variety of courses we offer across different fields and categories.</p>
                </div>

                {/* <div class="flex flex-col px-6">
                    <div class="h-1 bg-[#800000]/10 rounded overflow-hidden">
                        <div class="w-24 h-full bg-[#800000]"></div>
                    </div>
                    <div class="flex flex-wrap sm:flex-row flex-col py-6">
                        <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Degree Overview</h1>
                        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Explore the variety of courses we offer across different fields and categories.</p>
                    </div>
                </div> */}

                <div className={`p-6 grid ${expandedCategory != null ? "lg:grid-cols-1" : "lg:grid-cols-2"} gap-6`}>
                    {categories.map(category => (
                        <div key={category} className="mb-4" ref={el => categoryRefs.current[category] = el}>
                            <div
                                className="cursor-pointer p-4 bg-[#800000] text-white rounded-lg flex justify-between items-center"
                                onClick={() => toggleCategory(category)}
                            >
                                <h2 className="text-lg lg:text-xl font-bold capitalize">{category} - ({getCategoryCount(category)})</h2>
                                <span className='text-2xl' >{expandedCategory === category ? '-' : '+'}</span>
                            </div>
                            {expandedCategory === category && (
                                <div className="mt-4 lg:ml-4">
                                    <div className={`grid lg:grid-cols-2 gap-4`}>
                                        {getFieldsForCategory(category).map(field => (
                                            <div key={field} className="mb-2">
                                                <div
                                                    className="cursor-pointer p-2 font-semibold bg-[#800000]/10 rounded-lg flex justify-between items-center"
                                                    onClick={() => toggleField(field)}
                                                >
                                                    <h3 className="text-base lg:text-lg text-[#800000] capitalize">{field} - ({getFieldCount(category, field)})</h3>
                                                    <span className='text-[#800000]' >{expandedField === field ? '-' : '+'}</span>
                                                </div>
                                                {expandedField === field && (
                                                    <div className="mt-2 ml-4">
                                                        <ul className="list-disc list-inside">
                                                            {Degrees.filter(degree => degree.type === category && degree.field === field).map(degree => (
                                                                <li key={degree.id} className="text-gray-700 text-sm lg:text-base mb-1">{degree.title} - <Link to={`/contact/${btoa(Degrees.indexOf(degree))}`} className='hover:underline'>consult</Link></li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DegreeOverview;