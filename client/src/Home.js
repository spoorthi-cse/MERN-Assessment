import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to the Recipe App 👩‍🍳</h1>
      <p>Explore, search, and create delicious recipes!</p>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/spoonacular" style={buttonStyle}>🔍 Search Recipes (Spoonacular)</Link><br /><br />
        <Link to="/recipes" style={buttonStyle}>📒 View My Recipes</Link><br /><br />
        <Link to="/create" style={buttonStyle}>➕ Create New Recipe</Link>
      </div>
    </div>
  );
};

const buttonStyle = {
  display: 'inline-block',
  padding: '12px 24px',
  margin: '8px',
  backgroundColor: '#4CAF50',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '6px',
  fontSize: '16px'
};

export default Home;
