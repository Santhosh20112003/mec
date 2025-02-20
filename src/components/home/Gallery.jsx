import React from 'react';

function Gallery() {
    const images = [
        { src: "https://ik.imagekit.io/vituepzjm/MEC/Universities/Indian-Institute-Of-Technology-Madras-Iitm-In-India.jpg?updatedAt=1739900083351", name: "IIT Madras" },
        { src: "https://ik.imagekit.io/vituepzjm/MEC/Universities/e1.jpg?updatedAt=1739900123752", name: "Oxford University" },
        { src: "https://ik.imagekit.io/vituepzjm/MEC/Universities/88.jpg?updatedAt=1739900159679", name: "King's College Chapel" },
        { src: "https://ik.imagekit.io/vituepzjm/MEC/Universities/Canada-university-of-toronto-2727241-Image-by-maplelearning-from-Pixabay.jpg?updatedAt=1739900211014", name: "University of Toronto" },
        { src: "https://ik.imagekit.io/vituepzjm/MEC/Universities/2b7f1364-6c18-4b8d-a208-0aac26b4f5fe.jpg?updatedAt=1739900240952", name: "McGill University" },
        { src: "https://ik.imagekit.io/vituepzjm/MEC/Universities/ubc1.jpg?updatedAt=1739900267600", name: "University of British" },
        { src: "https://ik.imagekit.io/vituepzjm/MEC/Universities/Fall-visit5.jpg?updatedAt=1739900298316", name: "Heidelberg University" },
        { src: "https://ik.imagekit.io/vituepzjm/MEC/Universities/Aula-der-Universit_C3_A4t-G_C3_B6ttingen.jpg?updatedAt=1739900327893", name: "Georg August University" },
    ];

    return (
        <section className="py-12 px-5 lg:px-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-semibold text-[#800000] mb-4">Explore and Study at Top Universities across the World</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">Discover the beauty and diversity of our global campuses through our gallery. Each image captures the essence of our vibrant academic communities.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mx-auto md:grid-cols-4">
                <div data-aos="fade-up" className="relative group col-span-2 row-span-2 md:col-start-3 md:row-start-1">
                    <img src="https://www.pagalguy.com/wp-content/uploads/2018/10/FF19963065D94D19.jpg" alt="University 1" className="w-full h-full hover:brightness-75 object-cover transition-all rounded shadow-sm max-h-[21rem] dark:bg-gray-500 aspect-square" />
                    <div className="absolute top-0 right-0 bg-[#800000] text-white text-xs font-semibold px-2 py-1 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity">
                        Indian Institute of Science
                    </div>
                </div>
                {images.map((image, index) => (
                    <div data-aos="fade-up" data-aos-delay={index*100} key={index} className="col-span-2 md:col-span-1 relative group">
                        <img src={image.src} alt={image.name} className="w-full h-full hover:brightness-75 transition-all object-cover rounded shadow-sm max-h-40 dark:bg-gray-500 aspect-square" />
                        <div className="absolute top-0 right-0 bg-[#800000] text-white text-xs font-semibold px-2 py-1 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity">
                            {image.name}
                        </div>
                    </div>
                ))}
                <div data-aos="fade-up" data-aos-delay={100} className="relative group col-span-2 row-span-2 md:col-start-1 md:row-start-3">
                    <img src="https://wallpaperaccess.com/full/9411643.jpg" alt="University 10" className="w-full h-full object-cover hover:brightness-75 transition-all rounded shadow-sm max-h-[21rem] dark:bg-gray-500 aspect-square" />
                    <div className="absolute top-0 right-0 bg-[#800000] text-white text-xs font-semibold px-2 py-1 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity">
                        IIT Roorkee
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;