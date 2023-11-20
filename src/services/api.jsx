const apiUrl = 'https://recipe-books-apps.onrender.com/api/recipes';
const actualToken = localStorage.getItem('token');

const api = {
  getRecipes: async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  },
  getRecipeById: async (id) => {
    const response = await fetch(`${apiUrl}/${id}`);
    const data = await response.json();
    return data;
  },
 

  createRecipe: async (recipeData) => {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${actualToken}`,
      },
      body: JSON.stringify(recipeData),
    });
    const data = await response.json();
    return data;
  },
  // Add more API functions (update, delete, etc.)
};

export const getUserById = async (userId) => {
  const response = await fetch(`https://recipe-books-apps.onrender.com/api/users/${userId}`);
  const data = await response.json();
  return data;
};

export default api;
