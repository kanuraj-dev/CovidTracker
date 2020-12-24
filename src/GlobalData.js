import React, { useEffect, useState } from "react";
import DataRow from "./DataRow";
import { fetchData } from "./fetchApiData";

function GlobalData() {
  // Fetch Basic Data
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedData(await fetchData());
    };
    fetchAPI();
  }, [setFetchedData]);
  // Fetch Basic Data

  return (
    <div>
      <DataRow
        heading="Global Data"
        confirmed={fetchedData?.confirmed?.value}
        recovered={fetchedData?.recovered?.value}
        deaths={fetchedData?.deaths?.value}
        date={fetchedData?.lastUpdate}
      />
    </div>
  );
}

export default GlobalData;
