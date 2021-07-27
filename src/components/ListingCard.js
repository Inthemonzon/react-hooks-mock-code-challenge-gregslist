import React, {useState} from "react";

function ListingCard({image, description, location}) {

  const [favorited, setFavorited] = useState(true)

  function handleFavorite() {
    setFavorited(!favorited)
  }

  function handleDelete(event) {
    //console.log(event.target.parentElement)
    let card = event.target.parentElement.parentElement
    console.log(card)
    card.remove();
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorited ? ( <button onClick={handleFavorite} className="emoji-button favorite active">★</button> ) : ( <button onClick={handleFavorite} className="emoji-button favorite">☆</button>)}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
