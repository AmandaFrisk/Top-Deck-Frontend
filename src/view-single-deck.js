//imports
import React, {Component} from 'react'
import './index.css';
//import DeckList from './components/deck-list';
import Delete from './components/delete-card';


let baseURL = '';

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3002'}

class Deck extends Component {
  constructor(props) {
    super(props)
    this.state = {

  name: ''
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

  handleClick=(cardId)=>{
    fetch(`${baseURL}/cards/${cardId}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((data) => {return data});
  }
 render(){
 return (
    <>
     {/*<Nav2 />*/}
   <h1>{this.props.deck}</h1>

   {/* Delete needs to be applied to each card */}
   <div>

{('')
  ?<Delete onClick={
    ()=>
      this.handleClick("cardId")
      // take off the quotes on cardId above

    } />
    : ''
  }

   </div>

   {/*<div>
    <DeckList />
   </div>*/}
   </>
 );
}
}

export default Deck;
