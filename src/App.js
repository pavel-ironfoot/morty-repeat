import { Route, Routes } from 'react-router-dom';
import { CharacterList } from './components/CharacterList';
import { Character } from './components/Character';
import { SearchBy } from './components/SearchBy/SearchBy';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CharacterList />} />
        <Route path='/:id' element={<Character />} />
        <Route path='/search' element={<SearchBy />}/>
      </Routes>
    </div>
  );
}

export default App;
