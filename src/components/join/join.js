/* eslint-disable linebreak-style */
import React from 'react';
import './join.css';
import bg from '../../imgs/join_bg.png';

function Join() {
  return (
    <div
      className="app-join"
      style={{
        height: '600px', marginTop: '100px', backgroundImage: `url(${bg})`, backgroundSize: 'cover',
      }}
    >
      <div style={{ width: '500px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '35px', color: 'white', paddingTop: '180px', fontWeight: '700',
        }}
        >
          How to
          <span style={{ color: '#00D2A2' }}> Join?</span>
        </h1>
        <p style={{ color: 'white', fontSize: '20px', fontWeight: '700' }}>
          The mighty desert is burning for the love of a bladeof
          grass who shakes her head and laughs and flies away.

        </p>
      </div>
    </div>

  );
}

export default Join;
