
import {useEffect,useState} from 'react'
import './index.css'
import PokeCard from './components/all-cards'
import pokemon from 'pokemontcgsdk'



pokemon.configure({apiKey: `${process.env.REACT_APP_API_KEY}`})

// let baseURL = ''
//
// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3002'}

const Cards = () => {
  const [data, setData] = useState([])
  const [pageI, setPage] = useState(1)

useEffect(() => {
  pokemon.card.where({ pageSize: 3, page: pageI })
  .then(result => result.data)
  .then((data) => setData(data))
}, [])

  const search = async () =>  {
    await pokemon.card.where({ pageSize: 3, page: pageI })
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
        <h1>View All Cards Here!</h1>
        <div>
          {!data ? (
                  <h3>browsing...</h3>
              ) : (
                  <div className='card-container'>
                      {data.map((pokemon) => (
                        <td>
                          <PokeCard pokemon={pokemon}></PokeCard>

                        </td>
                      ))}
                  </div>
          )}
        </div>

        <div>
                {pageI === 1 ? ('') : (
                    <button onClick={() => handleButtonClickB("back")} >
                        back
                    </button>
                )}
                <button onClick={() => handleButtonClickF("forward")}>
                    forward
                </button>
            </div>


      </>
    )
  }


export default Cards
