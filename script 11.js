// JavaScript for interactive features

function initializeMap() {
    // Initialize Leaflet map
    var map = L.map('map').setView([51.505, -0.09], 13);

    // Add a tile layer (e.g., OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Simulate high-risk areas with color-coded predictions
    var highRiskAreas = [
        { lat: 51.51, lon: -0.1, prediction: 'high' },
        { lat: 51.505, lon: -0.09, prediction: 'medium' },
        { lat: 51.52, lon: -0.08, prediction: 'low' }
        // Add more high-risk areas as needed
    ];

    // Add markers with color-coded icons based on predictions
    highRiskAreas.forEach(function (area) {
        var color = getColorBasedOnPrediction(area.prediction);
        L.circleMarker([area.lat, area.lon], { color: color, fillColor: color, fillOpacity: 0.8, radius: 8 }).addTo(map);
    });

    // This is a basic example; in a real scenario, you'd fetch high-risk areas from your server
}

// Helper function to determine color based on prediction level
function getColorBasedOnPrediction(prediction) {
    switch (prediction) {
        case 'high':
            return 'red';
        case 'medium':
            return 'orange';
        case 'low':
            return 'green';
        default:
            return 'blue';
    }
}
