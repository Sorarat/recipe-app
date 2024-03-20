import React from 'react'
import './home.css';
import RecipeCard from "../recipecard/recipeCard";
import Search from '../search/Search';

const Home = () => {
  return (
    <div>
      <h1 className="question"> What are you craving today?</h1>
      <Search />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  )
}

export default Home