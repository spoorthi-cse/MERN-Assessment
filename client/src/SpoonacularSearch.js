import React, { useState } from 'react';
import axios from 'axios';

const SpoonacularSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            query,
            number: 5,
            apiKey: '0e976a8fef72424c8d41f08b3180f723', // 🔁 Replace this with your real key
          },
        }
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>🔍 Search Recipes (Spoonacular API)</h2>
      <input
        type="text"
        placeholder="Enter dish name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <button onClick={handleSearch}>Search</button>

      <div style={{ marginTop: '1rem' }}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '1rem' }}>
            <h4>{recipe.title}</h4>
            <img src={recipe.image} alt={recipe.title} width="200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpoonacularSearch;
