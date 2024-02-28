import React from 'react';
import RainbowCard from './RainbowCard';
import './toys.css';

const RainbowGalery = ({ toys, showAllRowsRainbow }) => {
  const numberOfVisibleRowsRainbow = showAllRowsRainbow
    ? Math.ceil(toys.length / 5)
    : 1;

  return (
    <div className="toy-gallery">
      {toys.slice(0, numberOfVisibleRowsRainbow * 5).map((toy, index) => (
        <RainbowCard
          key={index}
          name={toy.name}
          imageUrl={toy.imageUrl}
          price={toy.price}
        />
      ))}
    </div>
  );
};

export default RainbowGalery;
