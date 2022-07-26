import React, {useState} from "react";

function ListingCard({description, imageSrc, location}) {

  console.log(description, imageSrc, location)
  let [ifLikes, setIfLikes] = useState(false)
  function handleClick(){
     setIfLikes(ifLikes = !ifLikes)
  }

  return (
    <li className="card">
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
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
