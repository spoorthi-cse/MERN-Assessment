
const express = require("express");
const router = express.Router();
const users = [];

const mongoose = require("mongoose");
const recipeRoutes = require('./models/Recipe');
const cors = require("cors");
const jwt = require("jsonwebtoken");
const Recipe = require("./models/Recipe");
const User = require("./models/User");
require("dotenv").config();
const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/recipeapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));
app.use(recipeRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

const jwtSecret = "secret_key_here";

// Middleware to protect routes
function authenticateToken(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Register
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Registration failed" });
  }
});

module.exports = router;

// Login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ username: user.username }, jwtSecret);
    res.json({ token });
});

// Get recipes
app.get("/recipes", authenticateToken, async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
});

// Add recipe
app.post("/recipes", authenticateToken, async (req, res) => {
    const { title, ingredients, instructions } = req.body;
    const recipe = new Recipe({ title, ingredients, instructions });
    await recipe.save();
    res.json(recipe);
});

app.listen(5000, () => console.log("Server running on port 5000"));
