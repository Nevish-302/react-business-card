import logo from './logo.svg';
import './App.css';
import React from 'react'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <Profile />
      <Content />
      <Footer />     
    </div>
  );
}

export default App;
