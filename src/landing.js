//imports
import { Link } from 'react-router-dom';
import './App.css';
import './index.css';




const Landing = () => {
    return (
        <div className='landing-div'>
            <div className='landing-logo-div'>
                <img className='logo' src='/images/Logo.png' alt='Top Deck Logo'/>
            </div>
             <div className='landing-info-div'>
            <h2 className='description'>Build your own Pokemon decks from a database of Pokemon cards!</h2>
              <h3 >  This includes cards from the base deck through Sword and Shield.</h3>
            </div>
            <div className='click-here-div' >
            <Link to='/deck-lists' className='click-text'>CLICK HERE TO GET STARTED</Link>
            </div>
        </div>
    )
}

export default Landing