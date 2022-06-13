import React, { Suspense } from 'react';
import {  fetcher } from './fetcher';
import {SWRConfig} from "swr";
import Weather from './Weather/Weather';

function App() {
  return (
    <div className="App">
      <SWRConfig value={{ fetcher, suspense: true }}>
      <Suspense
        fallback={<h1>Loading Weather...</h1>}
      >
        <Weather />
      </Suspense>
      </SWRConfig>
    </div>
  );
}

export default App;
