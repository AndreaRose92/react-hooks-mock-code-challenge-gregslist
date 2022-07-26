import React, { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, deleteListing}) {

  const [sortList, setSortList] = useState('')
  

  // const renderListing = <ListingCard key={newListing.id} description={newListing.description} imageSrc={newListing.image} location={newListing.location} listing={newListing} deleteListing={deleteListing} />


  function handleSort(e) {
    setSortList(e.target.value)
  }

  function handleSortListings(sortList, listings) {
    if (sortList === 'A') {
      return listings.sort(function (a,b){if(a.location<b.location){return -1};if(a.location>b.location){return 1};return 0})
    } else if (sortList === 'Z') {
      return listings.sort(function (a,b){if(a.location>b.location){return -1}if(a.location<b.location){return 1}return 0})
    } else if (sortList === '') {
      return listings
    }
  }

  return (
    <main>
      <select onChange={handleSort}>
        <option value=''>Sort By Location</option>
        <option value="A">A-Z</option>
        <option value="Z">Z-A</option>
      </select>
      <ul className="cards">
        {handleSortListings(sortList, listings).map((listing)=>{
    return <ListingCard 
      listing={listing}
      key={listing.id} 
      id={listing.id}
      description={listing.description} 
      imageSrc={listing.image} 
      location={listing.location}
      deleteListing={deleteListing}
      />
  })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
