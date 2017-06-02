import React from 'react';
import Header from './Header';
import './App.css';
import SubHeader from './SubHeader';
import SubSubHeader from './SubSubHeader';
import Paragraph from './Paragraph';

function App(props) {
  return (
    <div>
    <Header />
      <h1 className="app-header">Hello React</h1>
      <SubHeader />
      <SubSubHeader />
      <Paragraph />
    </div>
  );
}

export default App;
