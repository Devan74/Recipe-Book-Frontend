import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <h2>Recipe List</h2>
      {!recipes || recipes.length === 0 ? (
        <p>No recipes available.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe._id}>
              <Link to={`/recipe/${recipe._id}`}>
                <h3>{recipe.title}</h3>
              </Link>
              <p>{recipe.ingredients.join(', ')}</p>
              <p>{recipe.instructions}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
