import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingData}) {

  const listings = listingData.map((item) => {
    <ListingCard image={item.image} description={item.description} location={item.location}/>
  })
  return (

    <main>
      <ul className="cards">
        {listings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
