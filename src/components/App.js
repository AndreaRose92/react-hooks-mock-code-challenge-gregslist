import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  
  const url = 'http://localhost:6001/listings'
  const [listings, setListings] = useState([])
  
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const searchResults = listings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })


  useEffect(()=>{
    fetch(`${url}`)
      .then(r=>r.json())
      .then(data=>setListings(data))}, [])

  // console.log(listings)

  function deleteListing(deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id)
    setListings(updatedListings)
  }

  return (
    <div className="app">
      <Header handleSearch={handleSearch}/>
      <ListingsContainer listings={searchResults}
        deleteListing={deleteListing}
      />
    </div>
  );
}

export default App;
