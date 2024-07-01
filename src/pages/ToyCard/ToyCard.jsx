import React, { useState } from 'react';
import './toys.css';

const ToyCard = ({ id, name, imageUrl, price, details }) => {
  const [showModal, setShowModal] = useState(false);

  const handleBuyClick = () => {
    alert(`You have bought ${name}`);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="toy-card">
      <img
        src={imageUrl}
        alt={name}
        onClick={toggleModal} // Toggle modal when image is clicked
        style={{ cursor: 'pointer' }}
      />
      <h4>{name}</h4>
      <p id="price">{price} $</p>
      {/* <p id="details">{details}</p> */}
      <div className="button-container">
        <button className="buy-button" onClick={handleBuyClick}>
          Buy
        </button>
        <button className="info-button" onClick={toggleModal}>
          Info
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2>{name}</h2>
            <img
              src={imageUrl}
              alt={name}
              style={{ maxWidth: '50%', maxHeight: '50%' }}
            />
            <p id="details">{details}</p>
            {''}
            <p id="price">{price} $</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToyCard;
