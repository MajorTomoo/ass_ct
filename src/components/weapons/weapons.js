/* eslint-disable linebreak-style */
import React from 'react';
import './weapons.css';
import box from '../../imgs/box.png';
import numbers from '../../imgs/numbers.png';
import firespells from '../../imgs/fire_spells.png';
import icespells from '../../imgs/ice_spells.png';
import poisonspells from '../../imgs/poison_spells.png';
import finalspells from '../../imgs/final_spells.png';

function Weapons() {
  return (
    <div className="app-weapons" style={{ textAlign: 'center' }}>
      <div className="weapon-intro" style={{ width: '600px', margin: '0 auto' }}>
        <h1 style={{ color: '#1FCF8E', fontSize: '35px' }}> Our Weapons </h1>
        <p style={{ color: 'white', fontSize: '18px' }}>

          “ What language is thine, O sea? “ “The language of eternal question.“
          “What language is thy answer, O sky?“ “The language of eternal silence.
          “Once we dreamt that we were strangers.

        </p>
      </div>
      <div className="box-numbers">
        <div style={{ display: 'inline-block' }}><img src={box} alt="box" style={{ width: '700px' }} /></div>
        <div style={{ display: 'inline-block' }}><img src={numbers} alt="numbers" style={{ width: '500px' }} /></div>
      </div>
      <div className="spells">
        <div className="fire-spells">
          <img src={firespells} alt="fire" />
        </div>
        <div className="ice-spells">
          <img src={icespells} alt="ice" />
        </div>
        <div className="poison-spells">
          <img src={poisonspells} alt="poison" />
        </div>
        <div className="final-spells">
          <h1 style={{ color: '#F7F77C', fontSize: '22px', fontWeight: '700' }}> Final Spells </h1>
          <img src={finalspells} alt="final-spells" />
        </div>
      </div>
    </div>

  );
}

export default Weapons;
