$(document).ready(initializeApp);

var orangeCountyCoordinates = {
    lat:33.67, lng:-117.78
};

var markers = null;
var map = null;

function initializeApp() {
    map = new Maps();

    map.initMap();
}

function clickHandler() {
    // $('#submitSearch').on('click', )
    debugger;
    markers = new Maps();
}