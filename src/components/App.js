import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingData, setListingData] = useState([])

  useEffect(() => {
    fetch ("http://localhost:6001/listings")
    .then (Response => Response.json())
    .then (data => setListingData(data))
  },[])
  
  console.log(listingData)
  return (
    <div className="app">
       <Header />
       <ListingsContainer listingData={listingData}/> 
    </div>
  );
}

export default App;
