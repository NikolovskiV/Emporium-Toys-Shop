import React from 'react';

const GamesCard = ({ name, imageUrl, price }) => {
  //   const handleBuyClick = () => {
  //     // Implement buy functionality
  //     alert(`You have bought ${name}`);
  //   };

  //   const handleInfoClick = () => {
  //     // Implement displaying product information
  //     alert(`Information about ${name}: Price - ${price}`);
  //   };

  return (
    <div className="toy-card">
      <img src={imageUrl} alt={name} />
      <h4>{name}</h4>
      <p id="price">{price} $</p>
      {/* <div className="button-container">
        <button className="buy-button" onClick={handleBuyClick}>
          Buy
        </button>
        <button className="info-button" onClick={handleInfoClick}>
          Info
        </button>
      </div> */}
    </div>
  );
};

export default GamesCard;
