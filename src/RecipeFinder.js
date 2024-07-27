import React, { useState } from "react";
import axios from "axios";
import "./RecipeFinder.css";
import Footer from "./Footer";

const RecipeFinder = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get("https://api.edamam.com/search", {
        params: {
          q: query,
          app_id: "3c57d522",
          app_key: "44948c9cdaac7e6e4a56f39c464e297a",
        },
      });
      setRecipes(response.data.hits);
      setError(null);
    } catch (error) {
      setError("Failed to fetch recipes. Please try again.");
      setRecipes([]);
    }
  };

  const getFoodEmoji = (label) => {
    const lowerCaseLabel = label.toLowerCase();
    if (lowerCaseLabel.includes("salad")) return "🥗";
    if (lowerCaseLabel.includes("pizza")) return "🍕";
    if (lowerCaseLabel.includes("burger")) return "🍔";
    if (lowerCaseLabel.includes("cake")) return "🍰";
    if (lowerCaseLabel.includes("soup")) return "🥣";
    if (lowerCaseLabel.includes("sushi")) return "🍣";
    if (lowerCaseLabel.includes("chicken")) return "🍗";
    if (lowerCaseLabel.includes("pasta")) return "🍝";
    return "🍽️";
  };

  return (
    <div className="recipe-finder-container">
      <h1>Discover Some Deliciousness: Find your ulitmate recipe of any food!!</h1>
      <input
        type="text"
        placeholder="Search for recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="btn btn-primary">
        Search
      </button>
      {error && <p className="error">{error}</p>}
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe">
            <h2>
              {getFoodEmoji(recipe.recipe.label)} {recipe.recipe.label}
            </h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>{recipe.recipe.source}</p>
            <a
              href={recipe.recipe.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-link"
            >
              View Recipe
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default RecipeFinder;

