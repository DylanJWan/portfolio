// JavaScript const variable declaration
const map = L.map('the_map').setView([34.0709, -118.444], 15); 

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 





//JavaScript let variable declaration to create a marker
let taipei = L.marker([25.0330, 121.5654]).addTo(map) 
        .bindPopup('Taipei')
        .openPopup();


let tokyo = L.marker([35.6762, 139.6503]).addTo(map) 
        .bindPopup('Taipei')
        .openPopup();


let sanfrancisco = L.marker([37.7749, 122.4194]).addTo(map) 
        .bindPopup('San Francisco')
        .openPopup();


let losangeles = L.marker([34.0522, 118.2437]).addTo(map) 
        .bindPopup('Los Angeles')
        .openPopup();


function addMarker(latitude, longitude, message){
    L.marker([latitude, longitude]).addTo(map).bindPopup(message)
}
