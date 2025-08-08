import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/recipes/${id}`);
        setRecipe(res.data);
      } catch (err) {
        console.error('Error fetching recipe details:', err);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{recipe.title}</h2>
      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredients.split(',').map((item, index) => (
          <li key={index}>{item.trim()}</li>
        ))}
      </ul>
      <h4>Instructions:</h4>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
