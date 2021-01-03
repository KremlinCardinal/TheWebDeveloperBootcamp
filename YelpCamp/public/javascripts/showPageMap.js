mapboxgl.accessToken = mapToken;

const campgroundObj = JSON.parse(campground);

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
    center: campgroundObj.geometry.coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});

new mapboxgl.Marker()
    .setLngLat(campgroundObj.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campgroundObj.title}</h3><p>${campgroundObj.location}</p>`
            )
    )
    .addTo(map);