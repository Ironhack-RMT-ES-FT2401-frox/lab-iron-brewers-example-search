import axios from "axios";
import { useState } from "react";

function Search(props) {

  const [ searchQuery, setSearchQuery ] = useState("")

  const handleSearch = async (e) => {
    setSearchQuery(e.target.value)
    console.log(e.target.value)

    try {
      
      // const respose = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
      // console.log(respose.data)

      const filteredBeers = props.beers.filter((eachBeer) => {
        if (eachBeer.name.startsWith(e.target.value) === true) {
          return true
        } else {
          return false
        }
      })
      console.log(filteredBeers)

      props.setFilteredBeers(filteredBeers)

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input
          type="text"
          className="form-control search-bar"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default Search;
