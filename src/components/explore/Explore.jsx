import React from "react";
import "./explore.css";
import RecipeCard from "../recipecard/recipeCard";
import Sidebar from "../sidebar/Sidebar";

const Explore = () => {
  return (
    <>
      <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <h1>Explore recipes</h1>
          {/* Add other content here */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Explore;
