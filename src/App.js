import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './landing.js';
import List from './view-my-decks';
import ViewSingleDeck from './view-single-deck';
import Cards from './cards-page';
// import UpdateForm from './components/update-form.js';
import ViewCard from './card-view';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/deck-lists" element={<List />} />
        <Route path="/view-single-deck" element={<ViewSingleDeck />} />
        <Route path="/view-all-cards" element={<Cards />} />
        {/* <Route path="/update-deck-name" element={<UpdateForm />} /> */}
        <Route path="/view-card" element={<ViewCard />} />
        {/* <Route path="/add-card" element={<AddCardToDeck />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
export default App