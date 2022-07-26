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

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;
