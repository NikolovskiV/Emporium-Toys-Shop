import React from 'react';
import AccessoriesCard from './AccessoriesCard';

const AccessoriesGallery = ({ toys, showAllAccessories }) => {
  const numberOfVisibleRows = showAllAccessories
    ? Math.ceil(toys.length / 5)
    : 1;

  return (
    <div className="toy-gallery">
      {toys.slice(0, numberOfVisibleRows * 5).map((toy, index) => (
        <AccessoriesCard
          key={index}
          name={toy.name}
          imageUrl={toy.imageUrl}
          price={toy.price}
        />
      ))}
    </div>
  );
};

export default AccessoriesGallery;
