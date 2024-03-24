import React from "react";
import "./recipecard.css";
import Card from "react-bootstrap/Card";
import  Button from "react-bootstrap/Button";

const RecipeCard = ({title, calories, image, ingredients}) => {
  return (
      <Card className="recipe-card">
      <Card.Body>
        {/* <Card.Text className="card-calories">
          Calories: {calories.toFixed()}
        </Card.Text> */}
        <img className="image" src={image} alt=""/>
        <div className="title-container">
        <Card.Title className="card-title">{title}</Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
