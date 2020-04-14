#!/usr/bin/env /usr/local/bin/node
const bitbar = require("bitbar");
const axios = require("axios");

axios
  .get(
    "https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=DE"
  )
  .then(response => {
    bitbar([
      {
        text:
          "CORONA" +
          "☣️" +
          response.data.latest.confirmed +
          ":skull:" +
          response.data.latest.deaths +
          "",
        dropdown: false
      },
      bitbar.separator
    ]);
  })
  .catch(() => {
    bitbar([
      {
        text: "N/A"
      }
    ]);
  });
