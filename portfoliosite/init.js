// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':15}

// JavaScript const variable declaration
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom); 

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 







//JavaScript let variable declaration to create a marker
let taipei = L.marker([25.0330, 121.5654]).addTo(map) 
        .bindPopup('Taipei')
        .openPopup();


let tokyo = L.marker([35.6762, 139.6503]).addTo(map) 
        .bindPopup('Tokyo')
        .openPopup();


let sanfrancisco = L.marker([37.7749, -122.4194]).addTo(map) 
        .bindPopup('San Francisco')
        .openPopup();


let losangeles = L.marker([34.0522, -118.2437]).addTo(map) 
        .bindPopup('Los Angeles')
        .openPopup();


function addMarker(latitude, longitude, message){
    L.marker([latitude, longitude]).addTo(map).bindPopup(message)
}







//function to create buttons
function createButtons(lat,lng,title){
        const newButton = document.createElement("button"); 
        newButton.id = "button"+title; 
        newButton.innerHTML = title; 
        newButton.setAttribute("lat",lat); 
        newButton.setAttribute("lng",lng); 
        newButton.addEventListener('click', function(){
            map.flyTo([lat,lng]); 
        })
        document.getElementById("contents").appendChild(newButton); 
    }


//calling the function so it works 
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    createButtons(lat,lng,title); 
    return message
}


createButtons(25.0330, 121.5654, 'Taipei');
createButtons(35.6762, 139.6503, 'Tokyo');
createButtons(37.7749, -122.4194, 'San Francisco');
createButtons(34.0522, -118.2437, 'Los Angeles');


fetch("map.geojson")
    .then(response => {
        return response.json()
    })
    .then(data =>{
        // Basic Leaflet method to add GeoJSON data
        L.geoJSON(data, {
                pointToLayer: (feature, latlng) => { 
                    return L.circleMarker(latlng, {color: feature.properties.color})
                }
            }).bindPopup(layer => {
                return layer.feature.properties.place;
            }).addTo(map);
    })