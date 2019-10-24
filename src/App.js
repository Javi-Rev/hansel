import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hansel />
        <p>
          That Hansel, he is SO hot right now!
        </p>
      </header>
    </div>
  );
}

function Hansel() {
  return (
    <div>
      <img src="hansel.png" alt="You can dere-lickt..."/>
    </div>
  )
}

export default App;
