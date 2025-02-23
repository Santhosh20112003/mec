import React from 'react';

function Gallery() {
    const images = [
        { src: "https://ik.imagekit.io/vituepzjm/MEC/Universities/Indian-Institute-Of-Technology-Madras-Iitm-In-India.jpg?updatedAt=1739900083351", name: "IIT Madras" },
        { src: "https://ik.imagekit.io/vituepzjm/MEC/Universities/anna-uni?updatedAt=1740160767110", name: "Anna University" },
        { src: "https://college4u.in/wp-content/uploads/2019/07/vitvellorec4u.in_.jpg", name: "Vellore Institute of Technology" },
        { src: "https://www.jnu.ac.in/main/sites/files/jnu/styles/ow_large_feature/public/admin-build.jpg?itok=RyROwWxv", name: "Jawaharlal Nehru University" },
        { src: "https://www.guidanceforever.org/wp-content/uploads/2023/10/sathyabama-institute-of-science-and-technology-chennai-featured.jpg", name: "Sathyabama University" },
        { src: "https://www.sastra.edu/images/sastra/newbuildingAUG15.jpg", name: "Sastra University" },
        { src: "https://images.shiksha.com/mediadata/images/1719317026phpTmdOdl.jpeg", name: "SRM University" },
        { src: "https://qs-igauge.blr1.cdn.digitaloceanspaces.com/image2.jpg", name: "VELS University" },
    ];

    return (
        <section className="py-12 px-5 lg:px-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-semibold text-[#800000] mb-4">Explore and Study at Top Universities in INDIA</h1>
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