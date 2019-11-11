import React from 'react';
import styled from 'styled-components'

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

const RidiculousFrame = styled.div`
  border: 2px solid white;
  padding: 1.0rem;
  border-radius: 1rem;
`

function Hansel() {
  return (
    <RidiculousFrame>
      <img src="hansel.png" alt="You can dere-lickt..."/>
    </RidiculousFrame>
  )
}

export default App;
