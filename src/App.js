//import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import CharactersTable from './components/CharactersTable';
import Form from './components/Form';
import './App.css';



function App() {
  return (
    <div>
      <Header />
      <Form />
      <CharactersTable />
    </div>
  );
}

export default App;
