import React from 'react';

import { About, Header, Skills } from './containers';
import { Navbar } from './components';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <About />
    </div>
  );
}

export default App;
