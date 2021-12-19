import React, { FC } from 'react';
import { GlobalFontStyles } from './css/fonts';
import './App.css';
import Home from './pages/Home';

const App: FC = () => {
  return (
    <>
      <GlobalFontStyles />
      <Home />
    </>
  );
};

export default App;
