// this is a single card view that you would see after selecting a card from the card browser view
import React, {Component} from 'react'


class Card extends Component {
  render() {
    return (
      <div className='CardView'>
        {/* info for card to come from API */}
          <h1>This is a pokemon card</h1>
      </div>
    )
  }
}

export default Card;
