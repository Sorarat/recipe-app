import React from 'react'
import './home.css';
import RecipeCard from "../recipecard/recipeCard";
import Search from '../search/Search';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {

  const APP_ID = "072a7d8b";
  const APP_KEY = "523a71111a276320551a0eb6f7f61f7e";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query])

  // Function to fetch recipes based on the search query
  const getRecipes = async () => {
    const response = await fetch (
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };

  // Function to update the search query
  const updateSearch = e => {
    setSearch(e.target.value);
  }

  // Function to handle form submission and perform the search
  const handleSubmit = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div>
      <h1 className="question"> What are you craving today?</h1>
      <Search
        updateSearch = {updateSearch} 
        handleSubmit = {handleSubmit}
      />
      <div className="recipes">
        {recipes.map(recipe => (
        <RecipeCard 
          key = {recipe.recipe.label}
          title = {recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default Home