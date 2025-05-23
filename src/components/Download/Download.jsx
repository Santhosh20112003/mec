import React from 'react';

function Download() {
  

  return (
    <div className="text-center py-10">
      <h1 className="text-2xl font-bold mb-4">Download our Flyer</h1>
       <a
            href="/1.pdf"
            download
            className="font-poppins text-sm font-medium px-4 py-2 bg-accent shadow-md rounded-md bg-[#800000] text-white transition-colors"
            onClick={() => alert('The resume has been downloaded!')}
          >
            Download
          </a>
    </div>
  );
}

export default Download;