import React, { Component } from 'react';
import ViewList from './components/ViewList/ViewList';
import { Route } from 'react-router-dom';
import AddNote from './components/AddNote/AddNote';
import EditNote from './components/EditNote/EditNote';
//import Sidebar from './components/Sidebar/Sidebar';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lambda Notes</h1>
        </header>

        <Route exact path='/notes' component={ViewList} />
        <Route exact path='/Add-Note' component={AddNote} />
        <Route exact path='/Edit-Note/:index' component={EditNote} />
      
      </div>
    );
  }
}

//export default App;
