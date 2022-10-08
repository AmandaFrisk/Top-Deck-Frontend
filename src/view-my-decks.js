//imports
import React, {Component} from 'react'
import './index.css';
import Nav1 from './components/nav1'
import Decks from './components/my-decks';

class List extends Component {
 render(){
 return (
    <>
     <Nav1 />
 <h1 className='welcome'>WELCOME POKEMON CHAMPION</h1>
   <div>
    <Decks />
   </div>
   </>
 );
}
}
 
export default List;
