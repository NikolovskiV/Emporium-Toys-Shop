import React from 'react';
import GamesCard from './GamesCard';

const GamesGalery = ({ toys, showAllGames }) => {
  const numberOfVisibleRows = showAllGames ? Math.ceil(toys.length / 5) : 1;

  return (
    <div className="toy-gallery">
      {toys.slice(0, numberOfVisibleRows * 5).map((toy, index) => (
        <GamesCard
          key={index}
          name={toy.name}
          imageUrl={toy.imageUrl}
          price={toy.price}
        />
      ))}
    </div>
  );
};

export default GamesGalery;
