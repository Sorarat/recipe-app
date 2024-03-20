import React from "react";
import Button from "react-bootstrap/Button";
import "./search.css";

const Search = () => {
  return (
    <div className="container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search for recipes.."
        onChange={() => {}}
      ></input>
      <div className="btn">
        <Button variant="primary" onClick={() => {}}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
