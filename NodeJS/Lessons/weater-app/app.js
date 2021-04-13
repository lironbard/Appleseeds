const request = require("request");

const url = "http://api.weatherstack.com/current?access_key=09fefbc496a60ea384f5834407f84f9d&query=37.8267,-122.4233&units=m";

request({ url: url, json: true }, (err, resp) => {
  // console.log(resp.body.current);
  console.log(resp.body.current.weather_descriptions[0] + ". It is currently " + resp.body.current.temperature + " degrees out. There is a " + resp.body.current.humidity + "% humidity");
});

//----------------------------------\\

// https:api.mapbox.com/geocoding/v5/mapbox.places/Los Angeles.json?access_token=pk.eyJ1IjoibGlyb25iIiwiYSI6ImNrbmdmNnpwaTA2bXQyb29iOG13a2FmNngifQ.HGbT8E4ZZ4VU4WGf-q9xcA&limit=1

// const geoCodeURL = "https:api.mapbox.com/geocoding/v5/mapbox.places/Los Angeles.json?access_token=pk.eyJ1IjoibGlyb25iIiwiYSI6ImNrbmdmNnpwaTA2bXQyb29iOG13a2FmNngifQ.HGbT8E4ZZ4VU4WGf-q9xcA&limit=1";

// request({ url: geoCodeURL, json: true }, (err, resp) => {
//   const latitude = resp.body.features[0].center[1];
//   const longitude = resp.body.features[0].center[0];

//   console.log(latitude, longitude);
// });
