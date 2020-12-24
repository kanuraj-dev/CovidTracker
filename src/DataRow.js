import { Grid } from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";
import "./DataRow.css";

function DataRow({ heading, confirmed, recovered, deaths, date }) {
  const numberWithCommas = (x) => {
    if (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  };
  const convertToDate = (_date) => {
    let newDate = new Date(_date);
    return newDate.toDateString() + ", " + newDate.toLocaleTimeString();
  };

  return (
    <div className="DataRow">
      <Grid container fluid>
        <Grid item xs={12}>
          <h1 className="DataRow__heading">{heading}</h1>
          {/* print date only if it is defined  */}
          {date != "N/A" && (
            <p className="DataRow__date">
              Last Updated On : {convertToDate(date)}
            </p>
          )}
          {/* print date only if it is defined  */}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="DataRow__card">
            <h3 className="DataRow__cardTitle">
              Confirmed <span>😧</span>
            </h3>
            <p className="DataRow__cardCount">
              {/* set "N/A" if value is 0 */}
              {confirmed ? (
                <CountUp
                  end={parseInt(confirmed)}
                  start={confirmed / 10}
                  duration={1}
                  separator=","
                />
              ) : (
                "N/A"
              )}
              {/* ............ */}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="DataRow__card">
            <h3 className="DataRow__cardTitle">
              Recovered <span>🥳</span>
            </h3>
            <p className="DataRow__cardCount">
              {/* set "N/A" if value is 0 */}
              {recovered ? (
                <CountUp
                  end={parseInt(recovered)}
                  start={recovered / 10}
                  duration={1}
                  separator=","
                />
              ) : (
                "N/A"
              )}
              {/* ........ */}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="DataRow__card">
            <h3 className="DataRow__cardTitle">
              Deaths <span>😔</span>
            </h3>
            <p className="DataRow__cardCount">
              {/* set "N/A" if value is 0 */}
              {deaths ? (
                <CountUp
                  end={parseInt(deaths)}
                  start={deaths / 10}
                  duration={1}
                  separator=","
                />
              ) : (
                "N/A"
              )}
              {/* ....... */}
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default DataRow;
