
import React, {Component} from 'react'
import './index.css'
import Nav3 from './components/nav3'
import AllCards from './components/all-cards'
import Add from './components/add-card-btn' // we can move this if needbe
import pokemon from 'pokemontcgsdk'


pokemon.configure({apiKey: `${process.env.REACT_APP_API_KEY}`})

class Cards extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseURL: 'https://api.pokemontcg.io/v2/cards?q=name:',
      pokeName: '',
      searchURL: ''
    }
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({
      searchURL: this.state.baseURL + this.state.pokeName
    }, () => {
      pokemon.card.where({ q: 'name:pikachu', pageSize: 5, page: 1 })
      .then(result => {
        console.log(result.data[0].name)
      })

    })
  }

  render(){
    return (
      <>
        <Nav3 />
        <h1>View All Cards Here!</h1>
        <form onSubmit={this.handleSubmit}>
        <label>Pokemon name: </label>
        <input id='pokeName' type='text' placeholder='Enter Name Here' value={this.state.pokeName} onChange={this.handleChange}/>
        <input type='submit' value='Find Pokemon'/>
        </form>
        { (this.state.poke)
          ?<AllCards poke={this.state.poke}/>
          : ''
        }{/* Add needs to be applied to each card */}

        <Add />

      </>
    )
  }
}

export default Cards
