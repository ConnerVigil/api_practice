import React from 'react';
import Kanye from "./Kanye";
import Bitcoin from "./BitCoin";
import NameGuess from "./NameGuess";
import IPAddress from "./IPAddress";

function App() {
  return (
    <div className="App">

        <h1>This webpage was created to test multiple APIs.</h1>

        <div className="SectionContainer">

            <Kanye />
            <Bitcoin />
            <NameGuess />
            <IPAddress />

        </div>


    </div>
  );
}

export default App;
