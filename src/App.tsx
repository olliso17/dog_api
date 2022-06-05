import Container from 'components/container/Container';
import Dogs from 'components/dogs/Dogs';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <Container className='title-dogs'><h1>Raças de Cachorro</h1></Container>
        <Container className='body-dogs'><Dogs></Dogs></Container>
    </div>
  );
}

export default App;
