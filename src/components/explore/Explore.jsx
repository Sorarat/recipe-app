import React from "react";
import "./explore.css";
import RecipeCard from "../recipecard/recipeCard";
import Sidebar from "../sidebar/Sidebar";

const Explore = () => {
  return (
    <>
    <div className="title">
      <h4> Explore recipes</h4>
    </div>
    <Sidebar/>
    </>
  );
};

export default Explore;
