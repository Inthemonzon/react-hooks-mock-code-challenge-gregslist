import React, {useState} from "react";

function Search() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  const [searchValue, setSearchValue] = useState("")

  function handleSearch(event) {
    setSearchValue(event.target.value)
    //console.log(searchValue)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
