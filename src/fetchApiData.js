import axios from "./axios";

export const fetchData = async (country, sorting) => {
  let changeableUrl = "";
  if (sorting && country) {
    changeableUrl = `/countries/${country}/${sorting}`;
  } else if (sorting) {
    changeableUrl = `/${sorting}`;
  } else if (country) {
    changeableUrl = `/countries/${country}`;
  }

  try {
    const response = await axios.get(changeableUrl);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const countriesList = await axios.get(`/countries`);
    return countriesList.data.countries;
  } catch (error) {
    console.log(error);
  }
};
