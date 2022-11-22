import { Route, Routes } from 'react-router';
import './App.css';

import Header from "./components/Header/Header"
import All from './pages/Home';
import Clothes from "./pages/Clothes/Clothes"
import Tech from "./pages/Tech/Tech"


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/clothes' element={<Clothes />} />
        <Route path='/tech' element={<Tech />} />
      </Routes>
    </div>
  );
}

export default App;
