import React, {Component} from 'react'


let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3002'}
  // baseURL = 'https://topdeck-project3.herokuapp.com'
// } else {
//   baseURL = 'https://topdeck-project3.herokuapp.com/'
// }

class UpdateForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      //the way the element is being returned in the data -AF
      name: ''}
  }
  // function called every keystroke -AF
  handleChange = (event) => {
    //grabs value (what user types in) and writes them to state- AF
    this.setState({
      name: event.target.value
    })
  }

  //called when user submits the form - post and update state - AF
  //event so we can call event.preventDefault()- AF
  handleSubmit = (event) => {
    // prevent refresh default- so fetch will run -AF
    event.preventDefault()
    //make fetch to PUT backend using deck id -AF

   // deck._id not being found. Need to pass down from this.props in my-decks.js
    fetch(baseURL + '/decks/:' +  this.state._id, {
      method: 'PUT',
      // body to send data as a string - take data given(this.state.name) and wrap in double quotes to turn it into a json object-AF
      body: JSON.stringify({name: this.state.name}),
      // tell server we're sending application/json data
      headers: {
        'Content-Type': 'application/json'
      }
      // if above works - backend server creates new element and sends us new element -AF
      //parse received string data back to res.json so we can use it
    }).then(res => res.json())
    //now that we have res.Json
    .then(resJson => {
      //set state using resJson
        console.log('UpdateForm - resJson', resJson)

    console.log(this.props)
    })
  }

  render () {
    return (
<form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder="edit deck name"
                />
                <input type="submit" value="EDIT DECK NAME" />
            </form>
        )

  }
}

  export default UpdateForm;
