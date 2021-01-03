mapboxgl.accessToken = mapToken;

const campgroundObj = JSON.parse(campground);

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: campgroundObj.geometry.coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});

new mapboxgl.Marker()
    .setLngLat(campgroundObj.geometry.coordinates)
    .addTo(map);