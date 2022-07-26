import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {

  // console.log(listings)

  const listingsToDisplay = listings.map((listing)=>{
    return <ListingCard key={listing.id} description={listing.description} imageSrc={listing.image} location={listing.location}  />
  })
  return (
    <main>
      <ul className="cards">
        {listingsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
