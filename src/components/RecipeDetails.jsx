import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function RecipeDetails({ recipes }) {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipes.find((r) => r._id === id);
    if (selectedRecipe) {
      setRecipe(selectedRecipe);
    } else {
      api.getRecipeById(id).then((data) => setRecipe(data));
    }
  }, [id, recipes]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.ingredients.join(', ')}</p>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetails;
