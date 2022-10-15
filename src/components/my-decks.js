//This is imported in view-my-decks.js -AF

//imports
import React, {Component} from 'react'
import CreateForm from "./create-form"
// import { Link } from 'react-router-dom';
// import UpdateForm from './update-form';
import Cards from '../cards-page'
// import Delete from './delete-card'
let baseURL = ''

// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3002'
// } else {
  baseURL = 'https://topdeck-project3.herokuapp.com'
// }

let dataS = []

console.log('current base URL:', baseURL)

class Decks extends Component {
    //add state
 constructor(props){
  super(props)
  this.state = {
    //expect data to come back as an array? - need to just have the name
decks: [],
//set this as a boolean so we can change it on lines 103- 106
winner: false,
deleted: ''
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
    // console.log("get deck data", data);
    // //setState to be that data
    // this.setState({ deck: data.lists });
    // console.log(data)
    // return dataS = data.lists
    // if(data === []) {
    //   this.setState({decks: data})
    // } else {
      this.setState({decks: data.lists})
    // }
    return dataS = data.lists
   });
 }

 handleAddDeck = (deck) => {
 console.log(" first deck inside handleAddDeck", deck)
  //copy the entire name array to a new array
  const copyDecks = [...this.state.decks];

  // copyDeck.unshift(deck);
  copyDecks.unshift(deck);
  this.setState({decks: copyDecks});
  console.log(this.state.decks)
};

handleUpdateDeck = (deck) => {
  // console.log("handleUpdateDeck", deck)

 fetch('https://topdeck-project3.herokuapp.com/decks/' + deck._id, {
  method: 'PUT',
  body: JSON.stringify({name: 'Winner'}),
    // tell server we're sending application/json data
    headers: {
      'Content-Type': 'application/json'
    }
 }).then(r => {
  this.setState({ winner : true})
 })}

 handleDelete = (deck) => {
   console.log('inside handle Delete function');
   fetch('https://topdeck-project3.herokuapp.com/decks/' + deck._id, {
     method: 'DELETE'
   })
   .then((response) => this.setState({deleted:true}))
   .then((data) => console.log(data))
 }

  render(){

  return (
    <>
    <div className='DeckList'>
      <CreateForm  handleAddDeck={this.handleAddDeck}/>

      <h1>DeckList</h1>
      <table>
        <tbody>
          { this.state.decks.map((deck) => {
            return (
              <>

                <tr key={deck._id} >
                  {/* {this.state.deleted ? '' : */}
                    {/* <> */}
                    {/* if value of winner is true render winner. User clicks on deck name and deck name is changed to winner */}
                    { this.state.winner ? <td
                      onClick={()=> this.handleUpdateDeck(deck)}
                     >{'winner'}
                      </td>: <td
                      onClick={()=> this.handleUpdateDeck(deck)}
                       >{deck.name}
                      </td> }

                      <td>
                        <button onClick={() => this.handleDelete(deck)} className='create-submit-btn'>DELETE</button>
                      </td>


                      <td>
                       <Cards />
                      </td>
                    {/* </> */}
                  {/* } */}
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </div>

    </>
  );
}
}


  export default Decks;
