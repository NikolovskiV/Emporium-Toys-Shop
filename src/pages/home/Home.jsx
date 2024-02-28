import React, { useState } from 'react';
import './home.css';
import ToyGallery from '../ToyCard/ToyGallery';
import toysData from '../../data/toysData';
import rainbowData from '../../data/rainbowData';
import accesoriesData from '../../data/accesoriesData';
import RainbowGalery from '../RainbowCard/RainbowGalery';
import AccessoriesGallery from '../Accessories/AccessoriesGallery';
import GamesGalery from '../Games/GamesGalery';
import gamesData from '../../data/gamesData';

const Home = () => {
  const [showAllRows, setShowAllRows] = useState(false);
  const [showAllRowsRainbow, setShowAllRowsRainbow] = useState(false);
  const [showAllAccessories, setShowAllAccessories] = useState(false);
  const [showAllGames, setShowAllGames] = useState(false);

  const handleViewAllClick = () => {
    setShowAllRows(!showAllRows);
  };

  const handleViewAllClickRainbow = () => {
    setShowAllRowsRainbow(!showAllRowsRainbow);
  };

  const handleViewAllClickAccessories = () => {
    setShowAllAccessories(!showAllAccessories);
  };

  const handleViewAllClickGames = () => {
    setShowAllGames(!showAllGames);
  };

  return (
    <div className="home-container">
      {/* DIV 1 */}
      <div className="home-header">
        <h2>Red & Pink Party - 50% off</h2>
        <div className="home-container-product">
          <ToyGallery toys={toysData} showAllRows={showAllRows} />
        </div>
        <button className="home-button" onClick={handleViewAllClick}>
          {showAllRows ? 'Show less' : 'View all'}
        </button>
      </div>

      {/* DIV 2 */}
      <div className="home-header">
        <h2>Over the Rainbow - up to 70% off</h2>
        <div className="home-container-product">
          <div className="home-container-product">
            <RainbowGalery
              toys={rainbowData}
              showAllRowsRainbow={showAllRowsRainbow}
            />
          </div>
        </div>
        <button className="home-button" onClick={handleViewAllClickRainbow}>
          {showAllRowsRainbow ? 'Show less' : 'View all'}
        </button>
      </div>

      {/* DIV 3 */}
      <div className="home-header">
        <h2>Apparel and Accessories - 40% off</h2>
        <div className="home-container-product">
          <div className="home-container-product">
            <AccessoriesGallery
              toys={accesoriesData}
              showAllAccessories={showAllAccessories}
            />
          </div>
        </div>
        <button className="home-button" onClick={handleViewAllClickAccessories}>
          {showAllAccessories ? 'Show less' : 'View all'}
        </button>
      </div>

      {/* DIV 4 */}
      <div className="home-header">
        <h2>Toys & Games - 40% off</h2>
        <div className="home-container-product">
          <div className="home-container-product">
            <GamesGalery toys={gamesData} showAllGames={showAllGames} />
          </div>
        </div>
        <button className="home-button" onClick={handleViewAllClickGames}>
          {showAllGames ? 'Show less' : 'View all'}
        </button>
      </div>
    </div>
  );
};

export default Home;
