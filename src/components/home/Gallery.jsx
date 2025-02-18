import React from 'react';

function Gallery() {
    const images = [
        { src: "https://www.pagalguy.com/wp-content/uploads/2018/10/FF19963065D94D19.jpg", name: "University 1" },
        { src: "https://studyatuniversity.com/wp-content/uploads/2023/12/Indian-Institute-Of-Technology-Madras-Iitm-In-India.jpg", name: "IIT Madras" },
        { src: "https://media.tacdn.com/media/attractions-content--1x-1/0b/17/3a/e1.jpg", name: "Oxford University" },
        { src: "https://cdn.getyourguide.com/img/location/5c10eb2e55553.jpeg/88.jpg", name: "King's College Chapel" },
        { src: "https://futuresabroad.com/wp-content/uploads/2019/07/Canada-university-of-toronto-2727241-Image-by-maplelearning-from-Pixabay.jpg", name: "University of Toronto" },
        { src: "https://d3d0lqu00lnqvz.cloudfront.net/media/media/2b7f1364-6c18-4b8d-a208-0aac26b4f5fe.jpg", name: "McGill University" },
        { src: "https://images.dailyhive.com/20180606115422/ubc1.jpg", name: "University of British" },
        { src: "https://www.heidelberg.edu/sites/default/files/images/hero-images/Fall-visit5.jpg", name: "Heidelberg University" },
        { src: "https://www.visit-niedersachsen.com/var/storage/images/_aliases/full/media/01-data-neu/bilder/hmtg/niedersachsen/g%C3%B6ttingen/aula-der-universit%C3%A4t-g%C3%B6ttingen2/18063269-2-ger-DE/Aula-der-Universit%C3%A4t-G%C3%B6ttingen.jpg", name: "Georg August University" },
        { src: "https://wallpaperaccess.com/full/9411643.jpg", name: "University 10" }
    ];

    return (
        <section className="py-12 px-5 lg:px-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-semibold text-[#800000] mb-4">Explore and Study at Top Universities across the World</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">Discover the beauty and diversity of our global campuses through our gallery. Each image captures the essence of our vibrant academic communities.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mx-auto md:grid-cols-4">
                <div className="relative group col-span-2 row-span-2 md:col-start-3 md:row-start-1">
                    <img src="https://www.pagalguy.com/wp-content/uploads/2018/10/FF19963065D94D19.jpg" alt="University 1" className="w-full h-full hover:brightness-75 transition-all rounded shadow-sm max-h-[21rem] dark:bg-gray-500 aspect-square" />
                    <div className="absolute top-0 right-0 bg-[#800000] text-white text-xs font-semibold px-2 py-1 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity">
                        Indian Institute of Science
                    </div>
                </div>
                {images.slice(1).map((image, index) => (
                    <div key={index} className="relative group">
                        <img src={image.src} alt={image.name} className="w-full h-full hover:brightness-75 transition-all rounded shadow-sm max-h-40 dark:bg-gray-500 aspect-square" />
                        <div className="absolute top-0 right-0 bg-[#800000] text-white text-xs font-semibold px-2 py-1 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity">
                            {image.name}
                        </div>
                    </div>
                ))}
                <div className="relative group col-span-2 row-span-2 md:col-start-1 md:row-start-3">
                    <img src="https://wallpaperaccess.com/full/9411643.jpg" alt="University 10" className="w-full h-full hover:brightness-75 transition-all rounded shadow-sm max-h-[21rem] dark:bg-gray-500 aspect-square" />
                    <div className="absolute top-0 right-0 bg-[#800000] text-white text-xs font-semibold px-2 py-1 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity">
                    IIT Roorkee
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;