import React from "react";

function ListingCard({description, imageSrc, location}) {

  console.log(description, imageSrc, location)


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={imageSrc} alt={"description"} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
