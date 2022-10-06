// This is the browser view for all of the cards
import React, {Component} from 'react'


class AllCards extends Component {
  render() {
    return (
      <div className='AllCards'>
        <h1>{this.props.data[0].name}</h1>
      </div>
    )
  }
}

export default AllCards;
