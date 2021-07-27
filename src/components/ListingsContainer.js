import React from "react";
import ListingCard from "./ListingCard";
import Search from "./Search";

function ListingsContainer({listingData, searchValue}) {
  console.log(searchValue)

  const listings = listingData.map((item) => {
    return(
    <ListingCard key={item.id} image={item.image} description={item.description} location={item.location}/>
  )})
  return (

    <main>
      <ul className="cards">
        {listings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
