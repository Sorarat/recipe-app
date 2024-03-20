import React from "react";
import "./recipecard.css";
import Card from "react-bootstrap/Card";
import  Button from "react-bootstrap/Button";

const RecipeCard = ({title, calories, image, ingredients}) => {
  return (
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {/* <ol>
            {ingredients.map(ingredient => (
              <li>{ingredient.text}</li>
            ))}
          </ol> */}
          Calories: {calories.toFixed()}
        </Card.Text>
        <img className="image" src={image} alt=""/>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
