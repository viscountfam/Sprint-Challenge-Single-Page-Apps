import React, { useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import CharacterTable from './components/CharacterTable';
import Character from './components/Character';
import './App.css';

function App() {
  return (
    <>
    <Navigation />
    <Switch>
      <Route path="/Characters/:id">
        <Character />
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
