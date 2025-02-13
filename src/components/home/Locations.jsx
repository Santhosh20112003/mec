import React from 'react'

function Locations() {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-12 py-12 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#800000]">Explore Our Global Locations</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Discover our campuses and programs across the globe. Each location offers unique opportunities and experiences.</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="relative border-2 h-56 border-gray-200 rounded-lg overflow-hidden">
                        <img alt="Sydney Opera House" class="w-full brightness-90 h-full object-cover object-center" src="https://images.ctfassets.net/8bbwomjfix8m/4JPy3pOa68sep0wljz7NpQ/a814f15ca9b545b59746d9eb8ceb5cee/Australia___3_.jpg" />
                        <div class="absolute top-0 right-0 bg-white bg-opacity-75 p-2 rounded-bl-lg">
                            <h2 class="tracking-widest text-sm title-font font-medium text-[#800000]">Australia</h2>
                        </div>
                    </div>
                    <div class="relative border-2 h-56 border-gray-200 rounded-lg overflow-hidden">
                        <img alt="Canada's skyline at night" class="w-full brightness-90 h-full object-cover object-center" src="https://images.ctfassets.net/8bbwomjfix8m/5MLjK11Pj548vCWde6hTzc/a63428eb3079ea19ba7921be499d2db4/Six_dream_Destination_-_CA.jpg" />
                        <div class="absolute top-0 right-0 bg-white bg-opacity-75 p-2 rounded-bl-lg">
                            <h2 class="tracking-widest text-sm title-font font-medium text-[#800000]">Canada</h2>
                        </div>
                    </div>
                    <div class="relative border-2 h-56 border-gray-200 rounded-lg overflow-hidden">
                        <img alt="Ireland's historic building" class="w-full brightness-90 h-full object-cover object-center" src="https://images.ctfassets.net/8bbwomjfix8m/SyYd3jQulmINpvOuCujeY/42a3e2f004231462452b636b6c5bdd7c/Six_dream_Destination_-_UK.jpg" />
                        <div class="absolute top-0 right-0 bg-white bg-opacity-75 p-2 rounded-bl-lg">
                            <h2 class="tracking-widest text-sm title-font font-medium text-[#800000]">Ireland</h2>
                        </div>
                    </div>
                    <div class="relative border-2 h-56 border-gray-200 rounded-lg overflow-hidden">
                        <img alt="Auckland, New Zealand" class="w-full brightness-90 h-full object-cover object-center" src="https://images.ctfassets.net/8bbwomjfix8m/505NcVMGhiWUtRI7OD3Nae/dc3fb92e60ac0e6a3d6b10fa9cbb89ee/Six_dream_Destination_-_US.jpg" />
                        <div class="absolute top-0 right-0 bg-white bg-opacity-75 p-2 rounded-bl-lg">
                            <h2 class="tracking-widest text-sm title-font font-medium text-[#800000]">New Zealand</h2>
                        </div>
                    </div>
                    <div class="relative border-2 h-56 border-gray-200 rounded-lg overflow-hidden">
                        <img alt="London" class="w-full brightness-90 h-full object-cover object-center" src="https://images.ctfassets.net/8bbwomjfix8m/1os5RVGdwJPdMesKnRxSN5/c9360cf676b6ca5fcaf39b9f6e8e6cc4/Six_dream_Destination_-_IR.jpg" />
                        <div class="absolute top-0 right-0 bg-white bg-opacity-75 p-2 rounded-bl-lg">
                            <h2 class="tracking-widest text-sm title-font font-medium text-[#800000]">United Kingdom</h2>
                        </div>
                    </div>
                    <div class="relative border-2 h-56 border-gray-200 rounded-lg overflow-hidden">
                        <img alt="United States" class="w-full brightness-90 h-full object-cover object-center" src="https://images.ctfassets.net/8bbwomjfix8m/61Oito9wJvxiLRNrtjhQLW/4ec2165d58dffcaf2dbfdeb553a207cb/Study-in-Newzealand.jpg" />
                        <div class="absolute top-0 right-0 bg-white bg-opacity-75 p-2 rounded-bl-lg">
                            <h2 class="tracking-widest text-sm title-font font-medium text-[#800000]">United States</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Locations