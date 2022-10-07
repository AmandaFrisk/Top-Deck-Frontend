//This is imported in view-my-decks.js -AF

//imports
import React, {Component} from 'react'
import CreateForm from "./create-form"
import { Link } from 'react-router-dom';
import UpdateForm from './update-form';
let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3002/'
} else {
  baseURL = 'https://topdeck-project3.herokuapp.com/'
}


console.log('current base URL:', baseURL)

class Decks extends Component {
    //add state
 constructor(props){
  super(props)
  this.state = {
    //expect data to come back as an array? - need to just have the name
name: []
  }
}

//lifecycle - only run once when the component is mounted for the first time
componentDidMount(){
  this.getDeck()
}
 getDeck = () =>{
  fetch(baseURL + 'decks')
  .then((res) => {
    //if successful return json
    if (res.status === 200) {
     return res.json();
    } else {
     return [];
    }
   })
   .then((data) => {
    console.log(data);
    this.setState({ deck: data.decks });
   });
 }

 handleAddDeck = (deck) => {
  //copy the entire name array to a new array
  const copyName = [...this.state.name];

  copyName.unshift(deck);
  this.setState({name: copyName});
};


  render(){
  return (
    <div className='DeckList'>
 <CreateForm  handleAddDeck={this.handleAddDeck}/>
  <table>
<tbody>
  { this.state.name.map(deck=> {
      return (
        <>
        <tr key={deck._id} >
        
          <td>
            <Link to='/view-single-deck'>{deck.name}</Link>
        </td>
        <td>
        <UpdateForm />
        </td>

        </tr>
        </>
      )
    })

  }
</tbody>
</table>
    </div>
  );
}
}


  export default Decks;
