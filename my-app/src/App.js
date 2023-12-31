import React from 'react';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
