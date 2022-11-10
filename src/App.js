import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Allgone from './Components/Allgone/Allgone';
import { useState } from 'react';

function App() {
  const [count , setCount] =useState(0);
  const btncart = () =>{
    setCount(count + 1);
  }

  
  return (
    <div className="app">
      
      <Navbar count= {count}
              
      
      
      
      ></Navbar>
      <Allgone
      btncart = {btncart}
      



      ></Allgone>

    </div>
  );
}

export default App;
