import './App.css';
import Header from "./containers/Header"
import GenresList from './pages/GenresList';
import Admin from './pages/admin/Admin';
import { Routes, Route } from "react-router-dom"
import PhotosByGenre from './pages/PhotosByGenre';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<GenresList/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/genre/:id" element={<PhotosByGenre/>} />
      </Routes>
    </div>
  );
}

export default App;
