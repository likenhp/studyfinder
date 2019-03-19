$(document).ready(initializeApp);

var results = {};
var twitter = new TwitterLocation(results);

var orangeCountyCoordinates = {
    lat:33.67, lng:-117.78
};

var markers = null;
var map = null;

function initializeApp() {
    map = new Maps();

    map.initMap();
  
    var weather = new Weather();
    var yelp = new Yelp();
}

function clickHandler() {
    // $('#submitSearch').on('click', )
    debugger;
    markers = new Maps();
}

var twitter = new TwitterLocation(results);

