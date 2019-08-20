import React from 'react';
import Menu from './component/Menu';
import { BrowserRouter } from 'react-router-dom';

import Contents from './component/Contents';


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Contents />
      </BrowserRouter>
    </div>
  );
}

export default App;
