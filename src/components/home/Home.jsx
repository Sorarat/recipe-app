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
  const [query, setQuery] = useState("");
  const [preFetchedRecipes, setPreFetchedRecipes] = useState([]);

  
  useEffect(() => {

    if (query) {
      getRecipes();
    }

    else {
      console.log('Component mounted. Fetching prefetched recipes...');
      const preFetchedRecipes = ['Spaghetti Carbonara', 'ice cream', 'spaghetti', 'chocolate cake', 'noodles', 'chicken', 'fish and chips', 'calamari'];
      getMealRecipes(preFetchedRecipes);
      
    }
  }, [query]);

  // Function to fetch recipes when user first enter the site
  const getMealRecipes = async (recipeList) => {
    const fetchedRecipes = await Promise.all(
      recipeList.map(async (recipeName) => {
        const response = await fetch (
          `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
      const data = await response.json();
      return data.hits[0]; //take only the first hit
      })
    );
    setPreFetchedRecipes(fetchedRecipes);
    };

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
    setQuery(e.target.value); // Update query state with the search input value
  }

  // Function to handle form submission and perform the search
  const handleSubmit = e => {
    e.preventDefault();
    // check if search term is not eampty
    if (search.trim() !== "")
    {
      updateSearch(search)
    }
    console.log('Query submitted:', search); // Add this line to verify the query value

  }

  return (
    <div>
      <div className='search-container'>
      <h1 className="question"> Find recipes you love</h1>
      <Search
        updateSearch = {updateSearch} 
        handleSubmit = {handleSubmit}
      />
      </div>
      <div className="recipe-container">
        {query ? (
          <div className="row">
            {recipes.map(recipe => (
              <RecipeCard
                key = {recipe.recipe.label}
                title = {recipe.recipe.label}
                calories={recipe.recipe.calories}
                image = {recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                />
            ))}
          </div>
        ) : (
          <div>
            <h2>You may like</h2>
            <div className='row'>
              {preFetchedRecipes.slice(0,8).map(recipe => (
                <RecipeCard 
                  key = {recipe.recipe.label}
                  title = {recipe.recipe.label}
                  calories= {recipe.recipe.calories}
                  image = {recipe.recipe.image}
                  ingredients= {recipe.recipe.ingredients}
                />
              ))}
            </div>
          </div>
        )}
    </div>
  </div>
  );
};
export default Home