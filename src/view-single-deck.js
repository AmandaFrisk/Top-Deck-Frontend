//imports
import React, {Component} from 'react'
import './index.css';
// import Nav2 from './components/nav2';
//import DeckList from './components/deck-list';
// import UpdateForm from './components/update-form.js';


import baseUrl from "./baseUrl";

// if (process.env.NODE_ENV === 'development') {
//   baseUrl = 'http://localhost:3002'}

class Deck extends Component {
  constructor(props) {
    super(props)
    this.state = {

  name: ''
    }
  }

  changeDeckName = (event) => {
    this.props.onChange(
      { [event.target.name]: event.target.value  }
    );
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
  event.preventDefault();
  this.setState({
    name: '',
  });
  this.props.onChange({
    name: '',
  })
}

editDeckClick=(deckId)=>{
   fetch(`${baseUrl}/deck/${deckId}`, {
     method: "PUT"
     // will need to give this a body to update the name to the new name
   })
     .then((response) => response.json())
     .then((data) => console.log(data));
 }

 render(){
 return (
    <>
     {/*<Nav2 />*/}
   <h1>{this.props.deck}</h1>

   {/* Delete needs to be applied to each card */}
  {/* <div>
    <form
    onSubmit={()=>
      this.editDeckClick('deckId')}>
    <input
    name = 'name'
    placeholder ='ENTER NEW DECK NAME'
    value = {this.state.name}
    id = 'deckId'
    onChange = { (event)=>{
      this.setState({
        // this will keep our input field up to date
        name: event.target.value
      })
      console.log(this.state.name)
    }
  }
   />
    <label htmlFor='deckId'> Deck Name</label>
    </form>
  </div>*/}

   {/*<div>
    <DeckList />
   </div>*/}
   </>
 );
}
}

export default Deck;
