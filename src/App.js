/* eslint-disable linebreak-style */
import React from 'react';
import './App.css';
import { Layout } from 'antd';
import AppHeader from './components/header/header';
import Banner from './components/banner/banner';
import Weapons from './components/weapons/weapons';
import Join from './components/join/join';
import topbgImg from './imgs/banner_background.png';

const { Content, Footer } = Layout;
function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <div className="App-top" style={{ height: '800px', backgroundImage: `url(${topbgImg})`, backgroundSize: 'cover' }}>
          <AppHeader />
          <Banner />
        </div>
        <Content style={{ padding: '50px', backgroundColor: '#1C1C1C' }}>
          <Weapons />
          <Join />
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#1C1C1C', color: 'white' }}>@2022 NoName. All Rights Reserved</Footer>
      </Layout>
    </div>
  );
}

export default App;
