import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, deleteListing}) {

  // console.log(listings)

  const listingsToDisplay = listings.map((listing)=>{
    return <ListingCard 
      listing={listing}
      key={listing.id} 
      id={listing.id}
      description={listing.description} 
      imageSrc={listing.image} 
      location={listing.location}
      deleteListing={deleteListing}
      />
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
