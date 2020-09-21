import React from 'react';
import { Providers } from './Providers/index';
import Projects from './Containers/Projects';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <Providers>
      <Projects />
    </Providers>
  );
}

export default App;