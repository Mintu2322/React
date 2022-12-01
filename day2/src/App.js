// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import Add from './calculator/calculator';
// import express from 'express'; // es- 6
// const express = require('express'); // es 5

function App() {
  // state
  // text - state
  // setText - function to manipulate state
  // useState('')  - empty string is the default value of state num, string, boolean, object, array
  //       state  function
  // const[ashish, minut]
  // const [text, setText] = useState('mintu');
  return (
    <div className="App">
      <Add />
    </div>
  );
}

export default App;