import React from 'react';

import { About, Header, Skills } from './containers';
import { Navbar, Contact } from './components';
function App() {
  return (
    <div className="App">
      <Contact/>
      <Navbar />
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;
