import React from 'react';
import { Providers } from './Providers/index';
import Projects from './Containers/Projects';

function App() {
  return (
    <Providers>
        <Projects />
    </Providers>
  );
}

export default App;