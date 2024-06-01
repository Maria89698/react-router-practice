import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import { PokemonPage } from "./Pages/PokemonPage";
import { ColorPicker } from './ColorPicker/ColorPicker';
import { SignupForm } from './SignupForm/SignupForm';

export const App = () => {

  return (
    <Router>
    <div>
      <ul>
        <li><NavLink to='/color-picker-page'>ColorPicker</NavLink></li>
        <li><NavLink to='/pokemon-page'>Pokemon</NavLink></li>
        <li><NavLink to='/signup-form-page'>SignupForm</NavLink></li>
        <li><NavLink to='/'>Home Page</NavLink></li>
      </ul>
      <Routes>
        <Route path="/color-picker-page" element={<ColorPicker/>} />
        <Route path="/pokemon-page" element={<PokemonPage/>} />
        <Route path="/signup-form-page" element={<SignupForm/>} />
        <Route path="/" element={<div><h1>Home Page</h1></div>} />
      </Routes>
    </div>
    </Router>
  );
};
