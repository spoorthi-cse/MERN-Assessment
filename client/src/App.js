import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import CreateRecipe from './CreateRecipe';
import RecipeDetail from './RecipeDetail';
import SpoonacularSearch from './SpoonacularSearch'; // optional if using Spoonacular
import Login from './Login';


const App = () => {
  return (
    <Router>
      <nav style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/create" style={{ marginRight: '1rem' }}>Create Recipe</Link>
        <Link to="/search">Search Recipes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/search" element={<SpoonacularSearch />} /> {/* Optional */}
         <Route path="/login" element={<Login />} />
       
      </Routes>
      

    </Router>
  );
};

export default App;
