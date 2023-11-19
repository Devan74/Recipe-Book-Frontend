import React from 'react';
import { Link } from 'react-router-dom';
//import RecipeList from '../components/RecipeList'

function Home({ recipes }) {
  return (
    <div>
      
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <Link to={`/recipe/${recipe._id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
