/* eslint-disable linebreak-style */
import React from 'react';
import {
  Layout, Menu, Button, message,
} from 'antd';
import logo from '../../imgs/header_logo.png';
import './header.css';

const { Header } = Layout;
function AppHeader() {
  const play = () => {
    message.success('The game begins');
  };
  return (
    <div className="app-header">
      <Header style={{
        backgroundColor: 'rgba(0,0,0,0)',
        height: '110px',
        paddingTop: '20px',
      }}
      >
        <Menu mode="horizontal" style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
          <Menu.Item key="logo">
            <img alt="logo" src={logo} />
          </Menu.Item>
          <Menu.Item key="about-us">
            About us
          </Menu.Item>
          <Menu.Item key="game">
            Game
          </Menu.Item>
          <Menu.Item key="road-map">
            Roadmap
          </Menu.Item>
          <Menu.Item key="news">
            News
          </Menu.Item>
          <div className="header-buttons">
            <Button onClick={play} size="large" type="primary" className="header-play" id="play">
              Play Now
            </Button>
            <Button size="large" type="primary" className="header-whitepaper">
              White Paper
            </Button>
          </div>
        </Menu>
      </Header>
    </div>
  );
}

export default AppHeader;
