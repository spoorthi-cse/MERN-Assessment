import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateRecipe = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/recipes', {
        title,
        ingredients,
        instructions,
      });

      alert('Recipe created successfully!');
      navigate('/recipes'); // Navigate to the recipe list (if you implement that)
    } catch (err) {
      console.error('Error creating recipe:', err);
      alert('Failed to create recipe.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Create New Recipe</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: 500 }}>
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Ingredients (comma separated):</label>
        <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />

        <label>Instructions:</label>
        <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />

        <button type="submit" style={{ marginTop: '1rem' }}>Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
