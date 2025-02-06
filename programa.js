var map = L.map('map').setView([4.613451047442347, -74.15633183468704], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

var markers = [
    { lat:4.610965231796398, lon:  -74.15370171496342, popup: "Parque Timiza" },
    { lat: 4.616779616708585, lon: -74.15330125701897, popup: "Hospital de  Kennedy" }
];

 
// Agregar los marcadores al mapa
markers.forEach(function(markerData) {
    var marker = L.marker([markerData.lat, markerData.lon]).addTo(map);
    marker.bindPopup("<b>" + markerData.popup + "</b>").openPopup();
});






