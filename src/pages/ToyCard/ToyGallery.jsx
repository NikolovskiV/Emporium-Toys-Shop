import React from 'react';
import ToyCard from './ToyCard';
import './toys.css';

const ToyGallery = ({ toys, showAllRows }) => {
  const numberOfVisibleRows = showAllRows ? Math.ceil(toys.length / 5) : 1;

  return (
    <div className="toy-gallery">
      {toys.slice(0, numberOfVisibleRows * 5).map((toy, index) => (
        <ToyCard
          key={index}
          name={toy.name}
          imageUrl={toy.imageUrl}
          price={toy.price}
          details={toy.details}
        />
      ))}
    </div>
  );
};

export default ToyGallery;
