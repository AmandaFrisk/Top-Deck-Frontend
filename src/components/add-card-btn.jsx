// using form to add card to decks
import React, {Component} from 'react'
import pokemon from 'pokemontcgsdk'

pokemon.configure({apiKey: `${process.env.REACT_APP_API_KEY}`})

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3002'}
  // baseURL = 'https://topdeck-project3.herokuapp.com'
// } else {
//   baseURL = 'https://topdeck-project3.herokuapp.com/'
// }

class AddCardBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // from model
      name: '',
      deckId: '',
      image: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      // returned data
      name: pokemon.name,
      deckId: '',
      image: pokemon.images.small
    })
  }



}




export default AddCardBtn
