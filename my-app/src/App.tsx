import React from 'react';
import './App.css';

const App: React.FC = () => {
  const firstName = "Mocanu";
  const lastName = "Loredana";
  const groupData = "CR-221";

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bine ai venit, {firstName} {lastName}</h1>
        <p>Grupa: {groupData}</p>
      </header>
    </div>
  );
};

export default App;
