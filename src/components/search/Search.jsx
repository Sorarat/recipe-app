import React from "react";
import Button from "react-bootstrap/Button";
import "./search.css";
import { useState } from "react";

const Search = ({updateSearch, handleSubmit}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // function to handle input change
  const handleChange = (e) => {
    setSearchTerm(e.target.value); // Update the local state with the input value
    updateSearch(e); // Call the parent component's updateSearch function to update the search query
  }
  return (
    <div className="container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search for recipes.."
        value={searchTerm}
        onChange={handleChange}
      ></input>
      <div className="btn-container">
        <Button className="btn" onClick={handleSubmit}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
