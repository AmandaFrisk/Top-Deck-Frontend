// using form to add card to decks
import React, {Component} from 'react'
import pokemon from 'pokemontcgsdk'

pokemon.configure({apiKey: `${process.env.REACT_APP_API_KEY}`})

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3002'}
//   baseURL = 'https://topdeck-project3.herokuapp.com'
// } else {
//   baseURL = 'https://topdeck-project3.herokuapp.com/'
// }

class AddCardBtn extends Component {
  constructor(props) {
    super(props)
  //   this.state = {
  //     // from model
  //     name: '',
  //     deckId: '',
  //     image: ''
  //   }
  // }

  // handleChange = (event) => {
  //   this.setState({
  //     // returned data
  //     name: pokemon.name,
  //     deckId: this.state.name[0]._id,
  //     image: pokemon.images.small
  //   })
  // }

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

  handleSubmit = (event) => {
    event.preventDefault()

    console.log(this.state);

    fetch(baseURL + '/cards', {
      method: 'POST',
      body: JSON.stringify({name: pokemon.name}),

      headers: {
        'Content-Type': 'application/json'
      }
    }). then(res => console.log(res.json()))
    .then (resJson => {
      console.log(resJson);
    })
  }

  render () {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
      <input type="submit" value="Add to deck" className='create-submit-btn' />
      </form>
      </>
    )
  }

}




export default AddCardBtn
