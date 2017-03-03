import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollableAnchor from 'react-scrollable-anchor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ScrollableAnchor id={'section1'}>
          <Header />
        </ScrollableAnchor>
        <ScrollableAnchor id={'about'}>
          <About />
        </ScrollableAnchor>
        <ScrollableAnchor id={'projects'}>
          <Projects />
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <Contact />
        </ScrollableAnchor>
        <Footer />
      </div>
    );
  }
}

export default App;
