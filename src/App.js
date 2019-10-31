import React from 'react';
import AddressSearch from './AddressSearch.jsx'
import './App.css';

function App() {

  const debugAddress = (address) => {
    console.dir(address)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Hansel />
        <p>
          That Hansel, he is SO hot right now!
        </p>
        <AddressSearch onPlaceChanged={debugAddress}/>
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
