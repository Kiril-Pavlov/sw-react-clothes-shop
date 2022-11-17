import { Route, Routes } from 'react-router';
import './App.css';


import Header from "./components/Header/Header"
import Women from './pages/Home';
import Men from './pages/Men/Men'
import Kids from './pages/Kids/Kids'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Women/>} />
        <Route path='/men' element={<Men />} />
        <Route path='/kids' element={<Kids/>} />
      </Routes>
    </div>
  );
}

export default App;
