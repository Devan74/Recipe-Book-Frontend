import React, { useState, useEffect } from 'react';
import {Routes, Route,Link } from 'react-router-dom';
import Home from './containers/Home';
import RecipeDetails from './components/RecipeDetails';
import RecipeCreate from './containers/RecipeCreate';
import UserProfile from './containers/UserProfile';
import UserRegister from './components/UserRegister';
import UserLogin from './components/UserLogin';
import api from './services/api';
import StartHome from './containers/StartHome';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    api.getRecipes().then((data) => setRecipes(data));
  }, []);

  return (
    <>
    <div>
        <nav class="navbar navbar-dark bg-dark p-2 text-light">
          Recipe Book
          <ul class="d-flex justify-content-end m-2 list-inline " >
            <li class="list-inline-item"><Link class="text-decoration-none text-light" to="/home">Home</Link></li>
            <li class="list-inline-item"><Link class="text-decoration-none text-light" to="/register">Register</Link></li>
            <li class="list-inline-item"><Link class="text-decoration-none text-light" to="/create">Create Recipe</Link></li>
            <li class="list-inline-item"><Link class="text-decoration-none text-light" to="/profile">Profile</Link></li>
          </ul>
        </nav>
        </div>
    
    <Routes>
      
          <Route path="/" element={<StartHome />} />
          <Route path="/home" element={<Home recipes={recipes} />} />
          <Route path="/register" element={<UserRegister/>} />
          <Route path="/login" element={<UserLogin/>} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/create" element={<RecipeCreate/>} />
          <Route path="/recipe/:id" element={(props) => <RecipeDetails {...props} recipes={recipes} />} />
        
      
    </Routes>
    </>
  );
}

export default App;
