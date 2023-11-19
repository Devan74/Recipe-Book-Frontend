import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.getUserById(userId).then((data) => setUser(data));
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>

      <h3>Recipes Created by {user.username}</h3>
      {user.recipes.length === 0 ? (
        <p>No recipes created by this user.</p>
      ) : (
        <ul>
          {user.recipes.map((recipe) => (
            <li key={recipe._id}>
              <p>{recipe.title}</p>
              <p>{recipe.ingredients.join(', ')}</p>
              <p>{recipe.instructions}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserProfile;
