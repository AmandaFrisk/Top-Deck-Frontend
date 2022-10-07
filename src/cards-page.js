
import {useEffect,useState} from 'react'
import './index.css'
import Nav3 from './components/nav3'
import PokeCard from './components/all-cards'
import Add from './components/add-card-btn' // we can move this if needbe
import pokemon from 'pokemontcgsdk'


pokemon.configure({apiKey: `${process.env.REACT_APP_API_KEY}`})

const Cards = () => {
  const [data, setData] = useState([])
  const [pageI, setPage] = useState(1)

useEffect(() => {
  pokemon.card.where({ pageSize: 5, page: pageI })
  .then(result => result.data)
  .then((data) => setData(data))
}, [])

  const search = async () =>  {
    await pokemon.card.where({ pageSize: 5, page: pageI })
    .then(result => result.data)
    .then((data) => setData(data))
 }

 const handleButtonClickF = () => {

     setPage(parseInt(pageI) + 1)
     search()
     console.log(pageI);
 }

 const handleButtonClickB = () => {

     setPage(parseInt(pageI )- 1)
     search()
     console.log(pageI);
 }



    return (
      <>
        <Nav3 />
        <h1>View All Cards Here!</h1>
        <div>
          {!data ? (
                  <h3>browsing...</h3>
              ) : (
                  <div className='card-container'>
                      {data.map((pokemon) => (
                          <PokeCard pokemon={pokemon}></PokeCard>
                      ))}
                  </div>
          )}
        </div>

        <div>
                {pageI == 1 ? ('') : (
                    <button onClick={() => handleButtonClickB("back")} >
                        back
                    </button>
                )}
                <button onClick={() => handleButtonClickF("forward")}>
                    forward
                </button>
            </div>

        <Add />

      </>
    )
  }


export default Cards
