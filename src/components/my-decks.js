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


console.log('current base URL:', baseURL)

class Decks extends Component {
    //add state
 constructor(props){
  super(props)
  this.state = {
    //expect data to come back as an array? - need to just have the name
name: [],
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
    //setState to be that data
    this.setState({ deck: data.lists });
  console.log(data.lists)
   });
 }

 handleAddDeck = (deck) => {
 console.log(" first deck inside handleAddDeck", deck)
  //copy the entire name array to a new array
  const copyName = [...this.state.name];

  // copyName.unshift(deck);
  copyName.unshift(deck);
  this.setState({name: copyName});
};

handleUpdateDeck = (deck) => {
  console.log("handleUpdateDeck", deck)
 // This a put test

 fetch('https://topdeck-project3.herokuapp.com/decks/'  + deck._id, {
  method: 'PUT',
  body: JSON.stringify({name: 'Winner'}),
    // tell server we're sending application/json data
    headers: {
      'Content-Type': 'application/json'
    }
 }).then(r => {
  this.setState({ winner : true})
 })}
//   fetch(baseURL + '/decks/' + deck._id, {
//     method: 'PUT',
//     // body to send data as a string - take data given(this.state.name) and wrap in double quotes to turn it into a json object-AF
//     body: JSON.stringify({name: this.state.name}),
//     // tell server we're sending application/json data
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }).then(res => res.json())
//   //now that we have res.Json
//   // console.log(res.json())
//  .then ( console.log('inside update.then'))
//  .then(resJson => {
//   const copyNameAgain = [...this.state.lists]
//   const findIndex = this.state.lists.findIndex(
//   (deck) => deck._id === resJson._id)
  
//   copyNameAgain[findIndex].this.state.lists = resJson.name
  
//   this.setState({lists: copyNameAgain })

//         // console.log('resJson', resJson);
// 				// const copyNameAgain = [...this.state.name];
// 				// const findIndex = this.state.name.findIndex(
// 				// 	(deck) => deck._id === resJson._id
// 				// );
// 				// copyNameAgain[findIndex].this.state.name = resJson.name;
        
        
// 				// this.setState({ name: copyNameAgain }); 
       
          
          
        
//     }).catch (error => console.error({'Error': error}))
//     //window.location.reload() this is optional if it works but does not reload
//   }

    // console.log("in handleUpdateDeck .then")
    // resJson => {
    // const copyNameAgain = [...this.state.name]
    // const findIndex = this.state.name.findIndex(deck => deck._id === resJson._id)
    // copyNameAgain[findIndex].this.state.name = resJson.this.state.name 
    // this.setState({name: this.state.name +  " winning deck" })
  //  )
    // }  )
  // }
    // this.setState({name : "Winning Deck" })
  //  }) }
 
  
// handleClick=(deckId)=>{
//     fetch(baseURL + '/decks' + deckId, {
//       method: "DELETE"
//     })
//       .then((response) => response.json())
//       .then((data) => {return data});   }

  

  render(){

  return (
    <>
    <div className='DeckList'>
 <CreateForm  handleAddDeck={this.handleAddDeck}/>
 <div>
 {/* <UpdateForm handleUpdateDeck={this.handleUpdateDeck}/> */}
 </div>
 <h1>DeckList</h1>
  <table>
<tbody>
  { this.state.name.map((deck) => {
      return (
        <>
        <tr key={deck._id} >

        {/* <td>
        <UpdateForm handleUpdateDeck={this.handleUpdateDeck}/>

        </td>  */}
        {/* if value of winner is true render winner */}
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
{/*         
         <tr> 
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
