import React from "react";
import "./categories.css";
import RecipeCard from "../recipecard/recipeCard";

const Categories = () => {
  return (
    <>
      <div>
        <h1>Categories</h1>
      </div>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </>
  );
};

export default Categories;
