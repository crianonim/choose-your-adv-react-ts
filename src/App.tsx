import React from 'react';
import './App.css';
import GameChooser from './GameChooser';

const App: React.FC = () => {
  const url="http://localhost:9000/api"
  return (
    <div className="App">
      <GameChooser url={url}/>
    </div>
  );
}

export default App;
