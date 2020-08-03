import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./containers/Layout"
import Card from "./components/card"
function App() {
  return (
    <>
      <Layout >
        <Card>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        </Card>
      </Layout>

    </>
  );
}

export default App;
