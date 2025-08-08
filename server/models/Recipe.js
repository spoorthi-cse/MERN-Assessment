
const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe'); // adjust path if needed

router.post('/api/recipes', async (req, res) => {
  try {
    const { title, ingredients, instructions } = req.body;

    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
    });

    await newRecipe.save();
    res.status(201).json({ message: 'Recipe created successfully', recipe: newRecipe });
  } catch (error) {
    console.error('Error saving recipe:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

