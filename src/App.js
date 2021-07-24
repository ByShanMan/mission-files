import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import TDashApp from './components/TDashApp';


function App() {
  return (
     <Router>
       <div className="MainContainer">
          <TDashApp />
       </ div>
     </Router>
  );
}

export default App;
