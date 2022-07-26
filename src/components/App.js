import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const url = 'http://localhost:6001/listings'
  const [listings, setListings] = useState([])

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
      <Header />
      <ListingsContainer listings={listings}
        deleteListing={deleteListing}
      />
    </div>
  );
}

export default App;
