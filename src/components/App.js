import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingForm from "./ListingForm";

function App() {
  
  const url = 'http://localhost:6001/listings'
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')
  const [newListing, setNewListing] = useState({})


  useEffect(()=>{
    fetch(`${url}`)
      .then(r=>r.json())
      .then(data=>setListings(data))}, [])

  function deleteListing(deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id)
    setListings(updatedListings)
  }

  
  function handleSubmit(e){
    e.preventDefault()
    setNewListing({description:e.target.description.value, image:e.target.image.value, location:e.target.location.value})
    fetch(`${url}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "description": e.target.description.value,
        "image": e.target.image.value,
        'location':e.target.location.value
      })
    })
      .then(r=>r.json())
      .then(newListing=>setListings([...listings, newListing]))
  
  }

  const submitSearch = someString => {
    setSearch(someString)
  }

  const searchedListings = listings.filter((listing)=>{
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="app">
      <Header onSubmit={submitSearch} />
      <ListingForm onFormSubmit={handleSubmit} />
      <ListingsContainer listings={searchedListings}
        deleteListing={deleteListing} />
    </div>
  );
}

export default App;
