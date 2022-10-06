//imports
import React, {Component} from 'react'
import './index.css';
import Nav2 from './components/nav2';
import DeckList from './components/deck-list';
import Delete from './components/delete-card';

import baseUrl from "./baseUrl";

class Deck extends Component {
  handleClick=(cardId)=>{
    fetch(`${baseUrl}/cards/${cardId}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
 render(){
 return (
    <>
     <Nav2 />
   <h1>MY DECKS</h1>
    
   {/* Delete needs to be applied to each card */}
   <div>

<Delete onClick={
    ()=>
      this.handleClick("cardId") 
      // take off the quotes on cardId above
    
    } /> 

   </div>
   <div>
    <DeckList />
   </div>
   </>
 );
}
}
 
export default Deck;