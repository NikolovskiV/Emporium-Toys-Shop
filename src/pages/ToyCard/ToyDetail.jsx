import React from 'react';
import { useParams } from 'react-router-dom';
import './toys.css';

const ToyDetail = ({ toys }) => {
  const { id } = useParams();
  const toy = toys.find((toy) => toy.id === parseInt(id));

  if (!toy) {
    return <h2>Toy not found</h2>;
  }

  return (
    <div className="toy-info">
      <img src={toy.imageUrl} alt={toy.name} />
      <h4>{toy.name}</h4>
      <p id="price">{toy.price} $</p>
    </div>
  );
};

export default ToyDetail;
