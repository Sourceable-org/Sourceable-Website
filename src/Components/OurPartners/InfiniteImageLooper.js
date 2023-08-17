import React from 'react';
import './InfiniteImageLooper.css'; // Your custom CSS

function InfiniteImageLooper({ images }) {
  return (
    <div className="infinite-image-looper">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
      
    </div>
  );
}

export default InfiniteImageLooper;
