import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div>
      {images.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Imagen ${index + 1}`}
          style={{ width: '200px', height: '200px', margin: '10px' }}
        />
      ))}
    </div>
  );
};

export default Gallery;
