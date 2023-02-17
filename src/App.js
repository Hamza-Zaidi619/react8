import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Table from './components/Table';

function App() {
  let arr= [{name:"hamza",semester:3,department:"BSCS"},
  {name:"Abbas",semester:4,department:"Chem"},
  {name:"muhammad",semester:5,department:"Civil"},
  {name:"ali",semester:7,department:"BSCS"},
]

  return (
    <div>
     <Table data={arr} />
    </div>
  );
}

export default App;