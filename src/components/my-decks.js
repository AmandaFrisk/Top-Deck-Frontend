//This is imported in view-my-decks.js -AF

//imports
import React, {Component} from 'react'
import CreateForm from "./create-form"
// import { Link } from 'react-router-dom';
// import UpdateForm from './update-form';
// import Cards from '../cards-page'
// import Delete from './delete-card'
let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3002'
} else {
  baseURL = 'https://topdeck-project3.herokuapp.com'
}

let dataS = []

console.log('current base URL:', baseURL)

class Decks extends Component {
    //add state
 constructor(props){
  super(props)
  this.state = {
    //expect data to come back as an array? - need to just have the name
name: [],
//set this as a boolean so we can change it on lines 103- 106
winner: false
}
 }
//lifecycle - only run once when the component is mounted for the first time
componentDidMount(){
  this.getDeck()
}
 getDeck = () =>{
  fetch(baseURL + '/decks')
  //if fetch works 
  .then((res) => {
    //if response is successful return json
    if (res.status === 200) {
     return res.json();
     //else it was not successful
    } else {
     return [];
    }
   })
   .then((data) => {
    console.log("get deck data", data);
<<<<<<< HEAD
    //setState to be that data
    this.setState({ deck: data.lists });
  console.log(data.lists)
=======
    this.setState({ deck: data.decks });
    return dataS = data
>>>>>>> 7baf362 (merge conflicts)
   });
 }

 handleAddDeck = (deck) => {
<<<<<<< HEAD
 console.log(" first deck inside handleAddDeck", deck)
=======

>>>>>>> 7baf362 (merge conflicts)
  //copy the entire name array to a new array
  const copyName = [...this.state.name];

  // copyName.unshift(deck);
  copyName.unshift(deck);
  this.setState({name: copyName});
  console.log(dataS);
};

handleUpdateDeck = (deck) => {
  // console.log("handleUpdateDeck", deck)

 fetch('https://topdeck-project3.herokuapp.com/decks/'  + deck._id, {
  method: 'PUT',
  body: JSON.stringify({name: 'Winner'}),
    // tell server we're sending application/json data
    headers: {
      'Content-Type': 'application/json'
    }
<<<<<<< HEAD
 }).then(r => {
  this.setState({ winner : true})
 })}
=======
  }).then(res => res.json())
  //now that we have res.Json
  // console.log(res.json())
   .then(resJson => {
    const copyNameAgain = [...this.state.name]
    const findIndex = this.state.name.findIndex(deck => deck.name === resJson.name)
    copyNameAgain[findIndex] = resJson
    this.setState({name: copyNameAgain})



    // this.setState({name : "Winning Deck" })
   }) }


// handleClick=(deckId)=>{
//     fetch(baseURL + '/decks' + deckId, {
//       method: "DELETE"
//     })
//       .then((response) => response.json())
//       .then((data) => {return dataS = data});
//   }


>>>>>>> 7baf362 (merge conflicts)

  render(){

  return (
    <>
    <div className='DeckList'>
 <CreateForm  handleAddDeck={this.handleAddDeck}/>

 <h1>DeckList</h1>
  <table>
<tbody>
  { this.state.name.map((deck) => {
      return (
        <>
        <tr key={deck._id} >

        {/* if value of winner is true render winner. User clicks on deck name and deck name is changed to winner */}
        { this.state.winner ? <td
          onClick={()=> this.handleUpdateDeck(deck)}
          >{'winner'}
        </td>: <td
          onClick={()=> this.handleUpdateDeck(deck)}
          >{deck.name}
        </td> }
       </tr>
         {/* <td>
        <Delete onClick={
    ()=>
      this.handleClick(deck._id)
      // take off the quotes on cardId above

    } />
        </td>
       </tr> */}
<<<<<<< HEAD
        
         {/* <tr> 
=======
{/*
         <tr>
>>>>>>> 7baf362 (merge conflicts)
         <td>
          <Cards />
        </td>

         </tr>  */}
         </>
      )
    })

  }
</tbody>
</table>
    </div>

    </>
  );
}
}


  export default Decks;
