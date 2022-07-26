import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  
  const url = 'http://localhost:6001/listings'
  const [listings, setListings] = useState([])
  
  let [search, setSearch] = useState("")



  useEffect(()=>{
    fetch(`${url}`)
      .then(r=>r.json())
      .then(data=>setListings(data))}, [])

  // console.log(listings)


  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }


  function deleteListing(deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id)
    setListings(updatedListings)
  }


  const searchResults = listings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="app">
      <Header handleSearch={handleSubmit}/>
      <ListingsContainer listings={searchResults}
        deleteListing={deleteListing}
      />
    </div>
  );
}

export default App;
