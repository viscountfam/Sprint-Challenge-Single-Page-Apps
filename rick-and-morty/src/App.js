import React, { useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import CharacterTable from './components/CharacterTable'
import CharacterCard from './components/CharacterCard'
import './App.css';

function App() {
  return (
    <>
    <Switch>
      <Route path="/Characters/:id">
        <CharacterCard />
      </Route>
      <Route path="/Characters">
        <CharacterTable />
      </Route>
      <Route exact path="/">
        <Welcome />
      </Route>
    </Switch>
    </>
  );
}

export default App;
