// https://github.com/mapbox/mapbox-gl-leaflet/blob/master/examples/basic.html

// Create a Leaflet map
// L contains the Leaflet methods
const options = {
  accessToken: 'no-token',
  style: 'https://raw.githubusercontent.com/osm2vectortiles/mapbox-gl-styles/master/styles/bright-v9-cdn.json',
}

// Map contains the Leaflet map you’re creating
const Map = L.map('map').setView([52.36, 4.91], 12)
L.mapboxGL(options).addTo(Map)


// Let’s fetch some data from an API:
// 1) You need a URL,
const url = 'https://api.datapunt.amsterdam.nl/bag/pand/'

// 2) And make a request using the URL.
// The second parameter is a function that will be executed using the
// response-data when the request is succesful.
getJSON(url, function(response) {
  console.info("It worked:")
  console.log(response)
})




// function used to request data from an API:
function getJSON(url, callback) {
  return fetch(url, { method: 'get', })
    .then(request => request.json())
    .then(response => callback(response))
    .catch(console.warn)
}