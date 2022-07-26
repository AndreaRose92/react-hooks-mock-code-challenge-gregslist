import React, {useState} from "react";

function ListingCard({listing, id, description, imageSrc, location, deleteListing}) {

  // const { id, description, imageSrc, location } = listing

  // console.log(description, imageSrc, location)
  let [ifLikes, setIfLikes] = useState(false)
  function handleClick(){
     setIfLikes(ifLikes = !ifLikes)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE'
    })
    .then(() => {deleteListing(listing)})
  }

  return (
    <li className="card" >
      <div className="image">
        <span className="price">$0</span>
        <img src={imageSrc} alt={"description"} />
      </div>
      <div className="details">
        {ifLikes ? (
          <button onClick = {handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick = {handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
