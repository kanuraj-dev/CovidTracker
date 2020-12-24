import { makeStyles, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import DataRow from "./DataRow";
import { fetchCountries, fetchData } from "./fetchApiData";
import "./SearchCountry.css";

//   Styling the search field
const useStyles = makeStyles({
  textField: {
    width: "95%",
    background: "transparent",
  },
  input: {
    letterSpacing: "0.01428571em",
    fontFamily: "Roboto, Arial, sans-serif !important",
    fontSize: "1rem",
    fontWeight: 500,
    color: "lightgray",
    backgroundColor: "inherit",
  },
});

const emptyFetchedResult = {
  confirmed: {
    value: 0,
  },
  recovered: {
    value: 0,
  },
  deaths: {
    value: 0,
  },
  lastUpdate: "N/A",
};

function SearchCountry() {
  //   Styling the search field
  const classes = useStyles();
  // Fetch Countries
  const [fetchedCountries, setFetchedCountries] = useState(emptyFetchedResult);
  const [fetchedResult, setFetchedResult] = useState([]);
  const [searchValue, setSearchValue] = useState(null);

  // Fetch Countries

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  // Fetch Countries

  // When a country is selected
  useEffect(() => {
    const fetchAPI = async (country) => {
      setFetchedResult(await fetchData(country));
    };
    if (searchValue) {
      fetchAPI(searchValue);
    } else {
      setFetchedResult(emptyFetchedResult);
    }
  }, [searchValue]);
  // When a country is selected

  return (
    <div className="searchCountry">
      <h2 className="searchCountry__heading">Search for Country</h2>
      <div className="searchCountry__searchBox">
        <Autocomplete
          id="combo-box-demo"
          onChange={(event, newValue) => {
            setSearchValue(newValue?.name);
          }}
          onInputChange={(event, newInputValue) => {
            newInputValue == "" && setFetchedResult(emptyFetchedResult);
          }}
          options={fetchedCountries}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              className={classes.textField}
              variant="outlined"
              color="secondary"
              placeholder="Enter country name"
              InputProps={{
                ...params.InputProps,
                className: classes.input,
              }}
            />
          )}
        />
      </div>
      <DataRow
        heading={searchValue ? searchValue : "Country Name"}
        confirmed={fetchedResult?.confirmed?.value}
        recovered={fetchedResult?.recovered?.value}
        deaths={fetchedResult?.deaths?.value}
        date={fetchedResult?.lastUpdate}
      />
    </div>
  );
}

export default SearchCountry;
