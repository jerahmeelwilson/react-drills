import React from 'react';
import logo from './logo.svg';
import './App.css';
import StateArray from './components/StateArray';

const list = ['spaghetti','ice cream','suhsi','bologna','cheese']

function App() {
  return (
    <div>
      <StateArray list={list}/>
    </div>
  );
}

export default App;
