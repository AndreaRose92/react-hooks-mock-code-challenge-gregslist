import React from "react";

function Search({handleSubmit}) {

  return (
    <form className="searchbar" >
      <input 
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={e=>e.target.value}
      />
      <button type="submit" onSubmit={handleSubmit}>🔍</button>
    </form>
  );
}

export default Search;
