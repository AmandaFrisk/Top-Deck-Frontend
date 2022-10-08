//imports
import React, {Component} from 'react'
import './index.css';
import Nav1 from './components/nav1'
// import Decks from './components/my-decks';
import Deck from './view-single-deck'

class List extends Component {
 render(){
 return (
    <>
     <Nav1 />
 <h1 className='welcome'>WELCOME POKEMON CHAMPION</h1>
   <div>
    <Deck />
   </div>
   </>
 );
}
}

export default List;
