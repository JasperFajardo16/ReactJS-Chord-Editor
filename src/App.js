import React, { Component } from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Chordeditor from './components/Chordeditor';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <div className="workspace">
        <Chordeditor/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
