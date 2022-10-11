import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './landing.js';
import List from './view-my-decks';
import Cards from './cards-page';
// import UpdateForm from './components/update-form.js';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/deck-lists" element={<List />} />
        <Route path="/view-all-cards" element={<Cards />} />



      </Routes>
    </BrowserRouter>
  )
}
export default App
