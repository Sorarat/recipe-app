import React from 'react'
import './home.css';
import RecipeCard from "../recipecard/recipeCard";
import Search from '../search/Search';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {

  const APP_ID = "072a7d8b";
  const APP_KEY = "523a71111a276320551a0eb6f7f61f7e";
  const [breakfastRecipes, setBreakfastRecipes] = useState([]);
  const [lunchRecipes, setLunchRecipes] = useState([]);
  const [brunchRecipes, setBrunchRecipes] = useState([]);
  const [dinnerRecipes, setDinnerRecipes] = useState([]);
  const [showMealType, setMealType] = useState(true);
  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  // useEffect(() => {
  //   getRecipes('breakfast');
  //   getRecipes('brunch');
  //   getRecipes('lunch');
  //   getRecipes('dinner');
  // }, [query]);

  useEffect(() => {
    if (query) {
      getRecipes();
      setMealType(false);
    }

    else {
      setMealType(true);
      getMealRecipes('breakfast');
      getMealRecipes('brunch');
      getMealRecipes('lunch');
      getMealRecipes('dinner');
    }
  }, [query]);

  // Function to fetch recipes when user first enter the site
  const getMealRecipes = async (mealType) => {
    const response = await fetch (
      `https://api.edamam.com/search?q=${mealType}&mealType=${mealType}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    switch(mealType) {
      case 'breakfast':
        setBreakfastRecipes(data.hits);
        break;
      case 'brunch':
        setBrunchRecipes(data.hits);
        break;
      case 'lunch':
        setLunchRecipes(data.hits);
        break;
      case 'dinner':
        setDinnerRecipes(data.hits);
        break;
      default:
        break;
    }
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
    setQuery(search);
    console.log('Query submitted:', search); // Add this line to verify the query value

  }

  return (
    <div>
      <h1 className="question"> What are you craving today?</h1>
      <Search
        updateSearch = {updateSearch} 
        handleSubmit = {handleSubmit}
      />
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
            <h2>Breakfast</h2>
            <div className="row">
              {breakfastRecipes.map(recipe => (
              <RecipeCard 
                key = {recipe.recipe.label}
                title = {recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
              ))}
            </div>
            <h2>Brunch</h2>
            <div className="row">
              {brunchRecipes.map(recipe => (
            <RecipeCard 
              key = {recipe.recipe.label}
              title = {recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
              ))}
            </div>
            <h2>Lunch</h2>
            <div className="row">
            {lunchRecipes.map(recipe => (
            <RecipeCard 
              key = {recipe.recipe.label}
              title = {recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
            ))}
            </div>
            <h2>Dinner</h2>
            <div className="row">
              {dinnerRecipes.map(recipe => (
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
        )}
    </div>
  </div>
);
};
export default Home