//imports
import React, {Component} from 'react'
import './App.css';
// import Landing from './landing'
// import List from './view-my-decks';
import Deck from './view-single-deck';
import UpdatePg from './update-deck-name-pg';
import CreatePg from './create-a-deck-pg';
//refactor App to be a Class based component since we'll likely need state- AF
class App extends Component {
  render(){
  return (
    <div className='App'>
      {/* <Landing /> */}
     {/* <List /> */}
     {/* <Deck /> */}
     {/* <UpdatePg /> */}
     {/* <CreatePg /> */}
    </div>
  );
}
}

export default App;
