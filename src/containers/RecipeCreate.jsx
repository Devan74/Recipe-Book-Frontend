import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './RecipeCreate.css';

function RecipeCreate() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipeData = {
      title,
      ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
      instructions,
    };

    const newRecipe = await api.createRecipe(recipeData);

    // Redirect to the new recipe's details page
    navigate("/home");
  };

  return (
    <div className='recipe'>
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label class="form-label">Title:</label>
        <input type="text" class="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label class="form-label">Ingredients (comma-separated):</label>
        <input type="text" class="form-control" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />

        <label class="form-label">Instructions:</label>
        <textarea value={instructions} class="form-control" onChange={(e) => setInstructions(e.target.value)} required />

        <button type="submit" class="btn btn-primary m-2">Create Recipe</button>
      </form>
    </div>
  );
}

export default RecipeCreate;
