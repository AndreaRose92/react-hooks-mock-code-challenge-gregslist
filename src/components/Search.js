import React from "react";

function Search({handleSearch}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input 
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={(e)=>{
          handleSearch(e)
        }}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
