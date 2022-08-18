import React from 'react';
import Kanye from "./Kanye";
import Bitcoin from "./BitCoin";

function App() {
  return (
    <div className="App">

        <h1>This webpage was created to test multiple APIs.</h1>

        <div className="SectionContainer">

            <Kanye />
            <Bitcoin />

        </div>


    </div>
  );
}

export default App;
