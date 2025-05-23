import React from 'react';

function Download() {
  

  return (
    <div className="text-center py-10">
      <h1 className="text-2xl font-bold mb-4">Download our Flyer</h1>
       <a
            href="https://drive.google.com/uc?export=download&id=1tZfqqkHcNAEbFnGp7-c6-x5-sCs632LP"
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