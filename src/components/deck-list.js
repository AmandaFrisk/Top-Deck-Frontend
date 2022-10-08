//This is imported in view-single-deck.js -AF

//imports
import React, {Component} from 'react'


class DeckList extends Component {
    render(){
    return (
      <>
      <div className='DeckList'>
    {/* info for single deck list needs to come from db. AF   */}
       <h1>{this.props.deck.Name}</h1>
      </div>
      <div>
        <Cards />
      </div>
      </>
    );
  }
  }

  export default DeckList;
