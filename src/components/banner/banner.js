/* eslint-disable linebreak-style */
import React from 'react';
import './banner.css';
import { Button } from 'antd';
import characters from '../../imgs/characters.png';

function Banner() {
  return (
    <div className="app-banner">
      <div className="banner-left">
        <h1 style={{ color: '#1FCF8E', fontSize: '50px' }}>
          ADCDF HJHGG GAJHAGF
        </h1>
        <p style={{ color: 'white', fontSize: '16px' }}>
          Listen, my heart, to the whispers of the world with which it makes love to you.
          The mystery of creation is like the darkness of night--it is great.
          Delusions of knowledge are like the fog of the morning.
        </p>
        <Button className="banner-button" size="large" type="primary">
          Click to learn more
        </Button>
      </div>
      <div
        className="banner-right"
      />
      <img src={characters} alt="logo" style={{ marginLeft: '200px', width: '650px', height: '600px' }} />
    </div>

  );
}

export default Banner;
