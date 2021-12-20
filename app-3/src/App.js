import React from 'react';
import './App.css';
import StateArray from './components/StateArray';

const list = ['spaghetti','ice cream','sushi','bologna','cheese']

function App() {
  return (
    <div>
      <StateArray list={list}/>
    </div>
  );
}

export default App;
