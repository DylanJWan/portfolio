let mapCenter=[34.0709,-118.444];
let zoomLevel=5

let mapOptions={
   'zoom':5,
   "center":[34.0709,-118.444],
   "title":"My map is great!"
};

// declare the map
const map = L.map('the_map').setView(mapOptions.center,mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

addMarker(37,-122,'home','home land!');
addMarker(32,-118,'work','where i work land!');
addMarker(39,-119,'location 1','random location');
addMarker(36,-120,'location 2','another random location');

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    return message
}


fetch("map.geojson")
    .then(function (data){
        return data.json()
    })
    .then(function (data){
        // Basic Leaflet method to add GeoJSON data
        L.geoJSON(data).addTo(map)
    });
